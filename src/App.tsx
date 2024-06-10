import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import MainContent from "./components/MainContent";
import { useTheme } from "./hooks/useDarkMode";

const App: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Router>
      <div
        className={`${
          darkMode ? "dark" : ""
        } min-h-screen p-4 bg-gradient-to-r from-blue-900 via-red-900 to-gray-900`}
      >
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;
