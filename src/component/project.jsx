import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/Screenshot 2024-11-23 175323.png";
import image1 from "../assets/Screenshot 2024-11-23 175422.png";
import image2 from "../assets/Screenshot 2024-11-23 175525.png";
import image3 from "../assets/Screenshot 2024-11-23 175622.png";

export default function Projects() {
  const projectData = [
    {
      image: image3,
      title: "Weather App",
      description: "A weather application built with React, Firebase, and Tailwind CSS.",
      github: "https://github.com/Muhammadahsanhanif/WEATHER-APP",
      demo: "https://jade-melba-304ccf.netlify.app/",
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 w-full md:w-5/12 lg:w-1/4 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center text-center"
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  View on GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
