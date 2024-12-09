import { React, useState } from "react";
import HomePage from "./Component/HomePage";
import About from "./Component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { counterCartVAlue } from "./Component/Context";
import { ProductData } from "./Component/ProductData";
import LoginPage from "./Component/LoginPage";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Component/Payment";
import Blog from "./Component/Blog";

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
  const [cartPanel, setCartPanel] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  function handleCartValue(id) {
    if (disableBtn[id]) {
      button.enabled = false;
    }

    toast.success("Added Successfully to the cart", {
      autoClose: 1000,
    });

    console.log("clicked");
    setQuantity((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setIdValue((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
    setCartValue((cartValue) => cartValue + 1);

    setIsBtnClicked((prev) => ({
      ...prev,
      [id]: true,
    }));

    setDisableBtn((prev) => ({ ...prev, [id]: true }));

    setCartPanel(true);
    document.body.style.overflow = "hidden";
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
          cartPanel,
          setCartPanel,
          totalValue,
          setTotalValue,
          showPaymentModal,
          setShowPaymentModal,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route
                path="/payment"
                element={
                  <Payment
                    onClose={() => setShowPaymentModal(false)}
                    totalAmount={totalValue}
                  />
                }
              />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/signin" element={<SignIn />} />
            <Route path="/user/signup" element={<SignUp />} />
            <Route path="/blogs" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </counterCartVAlue.Provider>
      <ToastContainer position="top-center" />
    </div>
  );
}
