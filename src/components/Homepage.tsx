import React from "react";
import { CiLinkedin } from "react-icons/ci";
import {
  FaCode,
  FaConnectdevelop,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
} from "react-icons/fa";
import { FaGears, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import SkillLogos from "./Skills";
import { IoIosCloudUpload } from "react-icons/io";
import { AiFillDatabase, AiTwotoneApi } from "react-icons/ai";
import { SiServerless } from "react-icons/si";
import { GrTest } from "react-icons/gr";
import { BsGrid1X2Fill } from "react-icons/bs";
import { GiRobotGrab } from "react-icons/gi";
import { MdSensors } from "react-icons/md";

interface HomepageProps {
  darkMode: boolean;
}

const Homepage: React.FC<HomepageProps> = ({ darkMode }) => {
  const skills = [
    // "adonisjs.png",
    "aws.webp",
    // "css.png",
    // "django.jpg",
    "docker.png",
    // "expressjs.png",
    // "github.png",
    // "java.png",
    // "javascript.png",
    // "jest.png",
    // "mongodb.png",
    // "mysql.jpg",
    // "nextjs.png",
    // "nodejs.jpg",
    // "html.png",
    "postgres.jpg",
    // "python.png",
    "react.png",
    // "restapi.jpeg",
    "tailwind.svg",
    "typescript.svg",
    // Add other skill logo filenames here if any are missing
  ];
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto container py-6">
      {/* Profile Intro */}
      <div
        className={`bg-white ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
        } p-4 rounded-2xl shadow-lg col-span-1 lg:col-span-1 row-span-2`}
      >
        <img
          src="/images.jpeg"
          alt="Profile"
          className="w-full h-auto rounded-2xl"
        />
        <h3 className="text-2xl font-semibold dark:text-light p-4">
          Dikesh Maharjan 👋
        </h3>
        <p className=" text-muted dark:text-light/70 px-4">
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
          <button className="bg-blue-500 px-6 py-4 rounded-lg shadow-lg text-white  inline-flex items-center hover:bg-blue-300">
            <LuPhoneCall fontSize={20} className="mx-2" />
            Call me
          </button>
          <button className="border-2 border-gray-400 px-6 py-4 rounded-lg shadow-lg inline-flex items-center hover:bg-gray-300">
            <IoCopyOutline fontSize={20} className="mx-2" />
            Copy email
          </button>
        </div>

        <div className="mx-4 flex space-x-4 p-4">
          <button className="rounded-lg  items-center p-2 hover:bg-gray-400 border-2 border-gray-400">
            <FiGithub fontSize={20} />
          </button>
          <button className="rounded-lg  items-center p-2 hover:bg-gray-400 border-2 border-gray-400">
            <FaXTwitter fontSize={20} />
          </button>
          <button className="rounded-lg  items-center p-2 hover:bg-gray-400 border-2 border-gray-400">
            <CiLinkedin fontSize={20} />
          </button>
        </div>
      </div>

      {/* Work Experience */}
      <div
        className={`bg-white ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
        } p-4 rounded-2xl shadow-lg col-span-1 lg:col-span-1 row-span-1 min-h-72 group`}
      >
        <h3 className="text-2xl font-semibold dark:text-gray-200">
          Work Experience
        </h3>
        <div className="relative overflow-hidden max-h-[200px] z-0">
          <div className="space-y-4 mt-4 animate-scrollY">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center space-x-12">
                  <div className="text-sm font-medium text-muted dark:text-gray-400">
                    2020 - 2021
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/hydrizon.png"
                      alt="Hydrizon"
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <h6 className="text-base font-semibold text-dark dark:text-light">
                        Hydrizon
                      </h6>
                      <p className="text-sm text-muted">Backend Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-12">
                  <div className="text-sm font-medium text-muted dark:text-gray-400">
                    2021 - 2022
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/kingfisher.png"
                      alt="KingFisher"
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <h6 className="text-base font-semibold text-dark dark:text-light">
                        KingFisher Global
                      </h6>
                      <p className="text-sm text-muted">Web Developer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-12">
                  <div className="text-sm font-medium text-muted dark:text-gray-400">
                    2022 - 2023
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/meydit.jpeg"
                      alt="Meydit"
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <h6 className="text-base font-semibold text-dark dark:text-light">
                        Meyd.it
                      </h6>
                      <p className="text-sm text-muted">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-12">
                  <div className="text-sm font-medium text-muted dark:text-gray-400">
                    2023 - 2024
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src="/ausbiz.jpeg"
                      alt="Ausbiz"
                      className="h-10 w-10 rounded-lg"
                    />
                    <div>
                      <h6 className="text-base font-semibold text-dark dark:text-light">
                        Ausbiz Consulting
                      </h6>
                      <p className="text-sm text-muted">Software Engineer</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div
        className={`bg-white ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
        } p-4 rounded-2xl col-span-1 lg:col-span-1 row-span-2 shadow-lg`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold dark:text-gray-200">
            Recent Projects
          </h3>
          <a href="#" className="text-blue-500 hover:underline mr-6">
            All Projects →
          </a>
        </div>
        <div className="flex flex-col space-y-5 mt-4">
          <div className="relative bg-gray-300 dark:bg-gray-700 min-h-64 p-4 shadow-lg rounded-2xl">
            <img
              src="/projects/portfolio/home.png"
              className="w-full h-full object-cover rounded-lg"
              alt="Project"
            />
            <div className="absolute bottom-4 font-thin left-4 bg-white text-gray-700 px-2 py-1 rounded-lg shadow-2xl border-2 border-gray-500 dark:text-gray-400 dark:bg-gray-600">
              Portfolio Generator
            </div>
          </div>
          <div className="relative bg-gray-300 dark:bg-gray-700 min-h-64 p-4 shadow-lg rounded-2xl">
            <img
              src="/projects/meydit/home.png"
              className="w-full h-full object-cover rounded-lg"
              alt="Project"
            />
            <div className="absolute bottom-4 font-thin left-4 bg-white  text-gray-700 px-2 py-1 rounded-lg shadow-2xl border-2 border-gray-500 dark:text-gray-400 dark:bg-gray-600">
              Meydit Web Application
            </div>
          </div>
        </div>
      </div>

      {/* Expertise */}
      <div
        className={`bg-white ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
        } p-4 rounded-2xl col-span-1 lg:col-span-1 row-span-1 min-h-72 shadow-lg`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold dark:text-gray-200">
            My Expert Area
          </h3>
          <a href="#" className="text-blue-500 hover:underline mr-6">
            All Skills →
          </a>
        </div>
        {/* Add content here */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 p-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-2 border-gray-600 rounded-lg"
            >
              <img
                src={`/skills/${skill}`}
                alt={skill.replace(/(\.png|\.jpg|\.jpeg|\.svg|\.webp)/, "")}
                className="h-16 w-16 object-contain "
              />
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div
        className={`bg-white ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
        } p-4 rounded-2xl col-span-1 lg:col-span-2 row-span-1 min-h-56 shadow-lg`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold dark:text-gray-200">
            Services I Offered
          </h3>
          <a href="#" className="hover:underline text text-blue-500 mr-6">
            {" "}
            More services →
          </a>
        </div>

        {/* Add content here */}
        <div className="flex flex-row space-x-10 justify-around">
          <div className="p-4 border-2 border-gray-300 rounded-2xl m-2">
            <FaLaptopCode className="w-32 h-32" />
            <p className="mx-auto w-max"> Full Stack</p>
          </div>
          <div className="p-4 border-2 border-gray-300 rounded-2xl m-2">
            <FaGears className="w-32 h-32" />
            <p className="mx-auto w-max"> DevOps</p>
          </div>
          <div className="p-4 border-2 border-gray-300 rounded-2xl m-2">
            <FaConnectdevelop className="w-32 h-32" />
            <p className="mx-auto w-max">Microservices</p>
          </div>
          <div className="p-4 border-2 border-gray-300 rounded-2xl m-2">
            <IoIosCloudUpload className="w-32 h-32" />
            <p className="mx-auto w-max"> Cloud</p>
          </div>
        </div>

        <FaConnectdevelop />
        <IoIosCloudUpload />
        <AiFillDatabase />
        <SiServerless />
        <AiTwotoneApi />
        <GrTest />
        <BsGrid1X2Fill />
        <GiRobotGrab />
        <MdSensors />
      </div>

      {/* Contact */}
      <div
        className={`bg-white ${
          darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
        } p-4 rounded-2xl col-span-1 lg:col-span-1 row-span-1 shadow-lg`}
      >
        <h3 className="text-2xl font-semibold dark:text-gray-200">
          Let's Work Together
        </h3>
        {/* Add content here */}
      </div>
    </main>
  );
};

export default Homepage;
