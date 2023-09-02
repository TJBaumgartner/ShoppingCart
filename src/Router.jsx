// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import ErrorPage from "./ErrorPage";
// import ShopPage from "./Shop";
// import PurchaseItem from "./PurchaseItem";
// import { useState } from "react";

// const [cart, setCart] = useState([])

// function addToCart(item, amount){
//   const cartItem = {
//     item,
//     amount,
//   }
//   setCart(...cart, cartItem)
// }
// const Router = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App handleClick={addToCart}/>,
//       errorElement: <ErrorPage />,
//     },
//     {
//       path: "/shop/:name",
//       element: <ShopPage  handleClick={addToCart}/>,
//     },
//     {
//       path: "/shop/:name/:item",
//       element: <PurchaseItem handleClick={addToCart}/>,
//     },    
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default Router;