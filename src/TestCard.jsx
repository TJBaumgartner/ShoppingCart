/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
const TestCard = (props) => {
    const sectionName = props.data
    console.log(sectionName)
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
    <div>
        {loading && <div>A moment please...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
            {data &&
            data.map((data) => (
                <li key={data.id}>
                <h3>{data.title}</h3>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TestCard;
