import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/api";
import axios from "axios";

function PlantDetails() {
  const [plant, setPlant] = useState(null);

  const { plantId } = useParams();

  const getPlant = () => {
    axios
      .get(`${API_URL}/${plantId}`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((error) =>
        console.log("Error getting plant details from the API", error)
      );
  };

  useEffect(() => {
    getPlant();
  }, []);
  if (plant === null) {
    return "Loader";
  }

  return (
    <div className="PlantDetails">
      {plant && (
        <>
          <h2>{plant.title}</h2>
          <p>Scientific name: {plant.subtitle}</p>
          <p>Description: {plant.description}</p>
          <p>Water Level: {plant.water}</p>
          <p>Sun: {plant.sun}</p>
          <p>Tips: {plant.tips}</p>
          <p>Category: {plant.type}</p>
          <p>Maintainance: {plant.maintenance}</p>
        </>
      )}

      <Link to="/">
        <button>Back</button>
      </Link>

      <Link to={`/plant/edit/${plantId}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default PlantDetails;
