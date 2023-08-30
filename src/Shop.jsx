import { useParams } from "react-router-dom";
import Header from "./Header";
import ShopGrid from "./shopGrid";
import Footer from "./Footer";
//import { useState } from "react";
const ShopPage = () => {
    const {name} = useParams();
    // const [cart, setCart] = useState([]);
    function test(){
      console.log('this is a test')
    }
    return (
    <div className="ShopPage">
        <Header></Header>
        <ShopGrid data={name} handleClick={test}></ShopGrid>
        <Footer></Footer>
    </div>
  );
};

export default ShopPage;