import { React, useState } from "react";
import HomePage from "./HomePage";
import Cart from "./Cart";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { counterCartVAlue } from "./Context";
import { ProductData } from "./ProductData";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

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
  const [searchVal, setSearchVal] = useState("");
  const [productsItem, setProductsItem] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);
  const [isBtnClicked, setIsBtnClicked] = useState({});
  const [disableBtn, setDisableBtn] = useState({});

  function handleCartValue(id) {
    if (disableBtn[id]) {
      button.enabled = false;
    }

    console.log("clicked");
    setQuantity((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setIdValue((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
    setCartValue((cartValue) => cartValue + 1);
    console.log([id]);

    setIsBtnClicked((prev) => ({
      ...prev,
      [id]: true,
    }));

    setDisableBtn((prev) => ({ ...prev, [id]: true }));
  }

  function handleSearchItem(searchVal) {
    const filterdItem = ProductData.filter(
      (product) => product.productName === searchVal
    );
    setProductsItem(filterdItem);
    console.log(productsItem);
  }

  function handleCategoryItem(categorySelected) {
    const filterdCategory = ProductData.filter(
      (product) => product.category === categorySelected
    );
    setCategoryItem(filterdCategory);
    console.log(categoryItem);
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
          handleSearchItem,
          productsItem,
          setQuantity,
          handleCartValue,
          setProductsItem,
          searchVal,
          setSearchVal,
          handleCategoryItem,
          categoryItem,
          isBtnClicked,
          setIsBtnClicked,
          setDisableBtn,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </counterCartVAlue.Provider>
    </div>
  );
}
