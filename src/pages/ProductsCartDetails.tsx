import { MainLayout } from "../common/components/_organisms";
import { useCart } from "../context/ProductsContext";

const ProductsCartDetails = () => {
  const { products } = useCart();

  return (
    <MainLayout>
      <div>
        {products.map((product) => {
          return <li>{product.title}</li>;
        })}
      </div>
    </MainLayout>
  );
};

export default ProductsCartDetails;
