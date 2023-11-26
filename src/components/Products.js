import React from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
      </div>
      <div className="max-w-screen-xl mx-auto py-10">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;
