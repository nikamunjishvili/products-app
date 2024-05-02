import { MainLayout } from "./common/components/_organisms";
import useFetch from "./common/hooks/useFetch";
import ratingsvg from "../public/Rating.svg";
import cartbtn from "../public/cart-btn.png"

const App = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  if (loading) {
    return <MainLayout>Loading...</MainLayout>;
  }
  if (error) {
    return <MainLayout>Error:{error}</MainLayout>;
  }
  if (!data || !Array.isArray(data)) {
    return <MainLayout>No data available</MainLayout>;
  }
  return (
    <MainLayout>
      <div>
        {data?.map((product: any) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
            />
            <div>
              <div>
                <h4>{product.title}</h4>
                <span>${product.price}</span>
                <img src={ratingsvg} alt="rating" />
              </div>
              <button><img src={cartbtn} alt="cart icon" width={15} height={15}/></button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default App;
