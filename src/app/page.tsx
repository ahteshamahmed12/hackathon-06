import Link from "next/link";


export default function Home() {
  return (
   <div  className="bg-blue-200 w-full h-screen ">
    <div className="py-12">
     <h1 className="text-2xl text-center   "><strong>Sell your Car On PakWheels And Get The Best Price </strong></h1>
     </div>

<div className="flex justify-center gap-4" >
      <div className=" w-4/12 h-96 mt-12 ml-60">
      <h1 className="text-2xl text-blue-800"><strong>Post Your Ads on PakWheels </strong></h1>
       <ul className="mt-4 text-lg ">
        <li className="">Post your ad for free in 3 easy steps.</li>
        <li>Get Genuine offers from Verified Buyers</li>
        <li>Sell your car Fast at the Best Price</li>
       </ul>
       <button className="border border-red-700 bg-red-700 w-36 h-12 mt-6 text-white ml-10">Post Your Ads</button>
      </div>
      <div className=" w-20 h-14 mt-28 "> <h1 className="text-3xl text-gray-500">OR</h1></div>
      <div className=" w-4/12 h-96 mt-12 ml-16">
      <h1 className="text-2xl text-blue-800 "><strong>Try PakWheels Sell It For Me </strong></h1>
      <ul className="mt-4 text-lg">
        <li>Dedicated Sales Expert to Sell your Car</li>
        <li>We Bargain for you and share the Best Offer</li>
        <li>We ensure Safe & Secure Transaction</li>
      </ul>
      
      <Link href="/list"><button className="border border-blue-800 bg-blue-800 w-40 h-14 mt-6 text-white ml-10">Register Your Cars</button></Link>
      </div>
      
</div>




</div>











  
  );
}
