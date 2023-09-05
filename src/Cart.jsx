/* eslint-disable react/prop-types */
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartItems = props.cart
    console.log(cartItems)
    return (
        <div className="test">
         {cartItems ?(
         cartItems.map((product) => (
            <CartItem 
            key={product.item.id} 
            price={product.totalCost} 
            title={product.item.title}
            amount={product.amount} /> 
        ))
        ) : (
            <p>There are no cart items</p>
        )}
    </div>
    );
};

export default Cart;