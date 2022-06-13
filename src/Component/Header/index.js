import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full  bg-slate-700 text-[#fff] h-[60px] ">
      <div className="w-full max-w-[1280px] mx-auto  flex items-center justify-start gap-5 leading-[60px]">
        <Link className="px-4 " to="/">
          Trang chu
        </Link>
        <Link className="px-4 " to="/gio-hang">
          Gio hang
        </Link>
      </div>
    </div>
  );
};

export default Header;
