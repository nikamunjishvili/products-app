import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductPage from "./pages/productpage/ProductPage.tsx";
import ProductsContextProvider from "./context/ProductsContext.tsx";
import ProductsCartDetails from "./pages/ProductsCartDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <ProductPage />,
  },
  {
    path: "/products-cart",
    element: <ProductsCartDetails />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsContextProvider>
    <RouterProvider router={router} />
  </ProductsContextProvider>
);
