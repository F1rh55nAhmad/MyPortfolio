import HeroImage from "../assets/Farheen.png";
import { useEffect, useState } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20 mt-16">
      <div className="container mx-auto px-10 flex flex-col items-center md:flex-row md:items-center md:justify-between">
        {/* Left Section (Text) */}
        <div
          className="md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left"
          data-aos="fade-right" // Animation on scroll
        >
          <h1 className="text-6xl font-extrabold mb-4 leading-tight">
            Hello, I'm <span className="text-yellow-300">Farheen Ahmad</span>
          </h1>
          <p className="text-2xl mb-8 font-light">
            A passionate <span className="font-semibold text-yellow-200">Full Stack Developer</span>.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-500 shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Right Section (Image) */}
        <div
          className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
          data-aos="fade-left" // Animation on scroll
        >
          <img
            src={HeroImage}
            alt="Farheen Ahmad"
            className="w-64 h-80 object-cover rounded-full border-4 border-white shadow-lg hover:shadow-2xl transition-all duration-300"
          />
        </div>
      </div>

    
    </section>
  );
};

export default Hero;
