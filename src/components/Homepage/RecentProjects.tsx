import { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecentProjects = ({ darkMode }: { darkMode: boolean }) => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const projects = [
    {
      title: "Portfolio Generator",
      images: [
        "/projects/portfolio/1.png",
        "/projects/portfolio/2.png",
        "/projects/portfolio/3.png",
        "/projects/portfolio/4.png",
        // add more images here
      ],
    },
    {
      title: "Meydit Web Application",
      images: [
        "/projects/meydit/1.png",
        "/projects/meydit/2.png",
        "/projects/meydit/3.png",
        "/projects/meydit/4.png",
        "/projects/meydit/5.png",
        "/projects/meydit/6.png",
        "/projects/meydit/7.png",
        // add more images here
      ],
    },
  ];

  const handleImageClick = (projectIndex: number, imageIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageIndex);
    setFullScreenImage(projects[projectIndex].images[imageIndex]);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
    setCurrentProjectIndex(null);
    setCurrentImageIndex(null);
  };

  const handleNext = () => {
    if (currentProjectIndex !== null && currentImageIndex !== null) {
      const project = projects[currentProjectIndex];
      const newIndex = (currentImageIndex + 1) % project.images.length;
      setCurrentImageIndex(newIndex);
      setFullScreenImage(project.images[newIndex]);
    }
  };

  const handlePrevious = () => {
    if (currentProjectIndex !== null && currentImageIndex !== null) {
      const project = projects[currentProjectIndex];
      const newIndex =
        (currentImageIndex - 1 + project.images.length) % project.images.length;
      setCurrentImageIndex(newIndex);
      setFullScreenImage(project.images[newIndex]);
    }
  };

  return (
    <div
      className={`bg-white ${
        darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
      } p-4 rounded-2xl col-span-1 lg:col-span-1 row-span-2 shadow-lg`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold dark:text-gray-200">
          Recent Projects
        </h3>
        <Link to="/myprojects" className="text-blue-500 hover:underline mr-6">
          All Projects →
        </Link>
      </div>
      <div className="flex flex-col space-y-5 mt-4">
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="relative bg-gray-300 dark:bg-gray-700 min-h-64 p-4 shadow-lg rounded-2xl group cursor-pointer"
            onClick={() => handleImageClick(projectIndex, 0)}
          >
            <img
              src={project.images[0]}
              className="w-full h-full object-cover rounded-lg"
              alt={project.title}
            />
            <div className="absolute bottom-4 font-thin left-4 bg-white text-gray-700 px-2 py-1 rounded-lg shadow-2xl border-2 border-gray-500 dark:text-gray-400 dark:bg-gray-600">
              {project.title}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <MdOutlineZoomOutMap className="w-8 h-8 text-blue-400" />
            </div>
          </div>
        ))}
      </div>
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <img
            src={fullScreenImage}
            className="max-w-7xl max-h-7xl"
            alt="Full Screen Project"
          />
          <button
            onClick={handleNext}
            className="absolute right-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
          >
            <FaArrowRight />
          </button>
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
