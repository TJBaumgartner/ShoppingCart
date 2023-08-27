/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ItemCard = (props) => {
    const data = props.data;
    return (
    <div className="ShopItem">
        <Link to={`/shop/${data.category}/${data.title}`} state={{props}}>
            <h3>{data.title}</h3>
            <img src={data.image}></img>
        </Link>
    </div>
  );
};

export default ItemCard;