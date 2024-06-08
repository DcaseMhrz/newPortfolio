import React from "react";
import NavBar from "./components/Homepage";

const App: React.FC = () => {
  return (
    <div className=" min-h-screen p-4 bg-gradient-to-r from-blue-900 via-red-900 to-gray-900">
      <NavBar />
    </div>
  );
};

export default App;
