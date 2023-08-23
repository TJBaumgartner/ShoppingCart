import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/shop">
        Click to Shop!
      </Link>
    </div>
  );
};

export default Header;