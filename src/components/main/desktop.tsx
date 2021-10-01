import React from "react";
import BackgroundImage from "../../assets/wallpapers/macoswhitesur.jpg";
import Navbar from "./navbar";

const Desktop = () => {
  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('${BackgroundImage}')` }}
    >
      <Navbar />
    </div>
  );
};

export default Desktop;
