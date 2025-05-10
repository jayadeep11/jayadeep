import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const ToggleSwitchMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleMusic}
        className={`w-14 h-8 flex border items-center px-1 rounded-full transition duration-300 ${
          isPlaying ? "bg-black" : "bg-[#15161C]"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 flex items-center justify-center ${
            isPlaying ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {isPlaying ? <FaPause className="text-black text-xs" /> : <FaPlay className="text-gray-700 text-xs" />}
        </div>
      </button>

      <audio ref={audioRef} src="/song.mp3" loop />
    </div>
  );
};

export default ToggleSwitchMusic;

