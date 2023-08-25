/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ItemCard from "./Card";
const ShopGrid = (props) => {
    const sectionName = props.data
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const variable = 'jewelery'
    // fetch('https://fakestoreapi.com/products'category/' + variable)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
        fetch('https://fakestoreapi.com/products/category/' + sectionName)
                .then((response) => {
                    return response.json()
                })
                .then((response) => setData(response))
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
    }, [sectionName])
    return (
    <div className="ShopContainer">
        {loading && <div>A moment please...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <div className="ShoppingGrid">
            {data &&
            data.map((data) => (
                <ItemCard key={data.id} title={data.title} image={data.image}></ItemCard>
            ))}
        </div>
    </div>
  );
};

export default ShopGrid;
