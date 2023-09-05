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
            decrementItem={props.decrementItem} 
            incrementItem={props.incrementItem}/> 
        ))
        ) : (
            <p>There are no cart items</p>
        )}
        <h1>Total Cost: ${props.sum}</h1>
    </div>
    );
};

export default Cart;