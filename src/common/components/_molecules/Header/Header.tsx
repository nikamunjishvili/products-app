import { Link } from "react-router-dom";
import { HomeIcon, Rightarrow } from "../../_atoms";

const Header = () => {
  return (
    <div className="relative bg-cover bg-[url('/cucumber.jpg')] h-28">
      <div className="absolute inset-0 transform bg-cover bg-[url('/cucumber.jpg')] -rotate-180"></div>
      <div className="relative z-10 flex gap-2 items-center h-full p-4 mx-40">
        <Link to={"/"}>
          <HomeIcon width={16} height={17} />
        </Link>
        <Rightarrow width={14} height={13} />
        <h1 className="text-gray text-base">Categories</h1>
      </div>
    </div>
  );
};

export default Header;
