import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/shop/men's%20clothing">
        Click to shop mens clothes!
      </Link>
      <Link to="/shop/women's%20clothing">
        Click to shop womens clothes!
      </Link>
      <Link to="/shop/jewelery">
        Click to shop jewelery!
      </Link>
      <Link to="/shop/electronics">
        Click to shop electronics!
      </Link>
    </div>
  );
};

export default Header;