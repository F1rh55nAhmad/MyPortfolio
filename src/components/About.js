import React, { useEffect } from 'react';
import MyPhoto from '../assets/Farheen2.png'; // Add your image path here
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section id="about" className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4 md:px-10">
        {/* Centered Heading */}
        <h2 className="text-5xl font-extrabold mb-10 text-center" data-aos="fade-up">About Me</h2>

        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section (Image) */}
          <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-start" data-aos="zoom-in">
            <img
              src={MyPhoto}
              alt="Farheen Ahmad"
              className="rounded-full h-96 w-96 object-cover shadow-2xl hover:shadow-lg transition-shadow duration-300 mx-auto md:mx-0"
            />
          </div>

          {/* Right Section (Text) */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-2xl font-light mb-6" data-aos="fade-left">
              Hello! I'm <span className="font-semibold text-yellow-300">Farheen Ahmad</span>, a passionate Full Stack Developer with experience in building both static and dynamic web applications.
              I love coding and constantly learning new technologies to improve my skills and deliver high-quality solutions.
            </p>

            {/* Adding a divider */}
            <div className="my-8" data-aos="fade-up">
              <hr className="border-yellow-300 w-3/4 mx-auto md:mx-0" />
            </div>

            <p className="text-2xl font-light mb-10" data-aos="fade-right">
              I specialize in both front-end and back-end development, with a strong focus on creating user-friendly interfaces and robust server-side logic.
            </p>

            {/* Get in Touch Button */}
            <div data-aos="fade-up">
              <a href="#contact" className="bg-yellow-400 text-white px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
