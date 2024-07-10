import React from 'react';
import { LuSlidersHorizontal } from "react-icons/lu";
import Cards from './Cards';

function Items() {
  return (
    <>
        <div className="container mx-auto py-8">
      <div className="text-center flex px-4">
        <h1 className="text-3xl font-thin font-mono mb-4">Our Top Categories</h1>
        <div className="flex items-center justify-center space-x-4 mx-4">
          <p className="text-sm">Sorted By:</p>
          <div className="flex items-center border border-gray-300 rounded px-3 py-1">
            <p className="text-sm mr-2">All Category</p>
            <LuSlidersHorizontal className="text-gray-600" />
          </div>
        </div>
      </div>    
    </div>
    <Cards/>
    </>

  );
}

export default Items;