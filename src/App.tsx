import { MainLayout } from "./common/components/_organisms";
import useFetch from "./common/hooks/useFetch";
import ratingsvg from "../public/Rating.svg";
import cartbtn from "../public/cart-btn.png";
import heart from "../public/Heart.svg";
import eye from "../public/Eye-1.svg";
import { Link } from "react-router-dom";

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
      <div className="flex justify-center">
        <div className="grid place-content-around grid-cols-3 justify-items-center gap-[15px] pt-20">
          {data?.map((product: any) => (
            <Link to={`/${product.id}`} key={product.id}>
              <div
                id="product"
                className="w-[200px] h-[400px] flex justify-evenly flex-col border border-graywhite rounded-lg px-4 cursor-pointer hover:border-bordergreen transition duration-300 ease-in-out hover:shadow-lg hover:bg-green-500 hover:bg-opacity-10 relative "
              >
                <div className="heart-container">
                  <img src={heart} className="heart" alt="Heart icon" />
                </div>
                <div className="eye-container">
                  <img src={eye} className="eye" alt="Eye icon" />
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="h-[200px] w-[200px]"
                />
                <div className="flex">
                  <div>
                    <h4 className="text-[14px] h-[70px] overflow-scroll mb-4">
                      {product.title}
                    </h4>
                    <span>${product.price}</span>
                    <img src={ratingsvg} alt="rating" />
                  </div>
                  <button className="items-end flex w-[50px]">
                    <div className="bg-graywhite rounded-2xl w-[30px] h-[30px] flex items-center justify-center hover:bg-carthovergreen">
                      <img
                        src={cartbtn}
                        alt="cart icon"
                        width={15}
                        height={15}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
