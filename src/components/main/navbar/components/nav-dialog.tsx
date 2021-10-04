import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { FaBluetoothB, FaWifi } from "react-icons/fa";
import ToggleButton from "./nav-dialog-components/toggle-button";
import User from "./nav-dialog-components/user";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  refName?: any;
}

const NavDialog = ({ isOpen, refName }: Props) => {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [dark, setDark] = useState(false);

  const handleWifi = () => setWifi(!wifi);
  const handleBluetooth = () => setBluetooth(!bluetooth);
  const handleTheme = () => {
    const root = document.getElementById("root");
    root?.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <div ref={refName} className="absolute right-2 top-8">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="w-96 transition-all transform bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 shadow-xl rounded-2xl p-5">
            <User />
            <div className="flex space-x-3 mt-5">
              <ToggleButton
                isActive={wifi}
                onClick={handleWifi}
                Icon={<FaWifi size={25} />}
                heading="Wi-Fi"
                subHeading="Manjaro"
              />
              <ToggleButton
                isActive={bluetooth}
                onClick={handleBluetooth}
                Icon={<FaBluetoothB size={25} />}
                heading="Bluetooth"
                subHeading="Not connected"
              />
              <ToggleButton
                isActive={dark}
                onClick={handleTheme}
                Icon={dark ? <BiMoon size={25} /> : <BiSun size={25} />}
                heading="Theme"
                subHeading={dark ? "Dark" : "Light"}
              />
            </div>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default NavDialog;
