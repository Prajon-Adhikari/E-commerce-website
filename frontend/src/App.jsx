import { React, useState, useEffect } from "react";
import HomePage from "./Component/HomePage";
import About from "./Component/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { counterCartVAlue } from "./Component/Context";
import LoginPage from "./Component/LoginPage";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Component/Payment";
import Blog from "./Component/Blog";
import axios from "axios";

export default function App() {
  const [productData, setProductData] = useState([]); // Store product data from backend
  const [cartValue, setCartValue] = useState(0);
  const [idValue, setIdValue] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [searchVal, setSearchVal] = useState("");
  const [productsItem, setProductsItem] = useState([]);
  const [categoryItem, setCategoryItem] = useState([]);
  const [isBtnClicked, setIsBtnClicked] = useState({});
  const [disableBtn, setDisableBtn] = useState({});
  const [cartPanel, setCartPanel] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/") // Replace with your backend endpoint
      .then((response) => {
        setProductData(response.data);
        const initialQuantity = {};
        response.data.forEach((product) => {
          initialQuantity[product._id] = 0;
        });
        setQuantity(initialQuantity);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  useEffect(() => {
    console.log("clicked button updated:", isBtnClicked); // Log after state is updated
  }, [isBtnClicked]);

  function handleCartValue(id) {
    // Check if quantity object contains the id
    if (!(id in quantity)) {
      return;
    }

    // Proceed only if the quantity is defined and greater than 0
    if (quantity[id] === undefined) {
      return;
    }

    // Toast success message
    toast.success("Added Successfully to the cart", { autoClose: 1000 });

    // Update quantity state
    setQuantity((prev) => ({
      ...prev,
      [id]: prev[id] + 1, // Increment quantity
    }));

    // Update idValue to keep track of added products
    setIdValue((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id]; // Add id if not already in array
      }
      return prev;
    });

    setCartValue((cartValue) => cartValue + 1);

    setIsBtnClicked((prev) => {
      return { ...prev, [id]: true }; // Disable the button immediately
    });

    setDisableBtn((prev) => {
      return { ...prev, [id]: true }; // Disable the button immediately
    });

    setCartPanel(true);
    document.body.style.overflow = "hidden";
  }

  function handleSearchItem(searchVal) {
    const filteredItem = productData.filter(
      (product) => product.productName.toLowerCase() === searchVal.toLowerCase()
    );
    setProductsItem(filteredItem);
  }

  function handleCategoryItem(categorySelected) {
    const filteredCategory = productData.filter(
      (product) => product.productCategory === categorySelected
    );
    setCategoryItem(filteredCategory);
  }

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
