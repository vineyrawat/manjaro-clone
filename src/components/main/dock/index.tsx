import React from "react";
import ManjaroLogo from "../../../assets/logos/manjaro.png";

const Dock = () => {
  return (
    <div className="bg-white dark:bg-black bg-opacity-60 dark:opacity-60 h-12 flex space-x-2 items-center">
      <img
        src={ManjaroLogo}
        alt="Manjaro"
        className="h-full p-2 transition-colors cursor-pointer brightness-50 dark:brightness-100"
      />
    </div>
  );
};

export default Dock;
