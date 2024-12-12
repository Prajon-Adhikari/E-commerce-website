import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { counterCartVAlue } from "./Context";
import axios from "axios";

export default function Item() {
  const data = useContext(counterCartVAlue);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <div className="products-element">
        {data.productsItem == ""
          ? data.categoryItem == ""
            ? products.map((product, index) => (
                <Product key={product._id} data={product} />
              ))
            : data.categoryItem.map((product, index) => (
                <Product key={product._id} data={product} />
              ))
          : data.productsItem.map((product, index) => (
              <Product key={product._id} data={product} />
            ))}
      </div>
    </div>
  );
}
