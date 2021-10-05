import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { FaBluetoothB, FaWifi } from "react-icons/fa";
import Slider from "./nav-dialog-components/range-slider";
import ToggleButton from "./nav-dialog-components/toggle-button";
import User from "./nav-dialog-components/user";
import { BsVolumeDown, BsVolumeUp, BsVolumeMute } from "react-icons/bs";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  refName?: any;
}

const NavDialog = ({ isOpen, refName }: Props) => {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [dark, setDark] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [volume, setVolume] = useState(70);

  const handleBrightness = (event: any) => {
    setBrightness(event.target.value);
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById(
      "root"
    ).style.filter = `brightness(${event.target.value}%)`;
  };

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
          <div className="w-96 transition-all transform bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 shadow-xl rounded-2xl p-5 space-y-5">
            <User />
            <div className="flex space-x-3">
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
                heading="Dark mode"
                subHeading={dark ? "On" : "Off"}
              />
            </div>
            <Slider
              min={30}
              Icon={<BiSun size={25} />}
              value={brightness}
              onChange={handleBrightness}
            />
            <Slider
              Icon={
                volume == 0 ? (
                  <BsVolumeMute size={25} />
                ) : volume > 50 ? (
                  <BsVolumeUp size={25} />
                ) : (
                  <BsVolumeDown size={25} />
                )
              }
              value={volume}
              onChange={(event: any) => setVolume(event.target.value)}
            />
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default NavDialog;
