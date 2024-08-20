import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlantDetails from "./components/PlantDetails";
import CreatePlant from "./components/CreatePlant";
import EditPlant from "./components/EditPlant";
import './index.css'


function App() {
  return (
    <>
      <h1>Sproutify</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant/create" element={<CreatePlant />} />
        <Route path="/plant/:plantId" element={<PlantDetails />} />
        <Route path="/plant/edit/:plantId" element={<EditPlant />} />
      </Routes>
    </>
  );
}

export default App;
