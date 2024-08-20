import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlantDetails from "./components/PlantDetails";
import CreatePlant from "./components/CreatePlant";
import './index.css'

function App() {
  return (
    <>
      <h1>Sproutify</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant/create" element={<CreatePlant />} />
        <Route path="/plant/:plantId" element={<PlantDetails />} />
      </Routes>
    </>
  );
}

export default App;
