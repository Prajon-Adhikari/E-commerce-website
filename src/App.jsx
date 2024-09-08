import { React, useState } from "react";
import HomePage from "./HomePage";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { counterCartVAlue } from "./Context";
import { ProductData } from "./ProductData";

export default function App() {
  const getDeafultQuantity = () => {
    let cart = {};
    for (let i = 1; i < ProductData.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartValue, setCartValue] = useState(0);
  const [idValue, setIdValue] = useState([]);
  const [quantity, setQuantity] = useState(getDeafultQuantity());

  function handleCartValue(id) {
    console.log("clicked");
    setQuantity((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setIdValue((prev) => [...prev, id]);
    setCartValue((cartValue) => cartValue + 1);
  }

  console.log(quantity);

  return (
    <div>
      <counterCartVAlue.Provider
        value={{
          setCartValue,
          cartValue,
          idValue,
          quantity,
          setQuantity,
          handleCartValue,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </counterCartVAlue.Provider>
    </div>
  );
}
