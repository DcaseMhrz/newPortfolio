import React, { useState } from "react";
import { FaMoon, FaRegUser } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiStackLine } from "react-icons/ri";
import { TbCards } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { MdWbSunny } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg p-6 shadow-md justify-between flex items-center max-w-7xl mx-auto`}>
      <div className="text-blue-500 font-extrabold md:text-3xl text-2xl flex items-center">
        <BsGrid1X2Fill color={`${darkMode ? "white" : "black"}`} className="mr-5" />
        <p className={`${darkMode ? 'text-white' : 'text-black'}`}> D</p>Maharjan
      </div>
      <nav className="hidden lg:flex lg:space-x-16 space-x-8">
        <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
          <a href="#" className="text-gray-500 font-semibold flex space-x-2 items-center">
            <HiOutlineHome fontSize={20} /> <p>Home</p>
          </a>
        </div>
        <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
          <a href="#" className="text-gray-500 font-semibold flex space-x-2 items-center">
            <FaRegUser fontSize={20} /> <p>About</p>
          </a>
        </div>
        <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
          <a href="#" className="text-gray-500 font-semibold flex space-x-2 items-center">
            <RiStackLine fontSize={20} /> <p>Skills</p>
          </a>
        </div>
        <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
          <a href="#" className="text-gray-500 font-semibold flex space-x-2 items-center">
            <TbCards fontSize={20} /> <p>Experience</p>
          </a>
        </div>
      </nav>
      <div className="hidden lg:flex space-x-4 items-center">
        <div className="p-2 hover:bg-gray-300 rounded-lg box-content cursor-pointer">
          {darkMode ? (
            <MdWbSunny
              className="w-6 h-6"
              color="orange"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            />
          ) : (
            <FaMoon
              className="w-6 h-6"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            />
          )}
        </div>
        <div
          className="bg-black text-white shadow-lg px-4 py-2 cursor-pointer rounded-md flex items-center space-x-2 hover:bg-gray-700"
          onClick={() => {
            alert("lets talk clicked");
          }}
        >
          <span className="text-gray-300">Let's talk</span>
        </div>
      </div>
      <div className="lg:hidden md:flex cursor-pointer" onClick={() => {
        setOpen(true);
      }}>
        <IoMdMenu fontSize={40} />
      </div>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-transform transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={() => setOpen(false)}
      >
        <nav
          className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} w-64 h-full shadow-md p-4 space-y-1 absolute left-0 top-0 flex flex-col justify-between`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-4">
            <div className="text-blue-500 font-extrabold md:text-4xl text-2xl flex items-center">
              <BsGrid1X2Fill color={`${darkMode ? "white" : "black"}`} className="" />
              <p className={`${darkMode ? 'text-white' : 'text-black'}`}> D</p>Maharjan
            </div>
            <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
              <a href="#" className="text-gray-500 font-semibold flex space-x-6 items-center">
                <HiOutlineHome fontSize={20} /> <p>Home</p>
              </a>
            </div>
            <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
              <a href="#" className="text-gray-500 font-semibold flex space-x-6 items-center">
                <FaRegUser fontSize={20} /> <p>About</p>
              </a>
            </div>
            <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
              <a href="#" className="text-gray-500 font-semibold flex space-x-6 items-center">
                <RiStackLine fontSize={20} /> <p>Skills</p>
              </a>
            </div>
            <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
              <a href="#" className="text-gray-500 font-semibold flex space-x-6 items-center">
                <TbCards fontSize={20} /> <p>Experience</p>
              </a>
            </div>
          </div>
          <div className="space-y-4 mt-auto">
            <div className="p-2 hover:bg-gray-300 rounded-lg box-content cursor-pointer flex justify-center">
              {darkMode ? (
                <p className="flex justify-between text-gray-500" onClick={() => {
                  setDarkMode(!darkMode);
                }}><MdWbSunny
                    className="w-6 h-6"
                    color="orange"

                  /> Change the appearance</p>
              ) : (
                <p className="flex justify-between text-gray-500" onClick={() => {
                  setDarkMode(!darkMode);
                }}><FaMoon
                    className="w-6 h-6"

                  />Change the appearance</p>
              )}
            </div>
            <div
              className="bg-black text-white shadow-lg px-4 py-2 cursor-pointer rounded-md flex items-center space-x-2 hover:bg-gray-700 justify-center"
              onClick={() => {
                alert("lets talk clicked");
              }}
            >
              <span className="text-gray-300">Let's talk</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
