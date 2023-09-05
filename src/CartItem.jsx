/* eslint-disable react/prop-types */

const CartItem = (props) => {
    const data = props.data;
    return (
         <div className="productCard">
             <p>{data.item.title}</p>
             <p>${data.totalCost}</p>
             <p>{data.amount}</p>
             <button onClick={() => props.decrementItem(data, 1)}>Decrease</button>
         </div>
    );
};

export default CartItem;