import React, { useEffect } from "react";
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const Services = () => {
  const serviceList = [
    {
      title: "Web Development",
      description: "I craft custom, responsive websites tailored to your unique business needs, utilizing the latest technologies to ensure a seamless user experience and optimal performance.",
    },
    {
      title: "Frontend Development",
      description: "I engage user-friendly interfaces that provide an exceptional user experience across all devices, ensuring your brand stands out.",
    },
    {
      title: "Backend Development",
      description: "I implement robust backend solutions that enhance your online presence, streamline operations, and drive traffic to your platform through efficient data management.",
    },
    {
      title: "Website Management",
      description: "My services include comprehensive website management to ensure data protection, security, and up-to-date content for businesses and individuals alike.",
    },
    {
      title: "UI/UX Designing",
      description: "I create intuitive UI/UX designs that resonate with your audience, focusing on usability and aesthetic appeal to elevate your brand’s online presence.",
    },
    {
      title: "E-commerce Management",
      description: "From store setup to sales optimization, I manage your online store to maximize growth, providing insights and strategies to enhance your e-commerce success.",
    },
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section id="services" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in" // Animation for the service cards
              data-aos-delay={index * 100} // Stagger the animation based on index
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">{service.title}</h3>
              <p className="text-base text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
