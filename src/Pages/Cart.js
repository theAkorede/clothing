import React from "react";
import Cartitem from "../Components/Cartitem";

const Cart = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-10">
      <h2 className="text-3xl font-semibold pb-5 border-b-[1px] border-b-zinc-400">
        Shopping Cart
      </h2>
      <Cartitem />
    </div>
  );
};

export default Cart;
