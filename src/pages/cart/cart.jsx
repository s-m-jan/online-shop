import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../../data/products";
import Product from "../shop/product";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <>
       <h1>Your Cart Items</h1>
      <div className="row">
        {PRODUCTS.map((p) => {
          if (
            cartItems.some((i) => 
              i.id === p.id && i.count > 0
            )
          ) {
            return <Product data={p}></Product>
          }
        })}
      </div>
    </>
  );
};

export default Cart;
