
const Navbar = () => {
  return (
    <div>
        
      <nav className=" bg-black text-white h-36 w-full ">
        <div className="flex justify-start px-48 w-full  ">
          <div className=" w-full h-8"><h1><a href="#">Download App via SMS </a> </h1>

        </div>
    <div className="flex justify-end  items-end w-60 gap-4  ">
            <div ><a className="text-red-800" href="#">اردو</a></div>
            <div><a href="#">Sign Up</a></div>
            <div><a href="#">Sign in</a></div>
          </div>
    </div>
        
        <div className="flex justify-start px-48 gap-1 "> 
            <img className="w-40 mt-5" src="https://th.bing.com/th/id/OIP.E4WaKR_2Bsy6--miCYifIAHaB-?w=298&h=93&c=7&r=0&o=5&pid=1.7" />
            <select className="h-10 mt-10 bg-black px-8  py-2 ">
                <option >Used cars</option>
                <option >New truck</option>
            </select>

            <select className="h-10 bg-black px-8 py-2 mt-10 ">
                <option >New Cars</option>
                <option >New SUV</option>
            </select>

            <select className="h-10 bg-black px-8 py-2 mt-10">
                <option >Bikes</option>
                <option >New Bikes</option>
            </select>

            <select className="h-10 bg-black px-8 py-2 mt-10">
                <option >Auto Stores</option>
                <option >Self Stores</option>
            </select>

            <div className="h-10 bg-black px-8 py-2 mt-10"> <a href="">Video</a></div>
            <div className="h-10 bg-black px-8 py-2 mt-10"><a href="">Forums</a></div>
            <div className="h-10 bg-black px-8 py-2 mt-10"><a href="">Blog</a></div>
            <div className="h-10 bg-black  px-8 py-2 mt-10"><a href="">More</a></div>
            <div></div>
            <button className="h-10 border border-red-950 bg-red-950  w-60 mt-10">Post an Ads</button>

        </div >

        

      </nav>

      
    </div>
  );
};
export default Navbar;
