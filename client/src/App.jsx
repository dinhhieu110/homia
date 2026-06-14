import Homepage from "./pages/homepage/Homepage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product"
import Layout from "./pages/layout/Layout";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/product-list",
          element: <ProductList />
        },
        {
          path: "/product/:id",
          element: <Product />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App