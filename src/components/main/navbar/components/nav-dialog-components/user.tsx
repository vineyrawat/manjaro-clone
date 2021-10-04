import React from "react";
import {
  AiOutlinePoweroff,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

const User = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-400 w-10 h-10 text-white rounded-full text-xl">
            <AiOutlineUser />
          </div>
          <h2 className="ml-2">Manjaro</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-xl text-gray-800 dark:text-gray-100 transition-colors rounded-md hover:bg-white dark:hover:bg-gray-900">
            <AiOutlineSetting />
          </button>
          <button className="p-2 text-xl text-gray-800 dark:text-gray-100 transition-colors rounded-md hover:bg-white dark:hover:bg-gray-900">
            <AiOutlinePoweroff />
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
