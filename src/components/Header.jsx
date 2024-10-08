import { Link } from "react-router-dom";

function Header({ onFilterChange }) {
  return (
    <>
      <header className="header">
        <Link to={`/`}>
          <img src="/images/Sproutify_logo.png" alt="Sproutify Logo" />
        </Link>
      </header>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item" onClick={() => onFilterChange("")}>
            All Plants
          </li>
          <li className="nav-item" onClick={() => onFilterChange("indoor")}>
            Indoor Plants
          </li>
          <li className="nav-item" onClick={() => onFilterChange("outdoor")}>
            Outdoor Plants
          </li>
          <li className="nav-item" onClick={() => onFilterChange("succulent")}>
            Succulents
          </li>
          <li className="nav-item" onClick={() => onFilterChange("herb")}>
            Herbs
          </li>
          <li className="nav-item">
            <Link to="/plant/create">
              <button className="createButton">Create </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
