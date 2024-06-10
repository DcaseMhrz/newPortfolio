import React from "react";
import {
  FaConnectdevelop,
  FaLaptopCode,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import SkillLogos from "./Skills";
import { IoIosCloudUpload } from "react-icons/io";
import LetsWorkTogether from "./LetsWorkTogether";
import RecentProjects from "./RecentProjects";

interface HomepageProps {
  darkMode: boolean;
}

const Homepage: React.FC<HomepageProps> = ({ darkMode }) => {

  return (
    <>
      {/** Work Experience */}
      <div
        className={`bg-white ${darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
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
      <RecentProjects darkMode={darkMode}/>


      {/* skills */}

      <SkillLogos darkMode={darkMode} />

      {/* Services */}
      <div
        className={`bg-white ${darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
          } p-4 rounded-2xl col-span-1 lg:col-span-2 row-span-1 min-h-56 shadow-lg`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold dark:text-gray-200">
            My Expert Area
          </h3>
          <a href="/skills" className="hover:underline text text-blue-500 mr-6">
            {" "}
            More services →
          </a>
        </div>
        <div className="flex flex-wrap space-x-10 justify-center">
          <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><FaLaptopCode className="w-20 h-20 text-blue-600" /></div>

            <p className="mx-auto w-max font-semibold font-mono"> Full Stack</p>
          </div>
          <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><FaGears className="w-20 h-20 text-blue-600" /></div>

            <p className="mx-auto w-max font-semibold font-mono"> DevOps</p>
          </div>
          <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><FaConnectdevelop className="w-20 h-20 text-blue-600" /></div>

            <p className="mx-auto w-max font-semibold font-mono"> Microservices</p>
          </div>
          <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><IoIosCloudUpload className="w-20 h-20 text-blue-600" /></div>

            <p className="mx-auto w-max font-semibold font-mono">Cloud Services</p>
          </div>

        </div>


      </div>

      {/* Lets Work Together */}
      <LetsWorkTogether darkMode={darkMode} />
    </>
  );
};

export default Homepage;
