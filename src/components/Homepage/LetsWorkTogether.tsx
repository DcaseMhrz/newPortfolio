import { GoDownload } from "react-icons/go"
import { SiMinutemailer } from "react-icons/si"

interface props{
    darkMode:Boolean
}

const LetsWorkTogether: React.FC<props> = ({darkMode}) => {
    return (<>

        <div
            className={`bg-white ${darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
                } p-4 rounded-2xl col-span-1 lg:col-span-1 row-span-1 shadow-lg`}
        >


            <div className="bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 p-4 rounded-lg my-2">
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee whitespace-nowrap">
                        <span className="text-xl mx-4">Transforming Ideas into Reality 💻 Full Stack Expertise 🌟</span>
                        <span className="text-xl mx-4"> DevOps and Cloud Specialist ☁️</span>
                        <span className="text-xl mx-4">Available For Hire 🚀</span>
                        <span className="text-xl mx-4">Building Scalable Solutions 🌐</span>
                        <span className="text-xl mx-4">Your Tech Partner 🔧</span>
                    </div>
                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                        <span className="text-xl mx-4">Transforming Ideas into Reality 💻 Full Stack Expertise 🌟</span>
                        <span className="text-xl mx-4"> DevOps and Cloud Specialist ☁️</span>
                        <span className="text-xl mx-4">Available For Hire 🚀</span>
                        <span className="text-xl mx-4">Building Scalable Solutions 🌐</span>
                        <span className="text-xl mx-4">Your Tech Partner 🔧</span>
                    </div>
                </div>
            </div>
            <h3 className="text-4xl font-extrabold dark:text-gray-200">
                Let's Work 👋 Together
            </h3>
            <button className="underline mt-6 text-blue-700 dark:text-blue-400 flex items-center"> <SiMinutemailer /> Let's Talk</button>
        </div></>)
}
export default LetsWorkTogether