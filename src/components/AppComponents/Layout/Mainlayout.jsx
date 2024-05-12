import {React,useState} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import GlobalContext from "./GlobalContext";

const Mainlayout = () => {
  const text = "sfnslfskndf"
  const hello = "hello"
  
  const products = [
    {
      title: "Female Sports Wear",
      img: "./Images/Well-builtWoman.png",
      price: "N30,000",
    },
    {
      title: "TPS5 Gaming Dual Pad ",
      img: "./Images/GameController.png",
      price: "N15,000",
    },
    {
      title: "Ijaw Traditional wear",
      img: "./Images/AfricanMan.png",
      price: "N8,500",
    },
    {
      title: "Male underwear",
      img: "./Images/Underware.png",
      price: "N5,000",
    },
    {
      title: "Nike Airforce Jordan 1s",
      img: "./Images/NewSneakers.png",
      price: "N30,000",
    },
    {
      title: "Sony Gaming Headset",
      img: "./Images/BlackHeadphone.png",
      price: "N21,000",
    },
    // 5 dummy products 
    {
      title: "Product 1",
      img: "./Images/Product1.png",
      price: "N10,000",
    },
    {
      title: "Product 2",
      img: "./Images/Product2.png",
      price: "N12,000",
    },
    {
      title: "Product 3",
      img: "./Images/Product3.png",
      price: "N8,000",
    },
    {
      title: "Product 4",
      img: "./Images/Product4.png",
      price: "N15,000",
    },
 

  ];

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <GlobalContext.Provider value={{ text, hello, searchQuery,products, setSearchQuery }}>
    
      <div>
        <Nav /> 
        <Outlet />
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
};

export default Mainlayout;
