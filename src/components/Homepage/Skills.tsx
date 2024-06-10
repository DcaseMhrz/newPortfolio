import React from "react";

const skills = [
  "aws.webp",
  "docker.png",
  "postgres.jpg",
  "react.png",
  "tailwind.svg",
  "typescript.svg",
  "restapi.jpeg",
  "jest.png",
];

interface props {
  darkMode: boolean
}

const SkillLogos: React.FC<props> = ({ darkMode }) => {
  return (
    <div
      className={`bg-white ${darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
        } p-4 rounded-2xl col-span-1 lg:col-span-1 row-span-1 min-h-72 shadow-lg`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold dark:text-gray-200">
          Skills | Tools
        </h3>
        <a href="/myskills" className="text-blue-500 hover:underline mr-6">
          All Skills →
        </a>
      </div>
      {/* Add content here */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-1">
        {skills.map((skill, index) => (
          <div><div
            key={index}
            className=" w-max  items-center p-2 bg-slate-300 dark:bg-slate-700  rounded-lg"
          >
            <img
              src={`/skills/${skill}`}
              alt={skill.replace(/(\.png|\.jpg|\.jpeg|\.svg|\.webp)/, "")}
              className="h-16 w-16 object-contain "
            />
          
            <p className="mx-auto w-max font-thin size-3 text-sm">{skill.replace(/(\.png|\.jpg|\.jpeg|\.svg|\.webp)/, "")}</p></div>
          </div>
        ))}
      </div>
    </div>)
};

export default SkillLogos;
