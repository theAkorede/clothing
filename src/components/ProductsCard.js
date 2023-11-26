import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { menWears } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/akoredeSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const idStringn = (title) => {
    return String(title).toLowerCase().split("").join(",");
  };

  const handleDetails = (item) => {
    const rootId = idStringn(item.title);
    navigate(`/ProductCart/${rootId}`, {
      state: {
        item: item,
      },
    });
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 cursor-pointer overflow-hidden ">
        {menWears.map((item) => (
          <div
            key={item.id}
            className="relative bg-white group border-[1px] border-zinc-200 duration-300 hover:shadow-xl m-4 rounded-md overflow-hidden"
          >
            <img
              onClick={() => handleDetails(item)}
              className="p-4 w-full h-80 object-cover lg:object-cover group-hover:scale-105 duration-300"
              src={item.image}
              alt={item.title}
            />
            <div className="w-full border-[1px] px-2 py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-base font-bold">
                    {item.title.substring(0, 15)}
                  </h2>
                </div>
                <div className="flex justify-end gap-2 relative overflow-hidden w-20 text-sm">
                  <div className="flex transform group-hover:translate-x-24 transition-transform duration-500">
                    <p className="font-semibold">₦{item.price}</p>
                  </div>
                  <p
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                        })
                      )  & toast.success(`${item.title} is added`)
                    }
                    className="absolute z-20 w-[80px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
                  >
                    add cart{""}
                    <span>
                      <BsArrowRight />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
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

export default ProductsCard;
