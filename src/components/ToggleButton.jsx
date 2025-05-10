import { useState } from "react";
import { motion } from "framer-motion";

export default function MediumXToggle({ onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
    if (onToggle) onToggle(!isOpen);
  };

  const lineBase = "h-[3px] bg-white rounded origin-center absolute";
  const spring = {
    type: "spring",
    stiffness: 400,
    damping: 22
  };

  return (
    <button
      onClick={toggle}
      className="relative w-10 h-10 flex items-center justify-center rounded-md"
    >
      <motion.div
        className={lineBase}
        style={{ width: isOpen ? "22px" : "26px" }}
        animate={isOpen
          ? { rotate: 45, y: 0 }
          : { rotate: 0, y: -8 }}
        transition={spring}
      />

      <motion.div
        className={lineBase}
        style={{ width: isOpen ? "0px" : "16px" }}
        animate={isOpen
          ? { opacity: 0 }
          : { opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className={lineBase}
        style={{ width: isOpen ? "22px" : "30px" }}
        animate={isOpen
          ? { rotate: -45, y: 0 }
          : { rotate: 0, y: 8 }}
        transition={spring}
      />
    </button>
  );
}

