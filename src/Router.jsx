import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import ShopPage from "./Shop";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/shop",
      element: <ShopPage />,
    },

  ]);

  return <RouterProvider router={router} />;
};

export default Router;