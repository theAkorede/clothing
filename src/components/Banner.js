import React, { useState } from "react";
import {
  HiArrowRight,
  HiArrowLeft,
  HiClock,
  HiPhone,
  HiMap,
  HiMail,
} from "react-icons/hi";
import { HeroImg, HeroImg1, HeroImg2 } from "../assets/index";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-hidden relative">
      <div className="w-screen h-[650px] relative">
        <div
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
          className="w-[400vw] h-full flex bg-blue-400 "
        >
          <img
            className="w-screen h-full object-cover"
            src={HeroImg}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={HeroImg1}
            alt="ImgOne"
          />
          <img
            className="w-screen h-full object-cover"
            src={HeroImg2}
            alt="ImgOne"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
      <div className="h-20 bg-white hidden absolute left-1/2 -bottom-10 transform -translate-x-1/2 lg:inline-flex items-center gap-x-12 p-10 mb-10">
        <div className="flex items-center gap-5 w-60 ">
          <HiClock className="text-blue-400 w-8 h-8" />
          <div>
            <p className="">Sunday-Saturday</p>
            <p className="font-semibold">9:00am - 7:00pm</p>
          </div>
        </div>

        <div className="flex items-center gap-5 w-60 ">
          <HiPhone className="text-blue-400 w-8 h-8" />
          <div>
            <p className="">09026000778</p>
            <p className="font-semibold">Order by Call</p>
          </div>
        </div>

        <div className="flex items-center gap-5 w-60 ">
          <HiMap className="text-blue-400 w-8 h-8" />
          <div>
            <p className="">Victoria, island</p>
            <p className="font-semibold">Address</p>
          </div>
        </div>

        <div className="flex items-center gap-5 w-60 ">
          <HiMail className="text-blue-400 w-8 h-8" />
          <div>
            <p className="">Koredeaa77@gmail.com</p>
            <p className="font-semibold">Email Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
