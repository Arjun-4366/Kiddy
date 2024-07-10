import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Categories() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <div className="flex justify-center bg-white py-4 border-b border-gray-800">
      <div className="flex space-x-8">
        <div className="relative">
          <button
            className="flex items-center p-2 text-lg font-semibold text-gray-700 "
            onClick={() => toggleDropdown('boys')}
          >
            BABIES
            {activeDropdown === 'boys' ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
          </button>
          {activeDropdown === 'boys' && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">T shirt</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Shirt</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pant</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Trouser</a>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center p-2 text-lg font-semibold text-gray-700 "
            onClick={() => toggleDropdown('girls')}
          >
            GIRLS
            {activeDropdown === 'girls' ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
          </button>
          {activeDropdown === 'girls' && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">T shirt</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Shirt</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pant</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Trouser</a>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center p-2 text-lg font-semibold text-gray-700"
            onClick={() => toggleDropdown('accessories')}
          >
            ACCESSORIES
            {activeDropdown === 'accessories' ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
          </button>
          {activeDropdown === 'accessories' && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded shadow-lg">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">T shirt</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Shirt</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Pant</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Trouser</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;