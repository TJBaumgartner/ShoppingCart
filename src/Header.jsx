/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <ul>
        <li>
          <Link to="/shop/men's%20clothing">
            men&apos;s Clothing
          </Link>
        </li>
        <li>
          <Link to="/shop/women's%20clothing">
          Women&apos;s Clothing
          </Link>
        </li>
        <li>
          <Link to="/shop/jewelery">
            Jewelery
          </Link>
        </li>
        <li>
          <Link to="/shop/electronics">
            Electronics
          </Link>
        </li>
        <li  onClick={props.handleClick}>
            Cart {props.count}
        </li>
      </ul>

      
      
      
    </div>
  );
};

export default Header;