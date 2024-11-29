// import React, { useContext, useEffect, useState } from "react";
// import { counterCartVAlue } from "./Context";
// import { ProductData } from "./ProductData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// export default function Cart() {
//   const [totalValue, setTotalValue] = useState(0);
//   const {
//     setCartValue,
//     setIsBtnClicked,
//     setDisableBtn,
//     idValue,
//     cartValue,
//     quantity,
//     setQuantity,
//   } = useContext(counterCartVAlue);

//   useEffect(() => {
//     let initialTotal = 0;
//     idValue.forEach((idVal) => {
//       const product = ProductData.find((p) => p.id === idVal);
//       if (product) {
//         initialTotal += product.price * quantity[product.id];
//       }
//     });
//     setTotalValue(initialTotal);
//   }, [idValue, quantity]);

//   function incrementQuantity(id, amount) {
//     setQuantity((prev) => ({ ...prev, [id]: prev[id] + 1 }));
//     setTotalValue((totalValue) => parseInt(totalValue) + parseInt(amount));
//     setCartValue((cartValue) => cartValue + 1);
//   }

//   function decrementQuantity(id, amount) {
//     if (quantity[id] === 1) {
//       console.log("zero");
//       setIsBtnClicked((prev) => {
//         const { [id]: _, ...rest } = prev; // Destructure to exclude the clicked id
//         return rest;
//       });

//       setDisableBtn((prev) => ({ ...prev, [id]: false }));
//     }
//     setQuantity((prev) => ({ ...prev, [id]: prev[id] - 1 }));
//     setTotalValue((totalValue) => parseInt(totalValue) + parseInt(amount));
//     setCartValue((cartValue) => cartValue - 1);
//   }

//   return (
//     <div className="cart-page">
//       <h2>Cart Items</h2>
//       <p>Total Items: {cartValue}</p>
//       {idValue.length > 0 ? (
//         <div className="cartlist-container">
//           {idValue.map((idVal, index) =>
//             ProductData.map((products, index) =>
//               products.id == idVal ? (
//                 quantity[products.id] > 0 ? (
//                   <div className="cart-box-container" key={index}>
//                     <div className="cart-image-container">
//                       <img src={products.image} alt="" className="cart-image" />
//                     </div>
//                     <div className="cart-details">
//                       <p>{products.productName}</p>
//                       <p>Rs : {products.price}</p>
//                       <div className="quantity-handler">
//                         <button
//                           className="plus-button"
//                           onClick={() => {
//                             incrementQuantity(products.id, products.price);
//                           }}
//                         >
//                           <FontAwesomeIcon
//                             icon={faPlus}
//                             className="plus-icon"
//                           />
//                         </button>
//                         <p>{quantity[products.id]}</p>
//                         <button
//                           className="minus-button"
//                           onClick={() => {
//                             decrementQuantity(products.id, products.price);
//                           }}
//                         >
//                           <FontAwesomeIcon
//                             icon={faMinus}
//                             className="minus-icon"
//                           />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   ""
//                 )
//               ) : (
//                 ""
//               )
//             )
//           )}
//           <p className="total">Total = Rs : {totalValue} </p>
//         </div>
//       ) : (
//         <h2>Cart is empty</h2>
//       )}
//     </div>
//   );
// }
