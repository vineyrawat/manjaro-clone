import React from "react";
import Draggable from "react-draggable";
import { AiOutlineClose } from "react-icons/ai";

function DraggableWindow() {
  return (
    <Draggable bounds="parent" axis="both">
      <div className="bg-red-300 w-96 rounded-lg">
        <div className="h-6 bg-white rounded-t-lg px-2 flex items-center justify-between">
          <h1 className="text-sm">Manjaro</h1>
          <button className="text-sm text-gray-800 dark:text-gray-100 transition-colors rounded-md hover:bg-white dark:hover:bg-gray-900">
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </Draggable>
  );
}

export default DraggableWindow;
