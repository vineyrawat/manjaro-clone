import React, { ReactNode } from "react";

interface Props {
  heading: string;
  subHeading: string;
  Icon: ReactNode;
  onClick?: () => void;
  isActive: boolean;
}

const ToggleButton = ({
  Icon,
  heading,
  subHeading,
  isActive,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col w-full items-center ${
        isActive
          ? "text-white bg-blue-500"
          : "text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-900"
      } justify-center h-24 rounded-md transition-all cursor-pointer hover:shadow-lg`}
    >
      {Icon}
      <h1 className="text-sm mt-2">{heading}</h1>
      <h1 className="text-xs">{subHeading}</h1>
    </div>
  );
};

export default ToggleButton;
