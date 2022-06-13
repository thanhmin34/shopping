import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlide";
import { useGetAllProductsQuery } from "../../redux/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="h-[1000px] mt-10 w-full max-w-[1280px] mx-auto px-5">
      {isLoading ? (
        <div className="w-20 h-20 border-2 border-b-transparent rounded-full "></div>
      ) : error ? (
        <p>error</p>
      ) : (
        <div>
          <h2>Danh sách Idol</h2>
          <div className="w-full grid grid-cols-4 gap-5">
            {data?.map((item) => (
              <ProductsItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function ProductsItem({ item }) {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="flex flex-col gap-2 p-2 border border-[#e5e5e5]">
      <div className="relative pt-[100%]">
        <img
          src={item.image}
          alt={item.name}
          className="absolute top-0 left-0 right-0 object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col text-base font-medium gap-2 p-1 ">
        <h3>{item.name}</h3>
        <span>{item.price}</span>
        <button
          onClick={() => handleAddToCart(item)}
          className="w-full max-w-[128px] mx-auto bg-blue-700 text-[#fff] rounded-md px-2 py-[6px]"
        >
          Đặt Thuê
        </button>
      </div>
    </div>
  );
}
export default Home;
