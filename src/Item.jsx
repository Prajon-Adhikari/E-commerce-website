import React, { useContext } from "react";
import { ProductData } from "./ProductData";
import Product from "./Product";
import { counterCartVAlue } from "./Context";

export default function Item() {
  const data = useContext(counterCartVAlue);

  return (
    <div className="products">
      <div className="products-element">
        {data.productsItem == ""
          ? ProductData.map((products, index) => (
              <Product key={products.id} data={products} />
            ))
          : data.productsItem.map((products, index) => (
              <Product key={products.id} data={products} />
            ))}
      </div>
    </div>
  );
}
