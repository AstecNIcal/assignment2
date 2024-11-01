
   import React from "react";
import Link from "next/link";

const Navbar =()=>{

return (
    <div>
  
    
  <title>Art website</title>
    
  <nav className=  " bg-lime-100 text-gray-400 flex justify-between  place-items-center px-9 ">
 <div>
 <h1 className=" text-black  bg-indigo-100  text-lg sm:text-start md: lg:text-7xl font-semibold "> 

<a href="#!">Art Gallery🎨🖌</a>
</h1>
</div>
 <ul className ="  flex space-x-5">
 <li><Link href="/"className="text-black underline decoration-red-500
  hover: text-500">Home</Link></li>


<li><Link href="/about"className="text-black underline decoration-red-500
 hover: text-500">About</Link></li>


 <li><Link href="/contact"className="text-black underline decoration-red-500
 hover: text-500">Contact</Link></li> 


<li><Link href="/product"className="text-black underline decoration-red-500
 hover: text-500">Product</Link></li>



<li>
   
<button className="bg-red-500 p-0">Order</button>

   
</li>

 </ul>
</nav>


 </div >

);

}
export default Navbar
