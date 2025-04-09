import React, { useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/Screenshot 2024-11-23 175422.png";
import image2 from "../assets/Screenshot 2024-11-23 175525.png";
import image3 from "../assets/Screenshot 2025-03-06 010022.png";
import backgroundImage from "../assets/Screenshot 2024-11-23 175323.png";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const projectData = [
    {
      image: image3,
      title: "todo App",
      description: "A TODO application built with React and Tailwind CSS.",
      github: "https://github.com/Muhammadahsanhanif/TO-DO-APP",
      demo: "https://to-doappbyahsanhanif.netlify.app/",
    },
    {
      image: backgroundImage,
      title: "Calculator",
      description: "A calculator app with responsive design and intuitive user interface.",
      github: "https://github.com/Muhammadahsanhanif/CALCULATER",
      demo: "https://spectacular-manatee-754667.netlify.app/",
    },
    {
      image: image1,
      title: "Attendance App",
      description: "An attendance management system using modern web technologies.",
      github: "https://github.com/Muhammadahsanhanif/ATTENDENCE-APP",
      demo: "https://snazzy-starship-c39186.netlify.app/",
    },
    {
      image: image2,
      title: "Funiro Website",
      description: "A furniture e-commerce website built using modern web design practices.",
      github: "https://github.com/Muhammadahsanhanif/funiro-website",
      demo: "https://funiro-website.vercel.app/",
    },
  ];

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 w-full md:w-5/12 lg:w-1/4 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2 * index,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
              }}
              data-aos="fade-up" // AOS fade-up animation
              data-aos-delay={index * 100} // Stagger delay for each project
              data-aos-once="true" // Animation triggers once when in view
            >
              <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  View on GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
