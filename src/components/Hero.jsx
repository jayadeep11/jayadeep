import Navbar from "./Navbar";
import x from "/social-icons/x.png";
import GH from "/social-icons/GH.png";
import LI from "/social-icons/LI.png";
import Music from "./Music.jsx";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen justify-around bg-black">
      <Navbar />

      <div className="md:px-16">
        <div className="flex-grow flex flex-col justify-center gap-16 md:gap-24 px-10 lg:px-60">
          <div className="font-primary  text-white text-3xl sm:text-5xl md:text-6xl flex flex-col gap-3">
            <p>turning ideas into</p>
            <p>real life <span className="bg-gradient-to-r from-sky-200 via-white to-pink-300 bg-clip-text text-transparent">Products</span></p>
            <p>is my calling.</p>
          </div>

          <div>
            <button
              type="button"
              className="text-left text-lg sm:text-xl text-neutral-200 font-secondary"
            >
              About me
            </button>
            <div className="w-16 sm:w-20 h-[1px] bg-neutral-400"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-between items-center px-10">
        <Music />

        <ul className="flex gap-5 text-sm font-ter  text-white">
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
