/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Header from "./Header";
import ShopGrid from "./ShopGrid";
import Footer from "./Footer";
import Cart from "./Cart";
//import { useState } from "react";
const ShopPage = (props) => {
    const {name} = useParams();
    console.log(props.sum)
    return (
    <div className="ShopPage">
      <Header handleClick={props.handleClick} count={props.count} toggleCart={props.toggleCart}></Header>
      {props.showCart && <Cart cart={props.cart} decrementItem={props.decrementItem} incrementItem={props.incrementItem} sum={props.sum}></Cart>}
      <ShopGrid data={name}></ShopGrid>
      <Footer></Footer>
    </div>
  );
};

export default ShopPage;