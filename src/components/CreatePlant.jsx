import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";

function CreatePlant() {
  const [title, setTitle] = useState("");
  const [scientificName, setScientificName] = useState("")
  const [description, setDescription] = useState("");
  const [water, setWater] = useState("");
  const [sun, setSun] = useState("");
  const [tips, setTips] = useState("");
  const [type, setType] = useState("");
  const [maintenance, setMaintenance] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = {
      title: title,
      scientificName: scientificName,
      description: description,
      water: water,
      sun: sun,
      tips: tips,
      type: type,
      maintenance: maintenance
    };

    axios
      .post(`${API_URL}`, newPlant)
      .then((response) => {
        const newPlantId = response.data.id;
        navigate(`/plant/${newPlant}`);
      })
      .catch((e) => console.log("Error creating a new plant...", e));
  };

  return (
    <div className="CreatePlant">
      <h3> Add Plant </h3>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Enter the Title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>

        <label>
          Scientific Name:
          <input
            type="text"
            name="scientificName"
            placeholder="Enter Scientfic Name"
            value={scientificName}
            onChange={(e) => {
              setScientificName(e.target.value);
            }}
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            placeholder="Enter the Description"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>

        <label>
          Water Level:
          <input
            type="text"
            name="water"
            placeholder="Enter Water Level"
            required
            value={water}
            onChange={(e) => {
              setWater(e.target.value);
            }}
          />
        </label>

        <label>
          Sun:
          <input
            type="text"
            name="sun"
            placeholder="Sun Light Required"
            required
            value={sun}
            onChange={(e) => {
              setSun(e.target.value);
            }}
          />
        </label>

        <label>
          Tips:
          <input
            type="text"
            name="tips"
            placeholder="Any Tips"
            value={tips}
            onChange={(e) => {
              setTips(e.target.value);
            }}
          />
        </label>

        <label>
          Type:
          <input
            type="text"
            name="type"
            placeholder="Indoor/Outdoor/Succelent/Herb"
            required
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </label>

        <label>
          Maintainance:
          <input
            type="text"
            name="maintenance"
            placeholder="Low/Medium/High"
            required
            value={maintenance}
            onChange={(e) => {
              setMaintenance(e.target.value);
            }}
          />
        </label>



        <button>Create</button>
      </form>
    </div>
  );
}

export default CreatePlant;