import { useState } from "react";
import { Menu, X } from "lucide-react";
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

  const getLinkClass = ({ path = "", hash = "" }) => {
    const isActive =
      path && hash
        ? location.pathname === path && location.hash === hash
        : hash
        ? location.hash === hash
        : location.pathname === path && !location.hash;

    return `${
      isActive ? "text-[#bca87c]" : "text-[#8e7d53] hover:text-[#bca87c]"
    }`;
  };

  return (
    <header className="w-full bg-[#09291b] shadow-md fixed top-0 z-50">
      <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-[20px]">
          <div className="flex items-center gap-3">
            <a href="#">
              <img
                src={falcotext}
                alt="Falco Logo"
                className="max-h-12 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 xl:gap-10 font-[700]">
            <HashLink
              smooth
              to="/#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={getLinkClass({ path: "/" })}
            >
              Home
            </HashLink>
            <Link to="/about" className={getLinkClass({ path: "/about" })}>
              About Us
            </Link>
            <Link
              to="/projects"
              className={getLinkClass({ path: "/projects" })}
            >
              Projects
            </Link>
            <HashLink smooth to="/#contact" className="text-[#8e7d53]">
              Contact Us
            </HashLink>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={handleFormRedirect}
              className="bg-[#8e7d53] text-[#09291b] font-[700] px-5 py-2 rounded-2xl border-2 border-transparent hover:text-[#8e7d53] hover:border-[#8e7d53] hover:bg-[#09291b] transition-all duration-200"
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
            className={`block py-2 font-semibold ${getLinkClass({
              path: "/",
            })}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`block py-2 font-semibold ${getLinkClass({
              path: "/about",
            })}`}
          >
            About Us
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={`block py-2 font-semibold ${getLinkClass({
              path: "/projects",
            })}`}
          >
            Projects
          </Link>
          <HashLink
            smooth
            to="/#contact"
            onClick={() => setIsOpen(false)}
            className={`block py-2 font-semibold ${getLinkClass({
              path: "/",
              hash: "#contact",
            })}`}
          >
            Contact Us
          </HashLink>

          <button
            onClick={() => {
              setIsOpen(false);
              handleFormRedirect();
            }}
            className="w-full text-[#8e7d53] bg-[#09291b] mt-3 px-4 py-2 border-2 border-transparent rounded-2xl hover:text-[#09291b] hover:border-[#8e7d53] hover:bg-[#8e7d53] transition-all duration-200"
          >
            Join Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
