import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";
import axios from "axios";

function PlantDetails() {
  const [plant, setPlant] = useState(null);

  const { plantId } = useParams();

  const navigate = useNavigate();

  const getPlant = () => {
    axios
      .get(`${API_URL}/plant/${plantId}`)
      .then((response) => {
        setPlant(response.data);
      })
      .catch((error) =>
        console.log("Error getting plant details from the API", error)
      );
  };

  const deletePlant = () => {
    axios
      .delete(`${API_URL}/plant/${plantId}`)
      .then((response) => navigate("/"))
      .catch((error) => console.log("Error deleting plant", error));
  };

  useEffect(() => {
    getPlant();
  }, [plantId]);

  if (plant === null) {
    return "Loader";
  }

  return (
    <div className="PlantDetails">
      {plant && (
        <>
          <h2>{plant.title}</h2>
          <h4> {plant.subtitle}</h4>
          <img src={plant.image} alt={plant.title} />
          <p>{plant.description}</p>
          <p>🚰  {plant.water}</p>
          <p>☀️   {plant.sun}</p>
          <p>📝  {plant.tips}</p>
          <p>🏷️  {plant.type}</p>
          <p>👩🏻‍🌾  {plant.maintenance} maintenance</p>
          <Link to={`${plant.wiki_link}`}>
            <p className="wikiLink">Wiki Link</p>
          </Link>
        </>
      )}

      <Link to="/">
        <button>Back</button>
      </Link>

      <Link to={`/plant/edit/${plantId}`}>
        <button>Edit</button>
      </Link>

      <button onClick={deletePlant}>Delete Plant</button>
    </div>
  );
}

export default PlantDetails;
