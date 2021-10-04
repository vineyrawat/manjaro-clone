import React from "react";
import { FaBatteryHalf, FaVolumeUp, FaWifi } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const RightMenu = ({ onClick }: Props) => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex items-center text-sm">
      <button
        onClick={onClick}
        className="px-2 flex items-center space-x-3 hover:bg-white dark:hover:bg-black transition-colors rounded-md h-6"
      >
        <FaVolumeUp />
        <FaBatteryHalf />
        <span>49%</span>
        <FaWifi />
        <span className="text-xs">{currentTime}</span>
      </button>
    </div>
  );
};

export default RightMenu;
