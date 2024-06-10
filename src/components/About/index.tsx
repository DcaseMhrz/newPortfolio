import Skills from "../Skills";

interface props {
    darkMode: boolean;
}
const About: React.FC<props> = ({ darkMode }) => {

    return (<>
        <div
            className={`bg-white ${darkMode ? "dark:bg-gray-800 dark:text-gray-200" : ""
                } p-4 rounded-2xl col-span-1 lg:col-span-2 row-span-10 shadow-lg`}
        >

            <div className="flex">
                <p className="text-4xl font-bold dark:text-light px-2 ">Hi, This is{" "}</p>
                <p className="text-4xl font-bold dark:text-light text-blue-600">{" "}Dikesh Maharjan 👋</p>
            </div>
            <div className="flex flex-shrink justify-around p-4 space-x-12">
                <p className=" text-muted dark:text-light/70 px-4 text-2xl">
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
                    <div className="grid grid-cols-3 my-4">
                        <div className="font-bold text-4xl">10+ <p className="font-bold text-2xl text-gray-500">Years of Experience</p></div>
                        <div className="font-bold text-4xl">27+ <p className="font-bold text-2xl text-gray-500">Projects</p></div>
                        <div className="font-bold text-4xl">3+ <p className="font-bold text-2xl text-gray-500">Clients</p></div>

                    </div>
                </p>
                <div className="bg-gray-300 text-blue-700 rounded-lg text-nowrap p-6 dark:text-blue-200 flex items-center dark:bg-gray-700 h-12">
                    <div className="pulsating-light bg-green-500 rounded-full w-2 h-2 mr-2"></div>
                    Available for Hire
                </div>
            </div>

            <Skills darkMode={darkMode} />

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

        </div >
    </>)

}
export default About