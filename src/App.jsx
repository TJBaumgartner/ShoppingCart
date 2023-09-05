/* eslint-disable react/prop-types */
import './App.css'
import {Route, Routes } from 'react-router-dom';
import ShopPage from './Shop';
import PurchaseItem from './PurchaseItem';
import ErrorPage from './ErrorPage';
import { useState } from 'react';

const App = () => {
const [cart, setCart] = useState([]);
const [count, setCount] = useState(0);
const [showCart, setShowCart] = useState(false);
const [sum, setSum] = useState(0);

function addToCart(item, amount){
  setCount(count + amount);
  const newCart = [...cart];
  const totalCost = item.price*amount;
  const product = cart.find((product) => product.item.id === item.id);
  if (product)
    newCart.map((item) => {
      if(item === product){
        return (item.amount = item.amount + amount, item.totalCost = item.item.price*item.amount);
      }
      else{
        return item;
      }
    });
  else{
    newCart.push({
      item,
      amount,
      totalCost,
    });
  }
  calculateSum()
  setCart(newCart)
  console.log(cart)
}

function toggleCart(){
  showCart == false ? setShowCart(true) : setShowCart(false);
  console.log(showCart)
}


function decrementItem(item, amount){
  setCount(count - 1);
  const newCart = [...cart];
  const product = cart.find((product) => product.item.id === item.item.id);
  if (product)
    newCart.map((item) => {
      if(item === product){
        return (item.amount = item.amount - amount, item.totalCost = item.item.price*item.amount);
      }
      else{
        return item;
      }
    });
    const index = newCart.findIndex((product) => product.item.id === item.item.id)
    if(item.amount < 1){
      newCart.splice(index,1)
    }
  calculateSum()
  setCart(newCart)
  if(newCart.length === 0){
    toggleCart();
  }
  console.log(cart)
}
function incrementItem(item, amount){
  setCount(count + 1);
  const newCart = [...cart];
  const product = cart.find((product) => product.item.id === item.item.id);
  if (product)
    newCart.map((item) => {
      if(item === product){
        return (item.amount = item.amount + amount, item.totalCost = item.item.price*item.amount);
      }
      else{
        return item;
      }
    });
  calculateSum()
  setCart(newCart)
  console.log(cart)
}

function calculateSum(){
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
    sum = cart[i].totalCost + sum
  }
  setSum(sum);
}
return (
    <div className='App'>
    <Routes>
        <Route path="/*" element={<ShopPage 
        count={count}/>} />
        <Route path="/shop/:name" element={<ShopPage  
        count={count} 
        cart={cart}
        toggleCart={toggleCart}
        showCart={showCart}
        decrementItem={decrementItem}
        incrementItem={incrementItem}
        sum={sum}/>}/>
        <Route path="/shop/:name/:item" element={<PurchaseItem 
        addToCart={addToCart} 
        count={count} 
        cart={cart}
        toggleCart={toggleCart}
        showCart={showCart}
        decrementItem={decrementItem}
        incrementItem={incrementItem}/>} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
);
};

export default App;