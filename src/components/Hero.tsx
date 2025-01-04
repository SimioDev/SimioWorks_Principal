import React from "react";
import { motion } from "framer-motion";
import { SITE_TITLE } from '../consts';

const Hero: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-4 pb-20 pt-48"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white font-bold text-5xl md:text-7xl text-balance text-center max-w-[30ch] mx-auto md:leading-[1.16]"
      >
        Gestiona tus tareas de manera eficaz con <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">{SITE_TITLE}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-white/80 text-center text-2xl mt-5"
      >
        Haz que las tareas diarias sean más sencillas y eficaces con nosotros.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
