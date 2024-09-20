import { Link } from "react-router-dom";


function Footer() {
  

    return (
      <footer className="footer">
      <p>Copyright © 2024 <Link to="https://github.com/sproutify-plant-library">Sproutify</Link> - All rights reserved</p>
      <p> <Link to="https://github.com/daniela-vp">Daniela </Link>  •  <Link to="https://github.com/RutuPalwekar"> Rutushree </Link></p>
    </footer>
  );
}
  
  export default Footer;