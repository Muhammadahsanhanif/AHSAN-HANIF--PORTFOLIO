import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaJsSquare,
  FaDatabase,
  FaFire,
  FaPaintBrush,
  FaEnvelopeOpen,
  FaServer,
  FaNodeJs,
  FaPinterest,
  FaUsers,
  FaUserTie,
  FaBrain,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", logo: <FaHtml5 className="text-orange-500 text-4xl" />, percentage: 65 },
  { name: "CSS", logo: <FaCss3Alt className="text-blue-400 text-4xl" />, percentage: 70 },
  { name: "JavaScript", logo: <FaJsSquare className="text-yellow-500 text-4xl" />, percentage: 75 },
  { name: "React.js", logo: <FaReact className="text-blue-500 text-4xl" />, percentage: 90 },
  { name: "Next.js", logo: <SiNextdotjs className="text-black text-4xl" />, percentage: 75 },
  { name: "Tailwind CSS", logo: <SiTailwindcss className="text-teal-400 text-4xl" />, percentage: 85 },
  { name: "Bootstrap", logo: <FaBootstrap className="text-purple-500 text-4xl" />, percentage: 80 },
  { name: "MongoDB", logo: <FaDatabase className="text-green-500 text-4xl" />, percentage: 75 },
  { name: "Firebase", logo: <FaFire className="text-yellow-500 text-4xl" />, percentage: 70 },
  { name: "GitHub", logo: <FaGithub className="text-gray-800 text-4xl" />, percentage: 90 },
  { name: "Postman", logo: <FaEnvelopeOpen className="text-orange-500 text-4xl" />, percentage: 75 },
  { name: "Express.js", logo: <FaServer className="text-gray-600 text-4xl" />, percentage: 70 },
  { name: "Node.js", logo: <FaNodeJs className="text-green-700 text-4xl" />, percentage: 75 },
  { name: "Pinterest", logo: <FaPinterest className="text-red-500 text-4xl" />, percentage: 50 },
  { name: "Teamwork", logo: <FaUsers className="text-indigo-500 text-4xl" />, percentage: 90 },
  { name: "Leadership", logo: <FaUserTie className="text-teal-700 text-4xl" />, percentage: 85 },
  { name: "Quick Learner", logo: <FaBrain className="text-yellow-500 text-4xl" />, percentage: 95 },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-3xl font-bold text-blue-500 mb-6"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeInOut" }}
            >
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                {skill.logo}
              </motion.div>
              <p className="text-gray-700 font-medium">{skill.name}</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="bg-blue-500 h-2.5"
                  style={{ width: `${skill.percentage}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;