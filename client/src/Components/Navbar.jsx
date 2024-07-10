import React from 'react';
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigation = useNavigate()
  return (
    <div className="flex justify-between items-center p-4  bg-white border-b border-gray-800">
      <div onClick={()=>navigation('/')} className='hover:cursor-pointer'>
        <p className="text-2xl font-mono font-bold text-red-900 leading-none">Kiddy</p>
        <p className=' text-xs leading-none'>DRESSES</p>
      </div>
      <div className="flex space-x-4">
        <CiSearch size={24} />
        <LiaShoppingBagSolid size={24} className='hover:cursor-pointer' onClick={()=>navigation('cart')}/>
        <IoIosNotificationsOutline size={24} />
        <CiHeart size={24} />
        <CiUser size={24} />
      </div>
    </div>
  );
}

export default Navbar;