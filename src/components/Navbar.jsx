import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-black bg-opacity-80 py-3 px-5 flex justify-between items-center border-b border-purple-500">
      <div className="text-purple-400 font-bold text-xl tracking-wider"></div>
      <Link
        className="text-white hover:text-purple-400 transition-colors font-semibold text-sm md:text-base"
        to={"/contact"}
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
