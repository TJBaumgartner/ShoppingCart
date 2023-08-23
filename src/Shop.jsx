import { useParams } from "react-router-dom";
import Header from "./Header";
import TestCard from "./TestCard";
const ShopPage = () => {
    const {name} = useParams()

    return (
    <div>
        <Header></Header>
        <p>this is the shop</p>
        <TestCard data={name}></TestCard>
    </div>
  );
};

export default ShopPage;