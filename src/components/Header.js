import React from "react";
import { TbMenuDeep } from "react-icons/tb";

const Header = () => {
  return (
    <div>
      <div className="max-w-[1348px] px-8 mx-auto flex justify-between items-center py-5">
        <a href="#" className="text-2xl font-bold">
          HIRE<span className="text-pink-500 font-bold">CAR</span>
        </a>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li className="text-light-gray border-b-2 hover:border-pink-500 transition-all duration-150 ease-in cursor-pointer border-pink-500">
              Home
            </li>
            <li className="text-light-gray border-b-2 hover:border-pink-500 transition-all duration-150 ease-in cursor-pointer border-transparent">
              Booking
            </li>
            <li className="text-light-gray border-b-2 hover:border-pink-500 transition-all duration-150 ease-in cursor-pointer border-transparent">
              About
            </li>
            <li className="text-light-gray border-b-2 hover:border-pink-500 transition-all duration-150 ease-in cursor-pointer border-transparent">
              Services
            </li>
            <li className="text-light-gray border-b-2 hover:border-pink-500 transition-all duration-150 ease-in cursor-pointer border-transparent">
              Contact
            </li>
          </ul>
        </div>

        <TbMenuDeep className="block lg:hidden cursor-pointer w-6 h-6" />

        <div className="hidden lg:flex items-center gap-[30px]">
          <button className="outline-none transition-all duration-150 ease-in text-black hover:text-pink-500">
            Login
          </button>
          <button className="outline-none transition-all duration-150 ease-in text-black border-2 border-pink-500 rounded-full py-2 px-5 hover:bg-pink-500">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
