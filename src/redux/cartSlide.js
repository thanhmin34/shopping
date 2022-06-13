import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const listItem = localStorage.getItem("Cart")
  ? JSON.parse(localStorage.getItem("Cart"))
  : [];

const initialState = {
  cartItems: listItem,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartTotalQuantity += 1;
        toast.info("inclement success", { position: "top-center" });
      } else {
        const temProduct = { ...action.payload, cartTotalQuantity: 1 };
        state.cartItems.push(temProduct);
        toast.success("add new cart success", { position: "top-center" });
      }
      localStorage.setItem("Cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlide.actions;
export default cartSlide.reducer;
