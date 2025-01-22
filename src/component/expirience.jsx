
const Experience = () => {
  return (
    <section id="experience" className="bg-black text-light-gray py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-blue-500 text-4xl font-bold mb-8">Experience</h2>

        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="flex-shrink-0">
            {/* <image
              src="https://www.instagram.com/p/DCVD7xPNmGo/?img_index=2"
              alt="Company Logo"
              width={80}
              height={80}
              className="rounded-full"
            /> */}
          </div>
          <div>
            <h3 className="text-white text-2xl font-semibold">Frontend Intern</h3>
            <p className="text-gray-200 italic">Code Alpha | 15 Oct - Present</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>Developed responsive web applications using React and Next.js.</li>
              <li>Building projects using MongoDB and Firebase.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
