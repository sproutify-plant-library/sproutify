import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={`/`}>
        <h1>Sproutify 🪴</h1>
      </Link>
    </header>
  );
}

export default Header;
