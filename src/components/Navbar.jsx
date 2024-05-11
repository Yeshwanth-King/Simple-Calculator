import React from "react";
import test from "./test";

const Navbar = () => {
  return (
    <div className="container flex justify-between bg-red-300 p-6 text-white mx-auto">
      <div className="title">
        <a href="/" className="font-bold text-3xl cursor-pointer">
          Error Coder
        </a>
      </div>
      <div>
        <ul className="flex gap-16 text-xl mr-10">
          <li className="cursor-pointer hover:font-bold transition-all duration-300 hover:underline">
            Home
          </li>
          <li className="cursor-pointer hover:font-bold transition-all duration-300 hover:underline">
            About
          </li>
          <li className="cursor-pointer hover:font-bold transition-all duration-300 hover:underline">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
