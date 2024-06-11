import ProjectList from "./ListAllProjects";

interface props {
  darkMode: boolean;
}
const Projects: React.FC<props> = ({ darkMode }) => {
  return (
    <>
      <div className="bg-white col-span-1 lg:col-span-2 row-span-3 rounded-2xl shadow-lg p-4 dark:bg-gray-800 dark:text-gray-200">
        <div className="  flex justify-between space-x-12 p-4">
          <h3 className="text-4xl font-semibold dark:text-gray-200 mb-4 ">
            Check Out My{" "}
            <span className="text-blue-500 font-bold">Latest Projects</span>
          </h3>
          <h2 className="text-xl  w-11/12 font-light ">
            {" "}
            I'm here to help if you're searching for a{" "}
            <span className="text-blue-500 font-bold">developer</span> bring
            your idea to life or a{" "}
            <span className="text-blue-500 font-bold">devops engineer</span> to
            help take your <u>business to the next level.</u>
          </h2>
        </div>
        <ProjectList darkMode={darkMode} />
      </div>
    </>
  );
};

export default Projects;
