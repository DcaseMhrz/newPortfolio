import React, { useState } from "react";
import { FaMoon, FaRegUser } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import { RiStackLine } from "react-icons/ri";
import { TbCards } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { MdWbSunny } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } rounded-2xl p-6 shadow-lg justify-between flex items-center max-w-7xl mx-auto sticky top-0 z-50`}
    >
      <div className="text-blue-500 font-extrabold md:text-3xl text-2xl flex items-center">
        <BsGrid1X2Fill
          color={`${darkMode ? "white" : "black"}`}
          className="mr-5"
        />
        <p className={`${darkMode ? "text-white" : "text-black"}`}> D</p>
        Maharjan
      </div>
      <nav className="hidden lg:flex lg:space-x-16 space-x-8">
        <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
          <Link
            to="/"
            className="text-gray-500 font-semibold flex space-x-2 items-center"
            onClick={handleLinkClick}
          >
            <HiOutlineHome fontSize={20} /> <p>Home</p>
          </Link>
        </div>
        <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
          <Link
            to="/about"
            className="text-gray-500 font-semibold flex space-x-2 items-center"
            onClick={handleLinkClick}
          >
            <FaRegUser fontSize={20} /> <p>About</p>
          </Link>
        </div>
        <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
          <Link
            to="/myskills"
            className="text-gray-500 font-semibold flex space-x-2 items-center"
            onClick={handleLinkClick}
          >
            <RiStackLine fontSize={20} /> <p>Skills</p>
          </Link>
        </div>
        <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
          <Link
            to="/myprojects"
            className="text-gray-500 font-semibold flex space-x-2 items-center"
            onClick={handleLinkClick}
          >
            <TbCards fontSize={20} /> <p>Projects</p>
          </Link>
        </div>
      </nav>
      <div className="hidden lg:flex space-x-4 items-center">
        <div className="p-2 hover:bg-gray-300 rounded-lg box-content cursor-pointer">
          {darkMode ? (
            <MdWbSunny
              className="w-6 h-6"
              color="orange"
              onClick={toggleDarkMode}
            />
          ) : (
            <FaMoon className="w-6 h-6" onClick={toggleDarkMode} />
          )}
        </div>
        <Link
          className="bg-black text-white shadow-lg px-4 py-2 cursor-pointer rounded-md flex items-center space-x-2 hover:bg-gray-700"
          to="/contact"
          onClick={handleLinkClick}
        >
          <span className="text-gray-300">Let's talk</span> <SiMinutemailer />
        </Link>
      </div>
      <div
        className="lg:hidden md:flex cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <IoMdMenu fontSize={40} />
      </div>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-transform transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setOpen(false)}
      >
        <nav
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } w-64 h-full shadow-md p-4 space-y-1 absolute left-0 top-0 flex flex-col justify-between`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-4">
            <div className="text-blue-500 font-extrabold md:text-4xl text-2xl flex items-center">
              <BsGrid1X2Fill
                color={`${darkMode ? "white" : "black"}`}
                className=""
              />
              <p className={`${darkMode ? "text-white" : "text-black"}`}> D</p>
              Maharjan
            </div>
            <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
              <Link
                to="/"
                className="text-gray-500 font-semibold flex space-x-6 items-center"
                onClick={handleLinkClick}
              >
                <HiOutlineHome fontSize={20} /> <p>Home</p>
              </Link>
            </div>
            <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
              <Link
                to="/about"
                className="text-gray-500 font-semibold flex space-x-6 items-center"
                onClick={handleLinkClick}
              >
                <FaRegUser fontSize={20} /> <p>About</p>
              </Link>
            </div>
            <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
              <Link
                to="/myskills"
                className="text-gray-500 font-semibold flex space-x-6 items-center"
                onClick={handleLinkClick}
              >
                <RiStackLine fontSize={20} /> <p>Skills</p>
              </Link>
            </div>
            <div className="hover:bg-slate-300 box-content p-2 rounded-lg">
              <Link
                to="/myprojects"
                className="text-gray-500 font-semibold flex space-x-6 items-center"
                onClick={handleLinkClick}
              >
                <TbCards fontSize={20} /> <p>Projects</p>
              </Link>
            </div>
          </div>
          <div className="space-y-4 mt-auto">
            <div className="p-2 hover:bg-gray-300 rounded-lg box-content cursor-pointer flex justify-center">
              {darkMode ? (
                <p
                  className="flex justify-between text-gray-500"
                  onClick={toggleDarkMode}
                >
                  <MdWbSunny className="w-6 h-6" color="orange" /> Change the
                  appearance
                </p>
              ) : (
                <p
                  className="flex justify-between text-gray-500"
                  onClick={toggleDarkMode}
                >
                  <FaMoon className="w-6 h-6" />
                  Change the appearance
                </p>
              )}
            </div>
            <Link
              to="/contact"
              className="bg-black text-white shadow-lg px-4 py-2 cursor-pointer rounded-md flex items-center space-x-2 hover:bg-gray-700 justify-center"
              onClick={handleLinkClick}
            >
              <span className="text-gray-300">Let's talk</span>{" "}
              <SiMinutemailer />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
