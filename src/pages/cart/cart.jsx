import React, { useContext } from "react";
import { CartContext } from "../../utils/product-context";
import { ProductList } from "../../utils/productList";
import { CartItem } from "../../components/cartItem"
import { useNavigate } from "react-router-dom";

import "../../styles/cart.css";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const getTotalCartAmount = () => {
    console.log("caritems",cartItems)
    let sum = 0
    for(let i = 1; i<= ProductList.length; i++){
        console.log("ProductList[i-1].id", ProductList[i-1].id, cartItems[ProductList[i-1].id])
        if(cartItems[ProductList[i-1].id] != 0) {
            console.log("INside sum:", typeof parseInt(ProductList[i-1].price.replace(',','')) , typeof (cartItems[ProductList[i-1].id]))
            sum += parseInt(ProductList[i-1].price.replace(',','')) * (cartItems[ProductList[i-1].id])
        }
    }
    return sum
  }

  const totalAmount = getTotalCartAmount();
  console.log("totalamount:", totalAmount)

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {ProductList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: Rs. {totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
            //   checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};