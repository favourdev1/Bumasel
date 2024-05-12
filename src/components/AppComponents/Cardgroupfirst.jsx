import React from "react";
import HeartIcon from "../Icon/HeartIcon";
import Underware from "../Icon/Underware.png";
import AfricanMan from "../Icon/AfricanMan.png";
import BlackHeadphone from "../Icon/BlackHeadphone.png";
import GameController from "../Icon/GameController.png";
import WellBuiltWoman from "../Icon/Well-builtWoman.png";
import NewSneakers from "../Icon/NewSneakers.png";
import Womanincost from "../Icon/Womanincoat.png";
// import Rectangle from "../Icon/Rectangle.png";
import BlackTop from "../Icon/BlackTop.png";
import Vector1 from "../Icon/Vector1.png";
import Vector2 from "../Icon/Vector2.png";
import Vector3 from "../Icon/Vector3.png";
import Star from "../Icon/Star1.png";

export default function Cardgroupfirst() {
  const list = [
    {
      title: "Female Sports Wear",
      img: "./images/WellBuiltWoman.png",
      price: "N30,000",
    },
    {
      title: "TPS5 Gaming Dual Pad ",
      img: "./images/GameController.png",
      price: "N15,000",
    },
    {
      title: "Ijaw Traditional wear",
      img: "./images/AfricanMan.png",
      price: "N8,500",
    },
    {
      title: "Male underwear",
      img: Underware,
      price: "N5,000",
    },
    {
      title: "Nike Airforce Jordan 1s",
      img: NewSneakers,
      price: "N30,000",
    },
    {
      title: "Sony Gaming Headset",
      img: BlackHeadphone,
      price: "N21,000",
    },
  ];

  return (
    <div className="container mx-auto px-10">
      <div className="w-full flex justify-between items-center mb-4">
        <p className="text-xl font-bold">Hot deals</p>
        <button className="text-sm px-3 py-1 rounded bg-blue-500 text-white">
          Sort
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF7FF] transform transition-transform duration-300 hover:scale-105 shadow-md rounded-md"
          >
            <div className="overflow-hidden items-center justify-center flex w-full">
              <img
                alt={item.title}
                className="  h-[300px] object-center"
                src={item.img}
              />
            </div>
            <div className="flex justify-between p-4 bg-white">
              <div className="">
                <b>{item.title}</b>
                <p className="text-gray-300 mt-3">price</p>
                <p className="text-black  mt-1 font-bold">{item.price}</p>
              </div>
              <div>
                <button className="p-4 text-white rounded-lg bg-[#8527CD]">
                  <HeartIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-14 relative w-full  h-screen">
        <img src="./Icon/Rectangle.png" alt="" className="absolute w-full h-[63%] " />
        <div className="w-full flex flex-col">
          <div className="bg-white p-4 absolute left-10 top-28 mt-4  w-[45%]">
            <p className="text-4xl text-[#8527CD]">
              Get 50% discount when you buy clothes from us today
            </p>
            <button className="flex text-center items-center pl-3 pr-1 gap-3 mt-8 bg-[#8527CD] text-white text-xl rounded-3xl">
              see products{" "}
              <div className="text-[#8527CD] bg-white p-2 rounded-full ">
                <HeartIcon />
              </div>
            </button>
          </div>
          <p className="text-white text-xl absolute top-[20rem] left-10 w-[30%]">
            Purchase clothing from us today and receive a 50% discount.
          </p>
          <div className=" w-44 h-44 border-5 border-[#8527CD] rounded-lg bg-white left-[40%] top-[15rem] absolute">
            <img src={BlackTop} alt="" className="w-44 h-44" />
          </div>
          <img
            src={Womanincost}
            alt=""
            className="absolute left-[70%] bottom-0 top-8"
          />
          <img
            src={Vector1}
            alt=""
            className="absolute top-[20rem] left-[31%]"
          />
          <img
            src={Vector2}
            alt=""
            className="absolute left-[71%] top-[14rem]"
          />
          <img
            src={Vector3}
            alt=""
            className="absolute top-[11rem] right-[3.5rem]"
          />
          <img src={Star} alt="" className="absolute left-[75%] top-[10rem]" />
        </div>
      </div>
      <div className="w-full flex justify-between items-center mb-4">
        <p className="text-xl font-bold">Hot deals</p>
        <button className="text-sm px-3 py-1 rounded bg-blue-500 text-white">
          Sort
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {list.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF7FF] transform transition-transform duration-300 hover:scale-105 shadow-md rounded-md"
          >
            <div className="overflow-hidden items-center justify-center flex w-full">
              <img
                alt={item.title}
                className="  h-[300px] object-center"
                src={item.img}
              />
            </div>
            <div className="flex justify-between p-4 bg-white">
              <div className="">
                <b>{item.title}</b>
                <p className="text-gray-300 mt-3">price</p>
                <p className="text-black  mt-1 font-bold">{item.price}</p>
              </div>
              <div>
                <button className="p-4 text-white rounded-lg bg-[#8527CD]">
                  <HeartIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
