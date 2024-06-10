import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen p-4 bg-gradient-to-r from-blue-900 via-red-900 to-gray-900`}
    >
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Homepage darkMode={darkMode} />
    </div>
  );
};

export default App;
