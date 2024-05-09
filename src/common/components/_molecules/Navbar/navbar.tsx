import Plant from "../Public/plant.svg"
import Heart from "../Public/Heart.svg"

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white text-black flex  items-center">
     <img className="ml-[200px]" src={Plant} alt="" />
     <h1 className="text-4xl font-semibold ml-[5px]	">Ecobazar</h1>
     <div className="flex ml-[200px]">
     <input className="w-[300px]  h-[40px] rounded outline-none" placeholder="Search" type="text" />
     <button className="bg-green-500 w-[120px] h-[40px] rounded-r-lg text-white"  >Search</button>
     </div>
     <div className="w-[400px] h-[50px] ml-[50px] flex items-center">
     <img className="ml-[160px]" src={Heart} alt="" />
     <h6 className="w-[600px] ml-[20px]">Shopping Cart:<span>57.00$</span></h6>
     </div>
    </div>

  )
}

export default Navbar
