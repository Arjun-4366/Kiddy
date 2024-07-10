import axios from "axios";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";

function Cards() {
const [cart,setCart] = useState()
let data = [
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
    {
        id:1,
        name:'jeans',
        discription:'Kids Solid Regular Fit, Casual Cotton Denim Shirt Half Sleeves Button Down Shirt for Kids',
        price:'899'

    },
]


  return (
    <div className="flex flex-wrap justify-center">
        {data.map((item,index)=>(
   <div
   key={index}
   className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/5 p-4">
   <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg bg-gray-300 relative">
     <div className="absolute top-0 right-0 p-2 bg-gray-400">
       <button className="text-gray-600 hover:text-red-500">
         <AiOutlineHeart className="text-xl" />
       </button>
     </div>
     <div className="relative bg-gray-400">
       <img
         className="w-full rounded-t"
         src="/banner/kids-shirts.jpg"
         alt="Product"
       />
     </div>
     
     <div className="px-6 py-4">
       <div className="font-bold text-xl mb-2">{item.name}</div>
       <p className="text-gray-700 text-base mb-2">
         {item.discription}
       </p>
       <div className="flex justify-between items-center mb-4">
         <div className="flex gap-2">
           <p className="text-gray-800 text-xl font-bold">{item.price}</p>
           <div className="flex items-center text-yellow-600">
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStar />
           </div>
         </div>
       </div>
       <div className="text-center">
         <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" >
           <RiShoppingBag3Line className="mr-2 inline-block text-xl" />
           Add to Cart
         </button>
       </div>
     </div>
   </div>
 </div>

        ))}
      
     

     

      
    </div>
  );
}


export default Cards;
