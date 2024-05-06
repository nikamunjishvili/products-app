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
          <div className=" w-[1320px] h-[558px] mx-auto flex">
            <div className="w-[700px]">
              <img
                className="w-[300px] h-[350px] relative left-[144px] top-[54px]"
                src={data.image}
                alt={data.title}
                width={100}
                height={100}
              />
            </div>
            <div className="relative ml-8 w-[1029px]">
              <h1 className="absolute top-[67px] right-[-100px] w-[866px] text-2xl font-bold 0">
                {data.title}
              </h1>
              <p className="relative  top-[139px] text-bordergreen font-bold text-2xl mt-5">
                ${data.price}
              </p>
              <p className="relative  top-[167px] text-lightgray">
                {data.description}
              </p>
              <div className="relative  top-[213px] flex gap-5 ">
                <button className="bg-carthovergreen py-2 px-4 rounded-3xl w-[350px] flex flex-row-reverse items-center justify-center gap-4 text-white">
                  <Shop width={15} height={15} /> Add to Cart
                </button>
                <button>
                  <Love width={52} height={52} />
                </button>
              </div>
              <p className="relative  top-[291px] mt-2 text-lightgray ">
                Category: <span>{data.category}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default ProductPage;
