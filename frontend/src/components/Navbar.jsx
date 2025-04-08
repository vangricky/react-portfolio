import React, { useState } from 'react';
import rickylogo from '../assets/images/Ricky-orange-icon.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-700 shadow-md top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src={rickylogo} alt="Ricky Logo" className="h-12 w-auto" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-orange-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-orange-300 text-lg items-center">
          <li className="hover:text-white transition"><a href="">About</a></li>
          <li className="hover:text-white transition"><a href="">Skills</a></li>
          <li className="hover:text-white transition"><a href="">Projects</a></li>
          <li className="hover:text-white transition"><a href="">Contact</a></li>
          <li className="hover:text-white border rounded px-3 py-1 cursor-pointer transition"><a href="">Resume</a></li>
        </ul>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-gray-700 px-4 ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col gap-4 text-orange-300 text-lg">
          <li className="hover:text-white transition"><a href="">About</a></li>
          <li className="hover:text-white transition"><a href="">Skills</a></li>
          <li className="hover:text-white transition"><a href="">Projects</a></li>
          <li className="hover:text-white transition"><a href="">Contact</a></li>
          <li className="hover:text-white border rounded px-3 py-1 w-fit transition"><a href="">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
