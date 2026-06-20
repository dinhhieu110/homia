import Homepage from "./pages/homepage/Homepage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product"
import Layout from "./pages/layout/Layout";
import Profile from "./pages/profile/Profile";
import ChatPage from "./pages/chat/ChatPage";
import AIChatPage from "./pages/chat/AIChatPage";


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
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/chat",
          element: <ChatPage />
        },
        {
          path: "/ai-chat",
          element: <AIChatPage />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App