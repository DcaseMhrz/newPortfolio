import RecentProjects from "../Homepage/RecentProjects"
import ProjectList from "./ListAllProjects"

interface props {
    darkMode: boolean
}
const Projects: React.FC<props> = ({ darkMode }) => {
    return <>
        <div className="bg-white col-span-2 row-span-3 rounded-2xl shadow-lg p-4 dark:bg-gray-800 dark:text-gray-200">
            
            <div className="  flex justify-between space-x-12 p-4">
                <h3 className="text-5xl font-semibold dark:text-gray-200 mb-4 ">
                Check Out My Latest Projects
                </h3>
                <h2 className="text-2xl  w-11/12 font-light ">  I'm here to help if you're searching for a developer bring your idea to life or a devops engineer to help take your business to the next level.</h2>
            </div>
            <ProjectList darkMode={darkMode}/>


        </div>
    </>
}

export default Projects