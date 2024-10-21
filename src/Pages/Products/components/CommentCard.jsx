/** @format */

import React from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const CommentCard = ({ comment }) => {
	const {
		user,
		text,
		createdAt,
		// likes,
		itemQualityRating,
		// customerServiceRating
	} = comment;


	// Function to render star ratings
	const renderStars = (rating) => {
		let stars = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<BsStarFill key={i} />);
			} else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
				stars.push(<BsStarHalf key={i} />);
			} else {
				stars.push(<BsStar key={i} />);
			}
		}
		return stars;
	};
	// ... (previous code snippet)

	return (
		<div className="bg-white py-3  ">
			<div className="flex items-start gap-4 mt-4">
				<div className="flex-1">
					

					<div className="flex items-center">
						{renderStars(itemQualityRating)}
					</div>
					<p className="text-gray-700 mb-2">{text}</p>
					<div className="flex items-center gap-2">
						
						{/* <button
							onClick={handleLike}
							className={`flex items-center gap-1 text-sm ${
								liked ? "text-blue-500" : "text-gray-500"
							}`}
						>
							
						</button> */}
						{/* <span className="text-gray-500 text-sm">{likes} likes</span> */}
          </div>
          <div className="flex justify-start gap-4 items-center mb-2 text-sm">
						<span className="font-light underline text-gray-900">{user}</span>
						<span className="text-gray-900 ">{createdAt}</span>
					</div>
        </div>
        
			</div>
		</div>
	);
};

export default CommentCard;
