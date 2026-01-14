import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full animate-navbar">
      <div className="backdrop-blur-xl bg-gray-900/70 border-b border-white/10 h-16 px-10 flex items-center justify-between shadow-2xl">

        {/* Logo */}
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-white hover:text-blue-400 transition duration-300 cursor-pointer">
          PORTFOLIO
        </h2>

        {/* Links */}
        <div className="flex gap-10 text-sm">

          {["about", "projects", "education", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group text-gray-300 transition duration-300 hover:text-blue-400 hover:scale-105"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* Gradient underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>

              {/* Glow effect */}
              <span className="absolute inset-0 rounded-md blur-lg opacity-0 group-hover:opacity-30 bg-blue-500 transition"></span>
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
