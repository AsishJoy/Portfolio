import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-900 text-white h-16 flex items-center justify-between px-10 z-50">
      {/* Logo */}
      <h2 className="text-lg font-semibold tracking-wide">
        PORTFOLIO
      </h2>

      {/* Links */}
      <div className="flex gap-6">
        <a href="#about" className="text-white text-sm hover:text-blue-500">
          About
        </a>
        <a href="#projects" className="text-white text-sm hover:text-blue-500">
          Projects
        </a>
        <a href="#education" className="text-white text-sm hover:text-blue-500">
          Education
        </a>
        <a href="#contact" className="text-white text-sm hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
