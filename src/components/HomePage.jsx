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
        const shuffledPlants = response.data.sort(() => 0.5 - Math.random());//Shuffle the plants
        
        setPlant(shuffledPlants.slice(0));
      })
      .catch((error) =>
        console.log("Error getting the plant list from the API", error)
      );
  }, []);

  if(plant === null){
    return "Loader";
  }

  return (
    <>
      <div className="plantList">
        {plant &&
          plant.map((elm) => {
            return (
              <div className="card" key={elm.id}>
                <Link to={`/plant/${elm.id}`}>
                  <h2>{elm.title}</h2>
                  <p>{elm.type}</p>
                  <p>{elm.maintenance} Maintenance</p>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HomePage;
