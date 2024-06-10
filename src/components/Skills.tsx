import React from "react";

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

const SkillLogos: React.FC = () => {
  return (
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
  );
};

export default SkillLogos;
