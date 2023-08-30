/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
const PurchaseItem = () => {
  const location = useLocation()
  const {props} = location.state
  return (
    <div className="ShopPage">
        <Header></Header>
        <div className="PurchaseContainer">
          <img src={props.data.image}></img>
          <div className="PurchaseDescription">
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <h2>${props.data.price}</h2>
            <h3>Rating: {props.data.rating.rate} <span>({props.data.rating.count} Reviews)</span></h3>
            <button onClick={props.handleClick}>Add to Cart</button>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default PurchaseItem;