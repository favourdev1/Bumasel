import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Underware from "../Icon/Underware.png";
import AfricanMan from "../Icon/AfricanMan.png";
import BlackHeadphone from "../Icon/BlackHeadphone.png";
import GameController from "../Icon/GameController.png";
import WellBuiltWoman from "../Icon/Well-builtWoman.png";

export default function Cardgroupfirst() {
  const list = [
    {
      title: "Orange",
      img: WellBuiltWoman,
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: Underware,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: AfricanMan,
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: GameController,
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: BlackHeadphone,
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: Underware,
      price: "$8.00",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0 bg-[#FAF7FF] items-center flex justify-center">
            <Image
              alt={item.title}
              className="  h-[250px] py-7"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
