import React from "react";
import BackgroundImage from "../../assets/wallpapers/macoswhitesur.jpg";
import Dock from "./dock";
import Navbar from "./navbar";

const Desktop = () => {
  return (
    <div
      className="w-full flex flex-col min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('${BackgroundImage}')` }}
    >
      <Navbar />
      <div className="flex-1"></div>
      <Dock />
    </div>
  );
};

export default Desktop;
