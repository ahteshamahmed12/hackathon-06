import Link from "next/link"
export default function specs2(){
    return(
        <div  className="bg-blue-200 w-full h-screen">
            <h1 className="text-center text-4xl py-12"><strong><u>Toyota Corolla 2024 Price in Pakistan,Image,Reviews&<br />Specs </u></strong></h1>
            <div className="flex justify-center mt-5">
                <img src="https://th.bing.com/th?id=OIP.k-lb14raKtVkGUyUddp6TgHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"  /> </div>
            
            <div className="gap-5 flex justify-center mt-7">
                <div><button className="border border-blue-700 bg-blue-700 w-60 h-12 text-2xl text-white">Book a test drive</button></div>
                <div><button className="border border-purple-700  w-60 h-12 text-purple-700 ">Request Bank Finance</button></div>
                <div><button className="border border-purple-700  w-60 h-12 text-purple-700">Visit place</button></div>
                <div><button className="border border-purple-700 w-60 h-12 text-purple-700">Car Inspection </button></div>
            </div>
            <h3 className="text-center mt-5"><strong> Vehicle Description</strong> </h3>
<div className="flex justify-center gap-6">
        <p><strong>Number of Doors</strong> 4</p>
        <p><strong>Engine</strong>1800cc</p>
        <p><strong>Condition</strong>8.5/10</p>
        <p><strong>Driven</strong>9,500KM</p>
        <p><strong>Suspension Type</strong>soft suspension</p> 
        <p><strong>AVG</strong>13 km per litr</p>
        <p><strong>Transmission</strong>automatic</p>
        <p><strong>AVG</strong>13 km per litr</p>


        </div>

        <div className="flex justify-center mt-5">
            <h3 className="text-3xl text-green-700">PKR 50,00,000</h3> <br /> 
            </div >
            <div className="flex justify-center mt-5">
            
        <Link href="/detail"> <button className="border border-blue-700 bg-blue-700 text-2xl w-60 h-12">Make Payment</button></Link>
        </div>
            </div>
            
        
        
    )
}