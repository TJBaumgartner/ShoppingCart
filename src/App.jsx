import './App.css'
import { useEffect, useState } from 'react';
import Header from './Header';
const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const variable = 'jewelery'
  // fetch('https://fakestoreapi.com/products'category/' + variable)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
              .then((response) => {
                return response.json()
              })
              .then((response) => setData(response))
              .then(json=>console.log(json))
              .catch((error) => setError(error))
              .finally(() => setLoading(false));
  }, [])
  return (
    <div>
      <Header></Header>
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

export default App;