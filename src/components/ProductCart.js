import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/akoredeSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductCart = () => {
  const dispatch = useDispatch();
  const [item, setItemDetails] = useState({});
  const [baseQty, setBaseQty] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setItemDetails(location.state.item);
  }, [location]);

  return (
    <div className="flex flex-col md:flex-row px-4 xl:px-0">
      <div className="w-full md:w-1/2 overflow-hidden bg-zinc-50 flex items-center justify-center p-10">
        <img
          className="transform transition-transform hover:scale-110 duration-500"
          src={item.image}
          alt="productImg"
          width={500}
          height={500}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-2 mt-5 md:mt-0">
        <h2 className="text-3xl font-semibold">{item.title}</h2>
        <p className="text-lg font-semibold">₦{item.price}</p>
        <div className="flex items-center text-base">
          <div className="flex">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-52 flex items-center justify-between text-gray-500 border p-3">
            <p className="text-sm">Quantity</p>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <button
                onClick={() => setBaseQty(Math.max(1, baseQty - 1))}
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white active:bg-black cursor-pointer duration-300"
              >
                -
              </button>
              <span>{baseQty}</span>
              <button
                onClick={() => setBaseQty(baseQty + 1)}
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white active:bg-black cursor-pointer duration-300"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  quantity: baseQty,
                })
              ) & toast.success(`${item.title} is added`)
            }
            className="bg-black text-white py-3 px-6 active:bg-gray-800"
          >
            add to cart
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductCart;
