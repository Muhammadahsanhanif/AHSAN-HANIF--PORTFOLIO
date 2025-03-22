import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../assets/WhatsApp Image 2025-01-06 at 00.41.59_d3105cb5.jpg";
import resume from "../assets/AHSAN HANIF RESUME .pdf";  // Import the CV file

export default function Hero() {
  return (
    <motion.section 
      className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <div className="text-center max-w-3xl my-5">
        <motion.h1
          initial={{ scale: 1.1 }}
          animate={{ scale: [1.1, 0.95, 1.1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
          className="text-2xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight"
        >
          Hi&#44; I&apos;m AHSAN HANIF
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl lg:text-3xl mt-4 text-gray-300 font-medium"
        >
          A Passionate Web Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-gray-400 mt-6 text-lg md:text-xl leading-relaxed"
        >
          I specialize in building high-quality web applications using HTML, CSS,
          JavaScript, Tailwind CSS, Firebase, MongoDB, Next.js, React.js, and
          Bootstrap.
        </motion.p>
        
        {/* Button Container - Align both buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {/* Contact Me Button */}
          <motion.a
            href="#contact"
            className="px-8 py-3 text-lg font-medium bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Contact Me
          </motion.a>
          
          {/* Download CV Button */}
          <motion.a
            href={resume}  // Use the imported 'resume' variable here
            download
            className="px-8 py-3 text-lg font-medium bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download My CV
          </motion.a>
        </div>
      </div>
      
      {/* Profile Image */}
      <motion.div
        className="mt-10 relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-10"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={backgroundImage}
          alt="Ahsan Hanif"
          className="w-full h-full object-cover rounded-full border-4 border-blue-500"
        />
      </motion.div>
    </motion.section>
  );
}
