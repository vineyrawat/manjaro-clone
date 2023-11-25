import React, { useRef } from "react";
import RightMenu from "./components/right-menu";
import NavDialog from "./components/nav-dialog";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(!show);
  const ref = useRef();
  // TODO: Handle outside component click

  return (
    <>
      <div className="flex px-2 h-6 w-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-40 backdrop-blur-sm items-center justify-between">
        <div className="flex items-center text-sm cursor-pointer">
          Applications
        </div>
        <RightMenu onClick={handleShow} />
        <NavDialog refName={ref} isOpen={show} />
      </div>
    </>
  );
};

export default Navbar;
