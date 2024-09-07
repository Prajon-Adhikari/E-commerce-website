import React from "react";
import { ProductData } from "./ProductData";
import Product from "./Product";

export default function Item() {
  
  return (
    <div className="products">
      <div className="products-element">
        {ProductData.map((products, index) => (
          <Product
            key={products.id}
            data={products}
          />
        ))}
      </div>
    </div>
  );
}
