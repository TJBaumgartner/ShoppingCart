/* eslint-disable react/prop-types */
const ItemCard = (props) => {
    return (
    <div className="ShopItem">
            <h3>{props.title}</h3>
            <img src={props.image}></img>
    </div>
  );
};

export default ItemCard;