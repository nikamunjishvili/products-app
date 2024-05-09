import { Link } from "react-router-dom";
import { Heart, Plant } from "../../_atoms";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white text-black flex  items-center justify-between px-72">
      <Link to={"/"} className="flex">
        <Plant width={50} height={50} />
        <h1 className="text-4xl font-semibold ml-[5px]	">Ecobazar</h1>
      </Link>
      <div className="flex">
        <input
          className="w-[300px]  h-[40px] rounded outline-none border-y border-l border-graywhite pl-5"
          placeholder="Search"
          type="text"
        />
        <button className="bg-lightgreen w-[120px] h-[40px] rounded-r-lg text-white text-base font-semibold	">
          Search
        </button>
      </div>
      <div className="flex items-center">
        <Heart width={45.67} height={27.8} />
        <h6>
          Shopping Cart:<span>57.00$</span>
        </h6>
      </div>
    </div>
  );
};

export default Navbar;