import React from "react";
import { motion } from "framer-motion";
import { SITE_TITLE } from '../consts';

const Hero: React.FC = () => {
  return (
    <motion.section
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
        Gestiona tus tareas de manera eficaz con <span className="bg-gradient-to-r from-blue-300 to-green-300 inline-block text-transparent bg-clip-text">{SITE_TITLE}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-white/80 text-center text-2xl mt-5"
      >
        Haz que las tareas diarias sean más sencillas y eficaces con nosotros.
      </motion.p>
      <a href="">
        <div className="flex items-center justify-center w-full mt-10">
          <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
            <div className="inline-flex items-center justify-center w-full px-4 py-2 md:text-lg rounded-full cursor-pointer bg-gray-800 text-white/80 backdrop-blur-3xl whitespace-nowrap"> Empieza Ahora! </div>
          </span>
        </div>
      </a>
      <img src="/figma_basics.png" alt="Main image of the section" className="mt-10 mx-auto w-[80rem] border border-transparent rounded-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 p-1" />
    </motion.section>
  );
};

export default Hero;
