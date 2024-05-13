import { createContext, useContext, useState } from "react";

const ProductsContext = createContext([]);

export const useCart = () => useContext(ProductsContext);

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProducts = (product) => {
    setProducts((prev) => [...prev, product]);
  };
  return (
    <ProductsContext.Provider value={{ addProducts, products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;