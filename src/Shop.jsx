import { useParams } from "react-router-dom";
import Header from "./Header";
import ShopGrid from "./shopGrid";
const ShopPage = () => {
    const {name} = useParams()

    return (
    <div>
        <Header></Header>
        <p>this is the shop</p>
        <ShopGrid data={name}></ShopGrid>
    </div>
  );
};

export default ShopPage;