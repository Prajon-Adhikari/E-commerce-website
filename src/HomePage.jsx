import { React, useState } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Product from "./Product";
import airpod1 from "./assets/NirvanIon.webp";
import airpod2 from "./assets/Airdopes161.webp";
import watch1 from "./assets/LunarCallPro.webp";
import watch2 from "./assets/FlashPlus.webp";
import laptop1 from "./assets/Laptop.webp";
import laptop from "./assets/Laptop2.jpg";
import speaker1 from "./assets/SoundPro.webp";
import speaker2 from "./assets/JBLPartyBox.webp";

export default function HomePage() {
  const [cartValue, setCartValue] = useState(0);

  function handleCartValue() {
    setCartValue((cartValue) => cartValue + 1);
  }
  return (
    <div>
      <Navbar cartValue={cartValue} />
      <Home />
      <div className="products">
        <div className="products-element">
          <Product
            image={airpod1}
            productName="Nirvan Ion"
            price="2000"
            onAddToCart={handleCartValue}
          />
          <Product
            image={airpod2}
            productName="Airdopes 161"
            price="2500"
            onAddToCart={handleCartValue}
          />
          <Product
            image={watch1}
            productName="Lunar Call Pro"
            price="8000"
            onAddToCart={handleCartValue}
          />
          <Product
            image={watch2}
            productName="Flash Plus"
            price="10000"
            onAddToCart={handleCartValue}
          />
          <Product
            image={laptop}
            productName="Flat Laptop"
            price="100000"
            onAddToCart={handleCartValue}
          />
          <Product
            image={laptop1}
            productName="Laptop"
            price="110000"
            onAddToCart={handleCartValue}
          />
          <Product
            image={speaker1}
            productName="Sound Pro"
            price="10000"
            onAddToCart={handleCartValue}
          />
          <Product
            image={speaker2}
            productName="JBL Party Box"
            price="12000"
            onAddToCart={handleCartValue}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
