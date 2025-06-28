import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import falcotext from "../../assets/falcotext.png";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleFormRedirect = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfRHguEMypnJXz_YQJhj-PKg7wUf5W4FdAKwn_DCOLWXzpcFA/viewform?usp=header",
      "_blank"
    );
  };

  const getLinkClass = (path) =>
    `${
      location.pathname === path ? "text-[#bca87c]" : "text-[#8e7d53]"
    } hover:text-[#bca87c]"`;

  return (
    <header className="w-full bg-[#09291b] shadow-md fixed top-0 z-50">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-[20px]">
          <div className="flex items-center gap-2">
            <img
              src={falcotext}
              alt="Falco Logo"
              className="h-6 sm:h-7 md:h-9 lg:h-10 xl:h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 font-[700]">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={getLinkClass("/about")}>
              About Us
            </Link>
            <Link to="/projects" className={getLinkClass("/projects")}>
              Projects
            </Link>
            <HashLink
              smooth
              to="/#contact"
              className="text-[#8e7d53] hover:text-[#bca87c]"
            >
              Contact Us
            </HashLink>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={handleFormRedirect}
              className="bg-[#8e7d53] !text-[#09291b] font-[700] px-4 py-2 rounded-2xl border-2 border-transparent hover:!text-[#8e7d53] hover:border-[#8e7d53] hover:bg-[#09291b] flex items-center gap-2 transition-all duration-200"
            >
              Join Us
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6 text-[#8e7d53]" />
              ) : (
                <Menu className="w-6 h-6 text-[#8e7d53]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md text-center">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block py-2 font-semibold ${
              location.pathname === "/" ? "text-[#bca87c]" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block py-2 font-semibold ${
              location.pathname === "/about"
                ? "text-[#bca87c]"
                : "text-gray-700"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={`block py-2 font-semibold ${
              location.pathname === "/projects"
                ? "text-[#bca87c]"
                : "text-gray-700"
            }`}
          >
            Projects
          </Link>
          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 font-semibold text-[#8e7d53] hover:text-[#bca87c]"
          >
            Contact Us
          </HashLink>

          <button
            onClick={() => {
              setIsOpen(false);
              handleFormRedirect();
            }}
            className="w-full !text-[#8e7d53] bg-[#09291b] mt-3 px-4 py-2 border-2 border-transparent rounded-2xl hover:!text-[#09291b] hover:border-[#8e7d53] hover:bg-[#8e7d53] flex items-center justify-center gap-2"
          >
            <User className="w-4 h-4" /> Join Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
