/* eslint-disable react/prop-types */
import './App.css'
import {Route, Routes } from 'react-router-dom';
import ShopPage from './Shop';
import PurchaseItem from './PurchaseItem';
import ErrorPage from './ErrorPage';
import { useState } from 'react';

const App = () => {
const [cart, setCart] = useState([])

function addToCart(item, amount){
  const newCart = [...cart];
  newCart.push({
    item,
    amount,
  });
  setCart(newCart)
  console.log(cart)
}
  return (
      <div className='App'>
        <Routes>
          <Route path="/*" element={<ShopPage />} />
          <Route path="/shop/:name" element={<ShopPage />} />
          <Route path="/shop/:name/:item" element={<PurchaseItem handleClick={addToCart}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
  );
};

export default App;