import { motion } from "framer-motion";

const imageHoverVariants = {
  hover: {
    scale: 1.08,
    rotate: 3,
    y: -5,
    opacity: 0.75,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.25)",
    transition: { type: "spring", stiffness: 250, damping: 10 },
  },
  tap: { scale: 0.95, rotate: -2 },
  initial: { scale: 1, rotate: 0, y: 0, opacity: 1 },
};

const Aboutme = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black p-6">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-12 max-w-9xl">
        <div className="text-white max-w-md ">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 font-primary">I'm Jayadeep</h1>
          <p className="text-lg leading-relaxed">
            I’m a graduate trainee at Lti mindtree.
          </p>
        </div>

        <motion.img
          src="/cover.png"
          alt="Jayadeep"
          className="rounded-3xl max-w-xs sm:max-w-md md:max-w-lg cursor-pointer"
          variants={imageHoverVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        />
      </div>
    </div>
  );
};

export default Aboutme;

