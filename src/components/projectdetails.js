import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import image1 from "../assets/GENServe1.png";
import image2 from "../assets/GENServe2.png";
import image3 from "../assets/Systemsity1.png";
import image4 from "../assets/Systemsity2.png";
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Simulate project data (you can replace this with actual data fetching logic)
  const projectList = [
    {
      title: "GENServe",
      description:
        "GENServe is an innovative platform designed to streamline and enhance service delivery across various sectors, including healthcare, education, and community services. Our mission is to connect users with essential services, making it easier to access the resources they need.",
      github: "https://github.com/F1rh55nAhmad/GENSErve",
      details: [
        { image: image1, description: "Front view" },
        { image: image2, description: "Services view" },
      ],
    },
    {
      title: "Systemsity- Website Portfolio",
      description:
        "Developed the Systemsity website, showcasing our services and portfolio in a modern and responsive design. Technologies Used: React, Next.js, Tailwind CSS, MongoDB.",
      github: "http://systemsity.tech/",
      details: [
        { image: image3, description: "Front view" },
        { image: image4, description: "Business Needs" },
      ],
    },
    // Add more projects here...
  ];

  const project = projectList[id]; // Get the specific project based on ID

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  if (!project) {
    return <p className="text-center text-red-600">Project not found.</p>; // Error handling if project ID does not exist
  }

  return (
    <div className="container mx-auto px-10 py-10 mt-16">
      <h2 className="text-4xl text-center font-bold mb-4" data-aos="fade-up">{project.title}</h2>
      <p className="text-gray-800 mb-4" data-aos="fade-up" data-aos-delay="100">{project.description}</p>
      <h3 className="text-2xl font-bold mb-2" data-aos="fade-up" data-aos-delay="200">Details:</h3>
      {project.details.map((detail, index) => (
        <div key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100 + 300}>
          <img
            src={detail.image}
            alt={`Detail ${index + 1}`}
            className="w-full h-100 object-cover mb-2"
          />
          <p className="text-gray-700">{detail.description}</p>
        </div>
      ))}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        data-aos="fade-up" 
        data-aos-delay="500"
      >
        View 
      </a>
    </div>
  );
};

export default ProjectDetails;
