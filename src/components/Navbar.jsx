import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {BsFillCartFill} from 'react-icons/bs' 

export const Navbar = () => {
  return (
    <div
      className="max-w-3xl mx-auto flex justify-between 
    items-end p-4"
    >
      {/* left side */}
      <div className="flex items-center">
        <div className="curser-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div
          className="hidden sm:flex items-center bg-gray-200 
        rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div
        className="bg-gray-200 rounded-full flex items-center px-2 w-[200px]
    sm:w-[200px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input className="bg-transparent p-2  w-full focus:outline-none"
         type="text" placeholder="Search foods" />
      </div>
      {/* Cart Button */}
        <button className="bg-black text-white hidden sm:flex items-center">
            <BsFillCartFill />Cart
        </button>
      
    </div>
  );
};
