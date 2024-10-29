import Link from "next/link";

export default function detail() {
  return (
    <div>
      
      
      <div className="bg-blue-200 w-full h-screen border border-y-black ">
      <h1 className="uppercase  text-center w-full text-5xl  mt-12 ">
       <strong>enter your detail</strong> 
      </h1>

      <form className="flex justify-center flex-col content-center gap-5 items-center mt-40  ">
        <input
          type="text"
          className="border  border-gray-200 w-80 h-10 px-2 " placeholder="Enter Your Name"
        />
        <input
          type="email"
          className="border  border-gray-200 w-80 h-10  px-2" placeholder="Enter gmail @.com"
        />
        <input
          type="number"
          className="border  border-gray-200 w-80 h-10  px-2"placeholder="Card Number"
        />
        <input type="text"
         className="border  border-gray-00 w-80  h-10 px-2"placeholder="Address"
        />
       <Link href="/thankyou"><button className="border border-blue-700 bg-blue-700 w-40 h-12 mt-3 text-white text-md">Place Your Order</button></Link> 
        

        
      </form>
      </div>
    </div>
  );
}
