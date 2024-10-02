import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const Skills = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const technicalSkills = [
    "HTML & CSS",
    "JavaScript",
    "MERN STACK",
    "React",
    "Node.js",
    "Express.js",
    "Next.js",
    "MongoDB",
    "Tailwind CSS",
    "Git & GitHub",
    "RESTful APIs",
    ".NET",
    "Angular",
    "UI/UX Designing",
    "SQL",
  ];

  const otherSkills = [
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Communication",
    "Critical Thinking",
    "Project Management",
    "Leadership"
  ];

  const tools = [
    "Visual Studio",
    "Ubuntu",
    "Microsoft SQL Server Studio",
    "Oracle",
    "Postman",
    "Swagger UI",
    "Visual Studio Code",
    "JIRA",
    "Docker",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Github"
  ];

  return (
    <section id="skills" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20">
      <div className="container mx-auto px-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-100" data-aos="fade-up">My Skills</h2>

        {/* Technical Skills Section */}
        <h3 className="text-3xl font-semibold mb-6 text-center text-yellow-300" data-aos="fade-up">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-blue-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Add a delay based on the index for staggered effect
            >
              <h4 className="text-xl font-semibold">{skill}</h4>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <h3 className="text-3xl font-semibold mb-6 text-center text-yellow-300" data-aos="fade-up">Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white text-blue-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Add a delay based on the index for staggered effect
            >
              <h4 className="text-xl font-semibold">{tool}</h4>
            </div>
          ))}
        </div>

        {/* Other Skills Section */}
        <h3 className="text-3xl font-semibold mb-6 text-center text-yellow-300" data-aos="fade-up">Other Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-blue-800 p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Add a delay based on the index for staggered effect
            >
              <h4 className="text-xl font-semibold">{skill}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
