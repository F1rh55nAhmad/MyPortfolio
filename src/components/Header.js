const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-4"> {/* Added padding here */}
        {/* Logo / Title */}
        <h1 className="text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300 pr-4"> {/* Added padding-right */}
          Farheen Ahmad
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="/" className="hover:text-yellow-300 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-300 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-300 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-300 transition duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-300 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-yellow-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
