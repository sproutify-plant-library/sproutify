import axios from "axios";
import {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";


function HomePage() {
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        const shuffledPlants = response.data.sort(() => 0.5 - Math.random()); //Shuffle the plants

        setPlant(shuffledPlants);
      })
      .catch((error) =>
        console.log("Error getting the plant list from the API", error)
      );
  }, []);

  if (plant === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="createButtonContainer">
        <Link to="/plant/create">
          <button className="createButton">Create New Plant</button>
        </Link>
      </div>
      <div className="plantList">
        {plant &&
          plant.map((elm) => {
            return (
              <div className="card" key={elm.id}>
                <Link to={`/plant/${elm.id}`}>
                  <h2>{elm.title}</h2>
                  <img src={`${elm.image}`} alt={elm.title} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HomePage;
