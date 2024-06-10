import React, { useState } from "react";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const MainContent: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset the button text after 2 seconds
    });
  };

  return (
    <main className={`grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto container max-w-7xl py-6`}>
      <div
        className={`bg-white ${darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""} p-4 rounded-2xl shadow-lg col-span-1 lg:col-span-1 row-span-2 ${isHomepage ? "" : "sticky top-28"}`}
      >
        <img
          src="/images.jpeg"
          alt="Profile"
          className="w-full h-auto rounded-2xl"
        />
        <h3 className="text-2xl font-bold dark:text-light p-4">
          Dikesh Maharjan 👋
        </h3>
        <p className="text-muted dark:text-light/70 px-4">
          A Passionate{" "}
          <span className="font-semibold text-dark dark:text-white">
            Full Stack Developer{" "}
          </span>{" "}
          🖥️ &amp;{" "}
          <span className="font-semibold text-dark dark:text-white">
            DevOps Engineer{" "}
          </span>{" "}
          having{" "}
          <span className="font-semibold text-dark dark:text-white">
            {" "}
            3+ years{" "}
          </span>
          of Experience.
        </p>
        <div className="flex justify-around my-4">
          <a href="tel:0451784201" className="bg-blue-500 px-10 py-6 rounded-lg shadow-lg text-white inline-flex items-center hover:bg-blue-300 dark:hover:bg-blue-700">
            <LuPhoneCall fontSize={20} className="mx-2" />
            Call me
          </a>
          <button
            onClick={() => { copyToClipboard('dcasemhrz@gmail.com') }}
            className="border-2 border-gray-400 px-6 py-4 rounded-lg shadow-lg inline-flex items-center hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <IoCopyOutline fontSize={20} className="mx-2" />
            {isCopied ? 'Copied ✔' : 'Copy email'}
          </button>
        </div>
        <div className="mx-4 flex space-x-4 p-4">
          <a href="https://github.com/DcaseMhrz" target="_blank" rel="noopener noreferrer" className="rounded-lg items-center p-2 hover:bg-gray-400 border-2 border-gray-400">
            <FiGithub fontSize={20} />
          </a>
          <a href="https://x.com/DcaseMhrz" target="_blank" rel="noopener noreferrer" className="rounded-lg items-center p-2 hover:bg-gray-400 border-2 border-gray-400">
            <FaXTwitter fontSize={20} />
          </a>
          <a href="https://www.linkedin.com/in/dikeshmaharjan/" target="_blank" rel="noopener noreferrer" className="rounded-lg items-center p-2 hover:bg-gray-400 border-2 border-gray-400">
            <CiLinkedin fontSize={20} />
          </a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage darkMode={darkMode} />} />
        <Route path="/about" element={<About darkMode={darkMode} />} />
        <Route path="/skills" element={<Skills darkMode={darkMode} />} />
        <Route path="/projects" element={<Projects darkMode={darkMode} />} />
      </Routes>
    </main>
  );
};

export default MainContent;
