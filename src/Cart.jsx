/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartItems = props.cart
    return (
        <div className="Cart">
         {cartItems ?(
         cartItems.map((product) => (
            <CartItem 
            key={product.item.id} 
            data={product}
            decrementItem={props.decrementItem} /> 
        ))
        ) : (
            <p>There are no cart items</p>
        )}
    </div>
    );
};

export default Cart;