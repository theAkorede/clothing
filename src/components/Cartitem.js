import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/akoredeSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import UsingHook from "./UsingHook";

const Cartitem = () => {
  const productData = useSelector((state) => state.akorede.productData);
  const userInfo = useSelector((state) => state.akorede.userInfo);
  const [totalAmt, setTotalAmt] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const dispatch = useDispatch();
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    let items = 0;

    productData.forEach((item) => {
      price += item.price * item.quantity;
      items += item.quantity;
    });

    setTotalAmt(price.toFixed(2));
    setTotalItems(items);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  return (
    <div className="mt-5 p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col">
      {productData.length === 0 ? (
        <p className="text-lg font-bold">Your Cart is Empty</p>
      ) : (
        <div className="mt-5 flex flex-col">
          <div className="relative overflow-x-auto shadow sm:rounded-lg ">
            <table className="w-full text-sm text-left bg-white border-t-[1px] border-t-zinc-300">
              <thead className="text-xs text-white uppercase bg-zinc-950">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Product Information
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Subtotal
                  </th>
                </tr>
              </thead>
                {productData.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <td className="px-6 py-4  gap-3">
                        <MdDelete
                          onClick={() => {
                            dispatch(deleteItem(item.id));
                            toast.success(
                              `${item.title} is removed from Cart!`
                            );
                          }}
                          className="w-4 h-4 hover:text-red-600 cursor-pointer duration-300"
                        />
                        <img
                          src={item.image}
                          alt="imageOne"
                          width={50}
                          height={50}
                          className="w-24 object-contain"
                        />
                        <p className="text-base font-medium text-black">
                          {item.title}
                        </p>
                      </td>
                      <td className="px-4 md:px-6 py-4 flex items-center gap-4">
                        <span
                          onClick={() =>
                            dispatch(
                              decrementQuantity({
                                id: item.id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                              })
                            )
                          }
                          className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-300 inline-flex items-center justify-center"
                        >
                          -
                        </span>
                        <span className="font-semibold">{item.quantity}</span>
                        <span
                          onClick={() =>
                            dispatch(
                              incrementQuantity({
                                id: item.id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                              })
                            )
                          }
                          className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-300 inline-flex items-center justify-center"
                        >
                          +
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4">
                        {item.price * item.quantity}
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
          <div className="mt-4 bg-white max-w-xl p-4 flex flex-col gap-1 border-t-[1px] border-t-zinc-300">
            <p className="flex items-center justify-between">
              Total Items<span>{totalItems}</span>
            </p>
            <p className="flex items-center justify-between">
              Total Price<span>₦{totalAmt}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="bg-zinc-800 text-zinc-200 my-2 py-2 uppercase text-center rounded-md font-semibold hover:bg-black hover:text-white duration-300"
            >
              Proceed to Checkout
            </button>
            {payNow && (
              <div>
                <UsingHook />
              </div>
            )}
          </div>
          <Link
            to="/"
            className="text-sm upper-case font-semibold underline underline-offset-2 hover:text-blue-200 duration-300 cursor-pointer"
          >
            Go back to Shopping
          </Link>
        </div>
      )}
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

export default Cartitem;
