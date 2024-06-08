import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";

const MyDiv: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className=" min-h-screen min-w-full container mx-auto p-4 bg-gradient-to-r from-blue-300 to-gray-600">
      <div className="bg-white rounded-lg p-6 shadow-md justify-between flex items-center">
        <div className=" text-blue-500 font-extrabold md:text-4xl text-2xl">
          DMaharjan
        </div>
        <nav className="hidden md:flex lg:space-x-16 space-x-8">
          <a href="#" className="text-black hover:text-gray-500 font-semibold">
            Home
          </a>
          <a href="#" className="text-black hover:text-gray-500 font-semibold">
            About
          </a>
          <a href="#" className="text-black hover:text-gray-500 font-semibold">
            Tools
          </a>
          <a href="#" className="text-black hover:text-gray-500 font-semibold">
            Contact
          </a>
        </nav>
        <div className="flex space-x-2 items-center">
          <FaMoon
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              setDarkMode(true);
            }}
          />
          <div
            className="bg-black text-white shadow-lg px-4 py-2 cursor-pointer rounded-md flex items-center space-x-2"
            onClick={() => {
              alert("hello");
            }}
          >
            <span>Let's talk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDiv;
