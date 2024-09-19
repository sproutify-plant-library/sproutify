import axios from "axios";
import {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config/api";


function HomePage({ filter }) {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/plants`)
      .then((response) => {
        const shuffledPlants = response.data.sort(() => 0.5 - Math.random()); // Shuffle the plants
        setPlants(shuffledPlants);
        setFilteredPlants(shuffledPlants);
      })
      .catch((error) =>
        console.log("Error getting the plant list from the API", error)
      );
  }, []);

  useEffect(() => {
    const results = plants.filter((plant) =>
      plant.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlants(results);
  }, [searchTerm, plants]);


  useEffect(() => {
    if (filter) {
      const filteredResults = plants.filter((plant) =>
        plant.type.toLowerCase() === filter.toLowerCase()
      );
      setFilteredPlants(filteredResults);
    } else {
      setFilteredPlants(plants); 
    }
  }, [filter, plants]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (plants.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <>
    <div className="searchContainer">
        <input
          type="text"
          placeholder="🔍  Search for plants..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        </div>

      <div className="plantList">
        {plants &&
          filteredPlants.map((elm) => {
            return (
              <div className="card" key={elm.id}>
                <Link to={`/plant/${elm.id}`}>
                  <h2>{elm.title}</h2>
                  <div className="img-wrapper">
                    <img src={`${elm.image}`} alt={elm.title} />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default HomePage;
