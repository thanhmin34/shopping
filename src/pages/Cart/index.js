import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const {
    cartItems: listProducts,
    cartTotalQuantity,
    cartTotalAmount,
  } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   const totallist = listProducts.reducer(
  //     (tot, item) => tot + +item.price * +item.cartTotalQuantity
  //   );
  //   setTotal(totallist);
  // }, [listProducts]);
  return (
    <div className="h-[1000px] mt-10 w-full max-w-[1280px] mx-auto px-5">
      <h2>Shopping Cart</h2>
      {listProducts.length === 0 ? (
        <p>Continue Shopping Cart</p>
      ) : (
        <div className="w-full flex flex-col mt-10">
          {listProducts.length > 0 &&
            listProducts.map((item) => <CartItem key={item.id} item={item} />)}
        </div>
      )}
      <div className="flex mt-10 gap-2">
        <p>Total</p>
        <span>{cartTotalAmount}</span>
      </div>
    </div>
  );
};

function CartItem({ item }) {
  return (
    <div className="grid grid-cols-4 gap-5 border-[#e5e5e5] border-b p-2 my-5 ">
      <img src={item.image} className="w-20" alt="" />
      <div className="title">{item.name}</div>
      <div className="gird grid-cols-3 gap-5 mx-auto">
        <span className="px-4 py-2 cursor-pointer">-</span>
        <span className="px-4 py-2 cursor-pointer">
          {item.cartTotalQuantity}
        </span>
        <span className="px-4 py-2 cursor-pointer">+</span>
      </div>
      <span>{item.price * item.cartTotalQuantity}</span>
    </div>
  );
}
export default Cart;
