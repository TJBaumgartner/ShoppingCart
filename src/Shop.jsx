/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import Header from "./Header";
import ShopGrid from "./shopGrid";
import Footer from "./Footer";
//import { useState } from "react";
const ShopPage = (props) => {
    const {name} = useParams();
    return (
    <div className="ShopPage">
      <Header handleClick={props.handleClick} count={props.count}></Header>
      <ShopGrid data={name}></ShopGrid>
      <Footer></Footer>
    </div>
  );
};

export default ShopPage;