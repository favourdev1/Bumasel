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
      img: "/images/Well-builtWoman.png",
      price: "N30,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    {
      title: "TPS5 Gaming Dual Pad ",
      img: "/images/GameController.png",
      price: "N15,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    {
      title: "Ijaw Traditional wear",
      img: "/images/AfricanMan.png",
      price: "N8,500",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    {
      title: "Male underwear",
      img: "/images/Underware.png",
      price: "N5,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    {
      title: "Nike Airforce Jordan 1s",
      img: "/images/NewSneakers.png",
      price: "N30,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    {
      title: "Sony Gaming Headset",
      img: "/images/BlackHeadphone.png",
      price: "N21,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    // 5 dummy products
    {
      title: "Product 1",
      img: "/images/Product1.png",
      price: "N10,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    {
      title: "Product 2",
      img: "/images/Product2.png",
      price: "N12,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    {
      title: "Product 3",
      img: "/images/Product3.png",
      price: "N8,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
    },
    {
      title: "Product 4",
      img: "/images/Product4.png",
      price: "N15,000",
      brand: "Adidas",
      brandLogo: "/images/brandlogo.png",
      productId: "52615721827",
      productDescription: "Women padded sports bra",
      productRating: "4.5",
      storeLocation: "Abia State",
      storeName: "Doren & co",
      storeContact: "0909271726",
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
