import LinkedIn from "../assets/LinkedIN.png"; // Ensure this matches your actual file name and path
import Github from "../assets/Github.png"; // Ensure this matches your actual file name and path

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section (Copyright) */}
        <div className="text-center md:text-left">
          <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Farheen Ahmad. All rights reserved.</p>
        </div>

        {/* Middle Section (Links) */}
        <div className="flex space-x-8">
          <a href="#about" className="hover:text-blue-300 transition duration-300 text-lg">About</a>
          <a href="#services" className="hover:text-blue-300 transition duration-300 text-lg">Services</a>
          <a href="#contact" className="hover:text-blue-300 transition duration-300 text-lg">Contact</a>
        </div>

        {/* Right Section (Social Media Links) */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/farheen-ahmad-b47159267"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
          >
            <img src={LinkedIn} alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110"
          >
            <img src={Github} alt="GitHub" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
