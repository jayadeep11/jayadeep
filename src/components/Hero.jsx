import Navbar from "./Navbar";
import x from "/social-icons/x.png";
import GH from "/social-icons/GH.png";
import LI from "/social-icons/LI.png";

import Music from "./Music.jsx";
const Hero = () => {
  return (
    <div className="flex flex-col justify-evenly  px-10 sm:px-8 md:px-16">
      <Navbar />

      <div className="min-h-[400px] mt-32 w-full flex flex-col gap-16 md:gap-24 sm:px-8 md:px-20 lg:px-32">
        <div className="font-poppins font-bold text-white flex flex-col gap-3 sm:gap-3 text-2xl sm:text-5xl md:text-7xl">
          <p className="">turning ideas into </p>
          <p className="">real life products </p>
          <p className="">is my calling.</p>
        </div>

        <div>
          <button
            type="button"
            className="text-left text-lg sm:text-xl md:text-2xl"
          >
            About me
          </button>
          <div className="w-16 sm:w-20 h-[1px] bg-neutral-400 mt-1"></div>
        </div>
      </div>

      <div className=" mt-32 flex justify-between">
        <div>
          <Music />
        </div>

        <div className="navlinks font-boldonse text-sm">
          <ul className="flex gap-5 text-sm ">
            <li className="flex items-center gap-1">
              <img src={x} className="w-5 h-5" alt="home" />
              <a href="#">TW</a>
            </li>
            <li className="flex items-center gap-1">
              <img src={GH} className="w-5 h-5" alt="home" />
              <a href="#">GH</a>
            </li>
            <li className="flex items-center gap-1">
              <img src={LI} className="w-5 h-5" alt="home" />
              <a href="#">IN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
