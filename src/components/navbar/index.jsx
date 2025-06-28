import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import RegisterModal from "../modals";
import falcotext from "../../assets/falcotext.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <Link to="/" className="text-[#8e7d53] hover:text-[#bca87c]">
              Home
            </Link>
            <Link to="/about" className="text-[#8e7d53] hover:text-[#bca87c]">
              About Us
            </Link>
            <Link
              to="/projects"
              className="text-[#8e7d53] hover:text-[#bca87c]"
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              className="text-[#8e7d53] hover:text-[#bca87c]"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={openModal}
              className="bg-[#8e7d53] !text-[#09291b] px-4 py-3 rounded-2xl border-2 border-transparent hover:!text-[#8e7d53] hover:border-[#8e7d53] hover:bg-[#09291b] flex items-center gap-2 transition-all duration-200"
            >
              <User className="w-4 h-4" /> Register
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
          <a href="#" className="block py-2 text-gray-700">
            Home
          </a>
          <a href="#about" className="block py-2 text-gray-700">
            About Us
          </a>
          <a href="#projects" className="block py-2 text-gray-700">
            Projects
          </a>
          <a href="#contact" className="block py-2 text-gray-700">
            Contact Us
          </a>
          <button
            onClick={openModal}
            className="w-full !text-[#8e7d53] bg-[#09291b] mt-3 px-4 py-2 border-2 border-transparent rounded-2xl hover:!text-[#09291b] hover:border-[#8e7d53] hover:bg-[#8e7d53] flex items-center justify-center gap-2"
          >
            <User className="w-4 h-4" /> Register
          </button>
        </div>
      )}

      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};

export default Navbar;
