import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  FaBatteryHalf,
  FaBluetoothB,
  FaMoon,
  FaVolumeUp,
  FaWifi,
} from "react-icons/fa";
import {
  AiOutlinePoweroff,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const currentTime = new Date().toLocaleTimeString();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);

  return (
    <>
      <div className="flex px-2 h-6 w-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-40 backdrop-blur-sm items-center justify-between">
        <div className="flex items-center text-sm cursor-pointer">
          Applications
        </div>
        <div className="flex items-center text-sm">
          <button
            onClick={handleShow}
            className="px-2 flex items-center space-x-3 hover:bg-white dark:hover:bg-black transition-colors rounded-md h-6"
          >
            <FaVolumeUp />
            <FaBatteryHalf />
            <span>49%</span>
            <FaWifi />
            <span className="text-xs">{currentTime}</span>
          </button>
        </div>
      </div>
      <Transition appear show={show} as={Fragment}>
        <div className="absolute right-2 top-8">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-96 transition-all transform bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md shadow-xl rounded-2xl p-5">
              <div className="flex justify-between items-center ">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-gradient-to-tr from-blue-500 to-blue-400 w-10 h-10 text-white rounded-full text-xl">
                    <AiOutlineUser />
                  </div>
                  <h2 className="ml-2">Manjaro</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-xl text-gray-800 dark:text-gray-100 transition-colors rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    <AiOutlineSetting />
                  </button>
                  <button className="p-2 text-xl text-gray-800 dark:text-gray-100 transition-colors rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    <AiOutlinePoweroff />
                  </button>
                </div>
              </div>
              <div className="flex space-x-3 mt-5">
                <div className="flex flex-col w-full items-center text-gray-700 dark:text-gray-200 justify-center h-24 bg-gray-100 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-60 rounded-md transition-all cursor-pointer hover:bg-opacity-100 hover:shadow-lg">
                  <FaWifi size={25} />
                  <h1 className="text-sm mt-2">Wi-Fi</h1>
                  <h1 className="text-xs">Manjaro</h1>
                </div>
                <div className="flex flex-col w-full text-white dark:text-black items-center justify-center h-24 bg-blue-400 rounded-md transition-all cursor-pointer hover:bg-opacity-100 hover:shadow-lg">
                  <FaBluetoothB size={25} />
                  <h1 className="text-sm mt-2">Bluetooth</h1>
                  <h1 className="text-xs">BOLT52</h1>
                </div>
                <div className="flex flex-col w-full items-center text-gray-700 dark:text-gray-200 justify-center h-24 bg-gray-100 dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-60 rounded-md transition-all cursor-pointer hover:bg-opacity-100 hover:shadow-lg">
                  <FaMoon size={25} />
                  <h1 className="text-sm mt-2">Wi-Fi</h1>
                  <h1 className="text-xs">Manjaro</h1>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
