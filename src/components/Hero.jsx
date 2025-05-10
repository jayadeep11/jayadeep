import Navbar from "./Navbar";
import x from "/social-icons/x.png";
import GH from "/social-icons/GH.png";
import LI from "/social-icons/LI.png";
import Music from "./Music.jsx";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen p-10 sm:px-16 bg-black">
      <Navbar />

      <div className="flex-grow flex flex-col justify-center gap-16 md:gap-24 sm:px-8 md:px-20 lg:px-32">
        <div className="font-poppins font-bold text-white text-3xl sm:text-5xl md:text-7xl flex flex-col gap-3">
          <p>turning ideas into</p>
          <p>real life products</p>
          <p>is my calling.</p>
        </div>

        <div>
          <button type="button" className="text-left text-lg sm:text-xl md:text-2xl text-white">
            About me
          </button>
          <div className="w-16 sm:w-20 h-[1px] bg-neutral-400 mt-1"></div>
        </div>
      </div>

      <div className="mt-16 flex justify-between items-end">
        <Music />

        <ul className="flex gap-5 text-sm font-semibold text-white">
          <li className="flex items-center gap-1">
            <img src={x} className="w-5 h-5" alt="Twitter" />
            <a href="#">TW</a>
          </li>
          <li className="flex items-center gap-1">
            <img src={GH} className="w-5 h-5" alt="GitHub" />
            <a href="https://github.com/jayadeep11">GH</a>
          </li>
          <li className="flex items-center gap-1">
            <img src={LI} className="w-5 h-5" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/jayadeep11/">IN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;

