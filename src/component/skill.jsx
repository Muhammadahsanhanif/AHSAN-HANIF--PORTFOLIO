// src/components/Skills/Skills.jsx
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiFirebase, SiTailwindcss, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-400 text-4xl" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500 text-4xl" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 text-4xl" /> },
  ];

  return (
    <section id="skills" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-500 mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              {skill.icon}
              <p className="text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
