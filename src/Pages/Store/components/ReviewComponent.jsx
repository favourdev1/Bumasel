/** @format */

import React from "react";
import CommentCard from "../../Products/components/CommentCard";

const ReviewComponent = () => {
	const sampleComments = [
		{
			user: "JohnDoe",
			text: "This is an amazing design! The level of detail and the quality of the work are exceptional. I'm excited to use it in my project.",
			createdAt: "Aug 5, 2024",
			likes: 12,
			itemQualityRating: 5
		},
		{
			user: "JaneSmith",
			text: "I appreciate the clear instructions and the variety of file formats included. The design is perfect for my interior space.",
			createdAt: "Aug 4, 2024",
			likes: 8,
			itemQualityRating: 4
		},
		{
			user: "CraftyBuilder",
			text: "Excellent work! The digital files were easy to download and compatible with my CNC machine. Looking forward to more designs.",
			createdAt: "Aug 3, 2024",
			likes: 15,
			itemQualityRating: 5
		},
		{
			user: "DesignFanatic",
			text: "The parametric wavy design is unique and versatile. It was straightforward to assemble and cut with my laser machine.",
			createdAt: "Aug 2, 2024",
			likes: 5,
			itemQualityRating: 4
		},
		{
			user: "Woodworker123",
			text: "Great value for the price. The design files were well-organized, and the quality of the design is top-notch. Highly recommend!",
			createdAt: "Aug 1, 2024",
			likes: 20,
			itemQualityRating: 5
		}
	];

	return (
		<div>
			<h1 className="font-bold text-gray-950 text-xl"> Saved Product {sampleComments.length}</h1>
			<p className="text-gray-400 pb-10">Your Saved Items </p>

			<div className="divide-y divide-gray-200 mt-5">
				
				{sampleComments.map((comment, index) => (
					<CommentCard key={index} comment={comment} />
				))}
			</div>
		</div>
	);
};

export default ReviewComponent;
