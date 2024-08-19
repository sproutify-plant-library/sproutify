import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import PlantDetails from "./components/PlantDetails";
import './index.css'

function App() {
  return (
    <>
      <h1>Sproutify</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant/:plantId" element={<PlantDetails />} />
      </Routes>
    </>
  );
}

export default App;
