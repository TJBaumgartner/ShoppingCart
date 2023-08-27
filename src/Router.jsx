import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import ShopPage from "./Shop";
import PurchaseItem from "./PurchaseItem";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop/:name",
      element: <ShopPage />,
    },
    {
      path: "/shop/:name/:item",
      element: <PurchaseItem />,
    },    
  ]);

  return <RouterProvider router={router} />;
};

export default Router;