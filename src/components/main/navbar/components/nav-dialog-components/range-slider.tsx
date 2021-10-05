import React, { ChangeEvent } from "react";
import "./range-slider.css";

interface Props {
  Icon?: React.ReactNode;
  min?: number;
  onChange: (value: ChangeEvent) => void;
  value: number;
}

const RangeSlider = ({ Icon, min, onChange, value }: Props) => {
  return (
    // create a slider component
    <div className="rangeSlider rounded-lg flex items-center space-x-5">
      <div className="dark:text-gray-200">{Icon}</div>
      <input
        min={min || 0}
        type="range"
        onChange={onChange}
        value={value}
        className="appearance-none w-full bg-white dark:bg-gray-900 cursor-pointer"
      />
    </div>
  );
};

export default RangeSlider;
