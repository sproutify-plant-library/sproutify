import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlantDetails from "./components/PlantDetails";
import CreatePlant from "./components/CreatePlant";
import EditPlant from "./components/EditPlant";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import './index.css'


function App() {

  const [filter, setFilter] = useState("");

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  return (
    <>
      <Header onFilterChange={handleFilterChange} />
      <Routes>
        <Route path="/" element={<HomePage filter={filter} />} />
        <Route path="/plant/create" element={<CreatePlant />} />
        <Route path="/plant/:plantId" element={<PlantDetails />} />
        <Route path="/plant/edit/:plantId" element={<EditPlant />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
