import React from "react";

export default function AboutPage() {
    return (
        <section id="about" className="py-20 bg-black text-light-gray">
            <div className="container mx-auto px-6">
                {/* Header */}
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                    About Me
                </h2>

                {/* Introduction Section */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-white mb-4">Introduction</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        <span className="font-semibold text-xl text-white">
                            I&apos;m AHSAN HANIF ,
                        </span>{" "}
                        a web developer passionate about building clean, functional, and user-friendly websites. 
                        I specialize in front-end development using technologies like React, Next.js, and Tailwind CSS. 
                        Additionally, I have experience with back-end tools such as Firebase and MongoDB.
                    </p>
                </div>

                {/* Education & Certifications Section */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-12">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        Education & Certifications
                    </h3>
                    {/* Education */}
                    <div className="mb-6">
                        <p className="text-gray-400 text-lg">
                            <span className="font-semibold text-white">EDUCATION WILL BE CONTINUE</span>{" "}
                           GOVT  ISLAMIA ART & SCIENCE COLLEGE (2024 - Present)
                        </p>
                    </div>
                    {/* Certifications */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Certifications</h4>
                        <ul className="list-disc pl-6 text-gray-400 text-lg">
                            <li>Javascript Essentials - Cisco (October 2024)</li>
                            <li>Career Essentials in Generative AI by Microsoft and LinkedIn (january 2024)</li>
                            <li>Career Essentials in GitHub Professional Certificate (february 2025)</li>
                            <li>Microsoft Security Essentials: Concepts, Solutions, and AI-Powered Protection (february 2025)</li>
                            <li>Reactsjs The Complete Reactjs Course for Beginners  (february 2025)</li>


                            <li>Web and Mobile App Development - Saylani Mass IT Training Center (2023 - 2024)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
