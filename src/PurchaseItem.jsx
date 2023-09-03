/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
const PurchaseItem = (props) => {
  const location = useLocation()
  const {data} = location.state
  return (
    <div className="ShopPage">
        <Header count={props.count}></Header>
        <div className="PurchaseContainer">
          <img src={data.image}></img>
          <div className="PurchaseDescription">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h2>${data.price}</h2>
            <h3>Rating: {data.rating.rate} <span>({data.rating.count} Reviews)</span></h3>
            <button onClick={() => props.handleClick(data, 1)}>Add to Cart</button>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default PurchaseItem;