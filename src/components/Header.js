import React from "react";
import { logo } from "../assets/index";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.akorede.productData);
  const userInfo = useSelector((state) => state.akorede.userInfo);
  return (
    <div className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0">
        <Link to="/">
          <img className="w-32" src={logo} alt="logo" />
        </Link>
        <div className="flex  items-center gap-x-5">
          <Link to="/cart">
            <div className="relative">
              <LuShoppingBag className="w-7 h-7 " />
              <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-200 w-4 h-4 rounded-full text-xs flex items-center justify-center group-hover:bg-black font-semibold group-hover:text-white">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-7 h-7 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w-1260&h-750&drp-1"
              }
              alt="userlogo"
            />
          </Link>

          {userInfo && (
            <p className="text-base font-semibold uppercase underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
