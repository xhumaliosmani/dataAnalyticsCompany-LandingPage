import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold cursor-pointer text-[#00df9a]">
        REACT.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer font-semibold">Home</li>
        <li className="p-4 cursor-pointer font-semibold">Company</li>
        <li className="p-4 cursor-pointer font-semibold">Resources</li>
        <li className="p-4 cursor-pointer font-semibold">About</li>
        <li className="p-4 cursor-pointer font-semibold">Contact</li>
      </ul>
      <button onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-500/20 bg-[#000300] ease-in duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full  text-3xl font-bold text-[#00df9a] cursor-pointer">
          REACT.
        </h1>
        <ul className="pt-24 uppercase p-4 h-screen">
          <li className="p-4 font-semibold cursor-pointer border-b border-b-gray-500/20">
            Home
          </li>
          <li className="p-4 font-semibold cursor-pointer border-b border-b-gray-500/20">
            Company
          </li>
          <li className="p-4 font-semibold cursor-pointer border-b border-b-gray-500/20">
            Resources
          </li>
          <li className="p-4 font-semibold cursor-pointer border-b border-b-gray-500/20">
            About
          </li>
          <li className="p-4 font-semibold cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
