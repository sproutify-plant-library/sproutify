import axios from "axios";
import {useState, useEffect } from "react";
import { Link } from "react-router-dom";


function HomePage() {

  const [plant, setPlant] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sproutify.adaptable.app/plants`)
      .then((response) => {
        const shuffledPlants = response.data.sort(() => 0.5 - Math.random());//Shuffle the plants
        
        setPlant(shuffledPlants.slice(0));
      })
      .catch((error) =>
        console.log("Error getting the plant list from the API", error)
      );
  }, []);

  return (
    <>
      <div className="plantList">
        {plant &&
          plant.map((elm) => {
            return (
              <div className="card" key={elm.id}>
                <Link to={`/plant/${elm.id}`}>
                  <h2>{elm.title}</h2>
                  <p>{elm.type} </p>
                  <p>{elm.maintenance} </p>
                  <button>Delete</button>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HomePage;
