import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
const PurchaseItem = () => {
  const location = useLocation()
  const {props} = location.state
    return (
    <div className="ShopPage">
        <Header></Header>
          
        <Footer></Footer>
    </div>
  );
};

export default PurchaseItem;