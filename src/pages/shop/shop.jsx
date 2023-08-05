import React from "react";
import { PRODUCTS } from "../../data/products";
import Product from "./product";

const Shop = () => {
  return (
    <>
      <h1>shop</h1>
      <div className="row">
        {PRODUCTS.map((productData)=><Product key={productData.id} data={productData}/>)}
      </div>
    </>
  );
};

export default Shop;
