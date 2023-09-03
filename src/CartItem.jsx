/* eslint-disable react/prop-types */

const CartItem = (props) => {
    return (
         <div className="productCad">
             <p>{props.title}</p>
             <p>{props.price}</p>
         </div>
    );
};

export default CartItem;