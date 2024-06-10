import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from "./components/MainContent";





const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <Router>
      <div
        className={`${darkMode ? "dark" : ""
          } min-h-screen p-4 bg-gradient-to-r from-blue-900 via-red-900 to-gray-900`}
      >
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;
