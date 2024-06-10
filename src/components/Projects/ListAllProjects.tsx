import { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectList = ({ darkMode }: { darkMode: boolean }) => {
    const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

    const projects = [
        {
            title: "Portfolio Generator",
            images: [
                "/projects/portfolio/1.png",
                "/projects/portfolio/2.png",
                "/projects/portfolio/3.png",
                "/projects/portfolio/4.png",
            ],
            type: "Ausbiz Consulting | SAAS Application | Full stack | DevOps",
            link: "https://portfolio.lvtpeople.com.au/",
            github:[]
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
            ],
            type: "Meyd.it | SAAS Application | Full stack | DevOps",
            link: "https://meyd.it/",
            github: []
        },
        {
            title: "Sofitel Sydney Wentworth Hold for Collection APP ( SSWHFC )",
            images: [
                "/projects/meydit/1.png",
                "/projects/meydit/2.png",
                "/projects/meydit/3.png",
                "/projects/meydit/4.png",
                "/projects/meydit/5.png",
                "/projects/meydit/6.png",
                "/projects/meydit/7.png",
            ],
            type: "SSW HFC | SAAS Application | Full stack | DevOps |  vercel",
            link: "https://sswhfc.vercel.app/",
            github: ["https://github.com/DcaseMhrz/frontend", "https://github.com/DcaseMhrz/backend"]
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
            const newIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
            setCurrentImageIndex(newIndex);
            setFullScreenImage(project.images[newIndex]);
        }
    };

    return (
        <div className={`bg-white ${darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""} p-4 rounded-2xl col-span-1 lg:col-span-1 row-span-2 shadow-lg`}>
            <div className="flex justify-between items-center">


            </div>
            <div className="flex flex-col space-y-10 ">
                {projects.map((project, projectIndex) => (
                    <>
                        <div
                            
                            className="relative bg-gray-300 dark:bg-gray-700 min-h-64 p-4 shadow-lg rounded-2xl group cursor-pointer"
                            onClick={() => handleImageClick(projectIndex, 0)}
                        >
                            <img
                                src={project.images[0]}
                                className="w-full h-full object-cover rounded-lg"
                                alt={project.title}
                            />


                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <MdOutlineZoomOutMap className="w-14 h-14 text-blue-400" />
                            </div>

                        </div>
                        <div className="flex items-center justify-between" key={projectIndex}>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-gray-700">{project.title}</span>
                                <span className="font-semibold text-sm text-gray-400">{project.type}</span>
                            </div>
                           {project.github[0] && <div className="flex items-center">
                                <a href={`${project!.github![0]}`} className="text-blue-600 hover:underline"><BsBoxArrowUpRight />Github 1</a>
                            </div>}
                            {project.github[1] && <div className="flex items-center">
                                <a href={`${project!.github![1]}`} className="text-blue-600 hover:underline"><BsBoxArrowUpRight />Github 2</a>
                            </div>}
                            <div className="flex items-center">
                                <a href={`${project.link}`} className="text-blue-600 hover:underline"><BsBoxArrowUpRight />Visit Site</a>
                            </div>

                        </div>
                    </>))}
            </div>
            {fullScreenImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full"
                    >
                        <FaArrowLeft />
                    </button>
                    <img src={fullScreenImage} className="max-w-7xl max-h-7xl" alt="Full Screen Project" />
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

export default ProjectList;
