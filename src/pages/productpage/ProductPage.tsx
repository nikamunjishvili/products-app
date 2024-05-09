import { useParams } from "react-router-dom";
import { MainLayout } from "../../common/components/_organisms";
import useFetch from "../../common/hooks/useFetch";
import Love from "../../common/components/_atoms/Icon/Love";
import Shop from "../../common/components/_atoms/Icon/Shop";

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
          <div className="flex gap-28 px-64 my-20 justify-center">
            <div className="">
              <img
                className=" w-[350px] h-[350px] "
                src={data.image}
                alt={data.title}
                width={100}
                height={100}
              />
            </div>
            <div className="w-[480px]">
              <h1 className=" text-2xl font-bold 0">{data.title}</h1>
              <p className=" text-bordergreen font-bold text-2xl mt-5 border-b border-graywhite pb-3">
                ${data.price}
              </p>
              <p className=" text-lightgray my-5 border-b border-graywhite pb-3">{data.description}</p>
              <div className="flex gap-5 border-b border-graywhite pb-3">
                <button className="bg-carthovergreen py-2 px-4 rounded-3xl w-[350px] flex flex-row-reverse items-center justify-center gap-4 text-white">
                  <Shop width={15} height={15} /> Add to Cart
                </button>
                <button>
                  <Love width={52} height={52} />
                </button>
              </div>
              <p className="mt-2 text-darkgray ">
                Category: <span className="text-lightgray">{data.category}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default ProductPage;
