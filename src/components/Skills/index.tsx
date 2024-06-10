import React from "react";
import { AiFillDatabase, AiTwotoneApi } from "react-icons/ai";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaConnectdevelop, FaLaptopCode } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { GiRobotGrab } from "react-icons/gi";
import { GrTest } from "react-icons/gr";
import { IoIosCloudUpload } from "react-icons/io";
import { MdSensors } from "react-icons/md";
import { SiServerless } from "react-icons/si";

const skills = [
    "aws.webp",
    "docker.png",
    "typescript.svg",
    "javascript.png",
    "java.png",
    "python.png",
    "jest.png",
    "nodejs.jpg",
    "expressjs.png",
    "adonisjs.png",
    "react.png",
    "nextjs.png",
    "postgres.jpg",
    "mysql.jpg",
    "mongodb.png",
    "tailwind.svg",
    "restapi.jpeg",
    
    
    "html.png",
    "css.png",
    "django.jpg",
    
    
    "github.png",
    
    // Add other skill logo filenames here if any are missing
];
interface props {
    darkMode: boolean
}

const Skills: React.FC<props> = () => {
    return (
        <div className=" p-4 col-span-2 bg-white row-span-4 rounded-2xl dark:bg-gray-800 dark:text-gray-200">

            <div className="  flex justify-between space-x-12 p-4">
                <h3 className="text-5xl font-semibold dark:text-gray-200 mb-4 ">
                    Skills | Tools
                </h3>
                <h2 className="text-2xl  w-7/12 font-light ">Mastering a diverse range of technologies to bring your ideas to life.</h2>

            </div>
            <div className="flex flex-col w-maxr p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center  bg-slate-300 dark:bg-slate-700   rounded-lg p-2"
                        >
                            <img
                                src={`/skills/${skill}`}
                                alt={skill.replace(/(\.png|\.jpg|\.jpeg|\.svg|\.webp)/, "")}
                                className="h-16 w-16 object-contain "
                            />
                            <p className="mx-auto w-max font-thin size-4 text-sm">{skill.replace(/(\.png|\.jpg|\.jpeg|\.svg|\.webp)/, "")}</p>
                        </div>
                    ))}</div>

                <div className="my-10">
                    <div className="flex justify-between space-x-12">
                        
                        <h2 className="text-2xl  w-1/2 font-light ">Providing specialized development and DevOps services to elevate your digital projects.</h2>
                        <h3 className="text-5xl font-semibold dark:text-gray-200 mb-4 ">
                            My Expert Area
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

                        <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
                            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><AiFillDatabase className="w-20 h-20 text-blue-600" /></div>

                            <p className="mx-auto w-max font-semibold font-mono">Database</p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
                            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><SiServerless className="w-20 h-20 text-blue-600" /></div>

                            <p className="mx-auto w-max font-semibold font-mono">Serverless</p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
                            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><AiTwotoneApi className="w-20 h-20 text-blue-600" /></div>

                            <p className="mx-auto w-max font-semibold font-mono">RestAPIs</p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
                            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><GrTest className="w-20 h-20 text-blue-600" /></div>

                            <p className="mx-auto w-max font-semibold font-mono">Testing</p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
                            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><BsGrid1X2Fill className="w-20 h-20 text-blue-600" /></div>

                            <p className="mx-auto w-max font-semibold font-mono">UI/UX design</p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
                            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><GiRobotGrab className="w-20 h-20 text-blue-600" /></div>

                            <p className="mx-auto w-max font-semibold font-mono">Automation</p>
                        </div>
                        <div className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl m-2">
                            <div className="rounded-lg bg-gray-200 p-4 dark:bg-gray-700"><MdSensors className="w-20 h-20 text-blue-600" /></div>

                            <p className="mx-auto w-max font-semibold font-mono">IOT</p>
                        </div>

                    </div>
                </div>
                

            </div>
        </div>


    );
};

export default Skills;
