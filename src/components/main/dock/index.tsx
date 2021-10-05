import React from "react";
import { FaUbuntu } from "react-icons/fa";

const Dock = () => {
  return (
    <div className="bg-white dark:bg-black bg-opacity-80 dark:opacity-60 h-12 flex space-x-2 items-center">
      <FaUbuntu size={30} className="ml-3 cursor-pointer" />
    </div>
  );
};

export default Dock;
