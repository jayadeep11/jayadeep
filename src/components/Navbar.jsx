import React from "react";
import { useState } from "react";
import logo from "/logo.png";
import "./ToggleButton.jsx";
import ToggleButton from "./ToggleButton.jsx";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prev => !prev);
  };
  return (
    <div className="px-10 sm:px-32">
      <nav className="bg-[#15161C] border-2 border-[#1b1c26] rounded-2xl p-5  sm:max-w-2xl  flex justify-between items-center  mx-auto">
        <div className="text-[#d1d1d1] text-2xl leading-none ">
          <img src={logo} alt="logo" className="w-16 sm:w-20 " />
        </div>

        <ToggleButton onToggle={clicked} />
      </nav>
    </div>
  );
};

export default Navbar;
