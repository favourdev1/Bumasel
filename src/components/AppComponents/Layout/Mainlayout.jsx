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
      img1: "/images/Well-builtWoman.png",
      img2: "/images/Well-builtWoman.png",
      img3: "/images/Well-builtWoman.png",
      img4: "/images/Well-builtWoman.png",
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
      img1: "/images/GameController.png",
      img2: "/images/GameController.png",
      img3: "/images/GameController.png",
      img4: "/images/GameController.png",

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
      img1: "/images/AfricanMan.png",
      img2: "/images/AfricanMan.png",
      img3: "/images/AfricanMan.png",
      img4: "/images/AfricanMan.png",
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
      img1: "/images/Underware.png",
      img2: "/images/Underware.png",
      img3: "/images/Underware.png",
      img4: "/images/Underware.png",
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
      img1: "/images/NewSneakers.png",
      img2: "/images/NewSneakers.png",
      img3: "/images/NewSneakers.png",
      img4: "/images/NewSneakers.png",
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
      img1: "/images/BlackHeadphone.png",
      img2: "/images/BlackHeadphone.png",
      img3: "/images/BlackHeadphone.png",
      img4: "/images/BlackHeadphone.png",
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
      img1: "/images/Product1.png",
      img2: "/images/Product1.png",
      img3: "/images/Product1.png",
      img4: "/images/Product1.png",
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
      img1: "/images/Product2.png",
      img2: "/images/Product2.png",
      img3: "/images/Product2.png",
      img4: "/images/Product2.png",
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
      img1: "/images/Product3.png",
      img2: "/images/Product3.png",
      img3: "/images/Product3.png",
      img4: "/images/Product3.png",
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
      img1: "/images/Product4.png",
      img2: "/images/Product4.png",
      img3: "/images/Product4.png",
      img4: "/images/Product4.png",
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

  const profile = [
    {}
  ]

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <GlobalContext.Provider value={{ text, hello, searchQuery,products,profile, setSearchQuery }}>
    
      <div>
        <Nav /> 
        <Outlet />
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
};

export default Mainlayout;
