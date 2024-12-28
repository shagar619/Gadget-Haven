import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ProductsDetails from "../Pages/ProductsDetails";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h1>ERROR PAGE!</h1>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('../Products.json')
        },

        {
          path: "/product/:id",
          element: <ProductsDetails></ProductsDetails>,
          loader: () => fetch('../Products.json')
        },

        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>
        },

        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
      ]
    },
  ]);


export default routes;