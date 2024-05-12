import React from "react";
import { Link, useParams } from "react-router-dom";
import CardData from "./CardData";
import HelpIcon from "../Icon/HelpIcon";
import HeartIcon from "../Icon/HeartIcon";
import RateIcon from "../Icon/RateIcon";

function CardDetails() {
  const { id } = useParams();

  // Find the card with the matching id
  const card = CardData[parseInt(id)];

  if (!card) {
    // Handle case where card with id doesn't exist
    return <div>Card not found</div>;
  }

  return (
    <div className="p-10">
      <Link to={"/"} className="pb-10">
        <HelpIcon />
      </Link>
      <div className="flex w-full gap-10">
        <div className="w-full lg:w-1/2 overflow-hidden items-center justify-center flex flex-col p-10 bg-[#FAF7FF] rounded-xl">
          <div className="flex justify-between w-full">
            <button className="flex gap-2">
              <RateIcon /> Highest Rated
            </button>
            <button>
              <HeartIcon />
            </button>
          </div>
          <img
            src={card.img}
            alt=""
            className="object-contain h-[480px] object-center w-[285px] p-10"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <p>Title: {card.title}</p>
          <p>Price: {card.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
