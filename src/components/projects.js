import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import image1 from "../assets/GENServe1.png";
import image3 from "../assets/Systemsity1.png";
// import other images...
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const Projects = () => {
  const projectList = [
    {
      title: "GENServe",
      description:
        "GENServe is an innovative platform designed to streamline and enhance service delivery across various sectors.",
      github: "https://github.com/F1rh55nAhmad/GENSErve",
      image: image1,
      live: false,
    },
    {
      title: "Systemsity Portfolio Website",
      description:
        "Developed the Systemsity website, showcasing our services and portfolio in a modern and responsive design. Technologies Used: React, Next.js, Tailwind CSS, MongoDB.",
      github: "http://systemsity.tech/",
      image: image3,
      live: true,
    },
    // Other projects...
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              data-aos="zoom-in" // Animation for the project cards
              data-aos-delay={index * 100} // Stagger the animation based on index
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-yellow-300">{project.title}</h3>
                <p className="text-base text-gray-800 mb-4">{project.description}</p>
                {project.live ? (
                  <a
                    href="https://systemsity.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    View Live Project
                  </a>
                ) : (
                  <span className="text-gray-400">Project Not Live</span>
                )}
                <Link to={`/project/${index}`} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition float-right">
                  More Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
