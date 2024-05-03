import { useParams } from "react-router-dom";
import { MainLayout } from "../../common/components/_organisms";
import useFetch from "../../common/hooks/useFetch";

const ProductPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  if (loading) {
    return <MainLayout>Loading...</MainLayout>;
  }
  if (error) {
    return <MainLayout>Error:{error}</MainLayout>;
  }
  return (
    <MainLayout>
      {data && (
        <>
          <div>
            <div>
              <img src={data.image} alt={data.title} width={100} height={100} />
            </div>
            <div>
              <h1>{data.title}</h1>
              <p>{data.price}</p>
              <p>{data.description}</p>
              <div className="flex gap-5">
                <button className="bg-carthovergreen">add to cart</button>
                <button>heart button</button>
              </div>
              <p>
                category: <span>{data.category}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default ProductPage;
