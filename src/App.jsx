import { React, useState } from "react";
import HomePage from "./HomePage";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { counterCartVAlue } from "./Context";

export default function App() {
  const [cartValue, setCartValue] = useState(0);
  const [idValue, setIdValue] = useState([]);

  function handleCartValue(id) {
    console.log("clicked");
    setIdValue((prev) => [...prev, id]);
    setCartValue((cartValue) => cartValue + 1);
  }
  return (
    <div>
      <counterCartVAlue.Provider
        value={{ cartValue, idValue, handleCartValue }}
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
