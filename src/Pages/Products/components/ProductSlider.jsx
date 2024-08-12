import React from "react";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function ProductSlider({ products}) {
    var settings = {
       
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow:6,
        slidesToScroll: 1,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
      };
return (
    <Slider {...settings}>
       
    {products.map((item, index) => (
        <Link to={`/product/${index}`} key={index}>
           <div className="p-2"> 
            <div
              key={index}
              className="bg-[#FAF7FF] transform transition-transform duration-300 hover:border-purple-700 hover:border-2 duration-500 overflow-hidden rounded border duration-1000 rounded-md"
            >
              <div className="relative overflow-hidden items-center justify-center flex w-full">
                <img
                  alt={item.title}
                  className="  h-[200px] object-cover"
                  src={item.img}
                />
                <div className="text-purple-700 absolute top-2 text-xs border border-gray-100 left-2 bg-white rounded-lg px-3 py-1.5">
                  Newest
                </div>
              </div>
              <div className="flex justify-between p-4 bg-white">
                <div className="">
                  <p className="text-gray-color font-bold text-xs">{item.title}</p>
                  <p className="text-gray-00 text-xs mt-3">Price</p>
                  <p className="text-black   font-bold">{item.price}</p>
                </div>
                <div>
                  <button className="p-2 text-white rounded-lg bg-[#8527CD]">
                    <CiHeart />
                  </button>
                </div>
              </div>
                </div>
                </div>
          </Link>
        ))}
  </Slider>
);
      
}
    

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: '10px', zIndex: 1 }}
        onClick={onClick}
      >
        Next
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
        onClick={onClick}
      >
        Previous
      </div>
    );
  };