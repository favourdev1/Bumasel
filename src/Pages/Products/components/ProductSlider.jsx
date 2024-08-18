/** @format */

import React from "react";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/Home/component/ProductCard";

export default function ProductSlider({ products }) {
	var settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 6,
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
				<div className="px-2">
					<ProductCard key={index} index={index} item={item} />
				</div>
			))}
		</Slider>
	);
}

const NextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", right: "10px", zIndex: 1, }}
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
			style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
			onClick={onClick}
		>
			Previous
		</div>
	);
};
