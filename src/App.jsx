import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import './index.css'

function App() {
  return (
    <>
      <h1>Sproutify</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
