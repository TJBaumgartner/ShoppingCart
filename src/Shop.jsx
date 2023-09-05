/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Header from "./Header";
import ShopGrid from "./ShopGrid";
import Footer from "./Footer";
import Cart from "./Cart";
//import { useState } from "react";
const ShopPage = (props) => {
    const {name} = useParams();
    return (
    <div className="ShopPage">
      <Header handleClick={props.handleClick} count={props.count} toggleCart={props.toggleCart}></Header>
      {props.showCart && <Cart cart={props.cart}></Cart>}
      <ShopGrid data={name}></ShopGrid>
      <Footer></Footer>
    </div>
  );
};

export default ShopPage;