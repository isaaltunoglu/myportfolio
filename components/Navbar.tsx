"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-red-600/20" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">İA</span>
            </div>
            <span className="text-xl font-bold text-white tracking-wider">İsa Altunoğlu</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors font-medium uppercase text-sm tracking-wide">
                About
              </a>
              <a href="#tech" className="text-gray-400 hover:text-red-600 transition-colors font-medium uppercase text-sm tracking-wide">
                Expertise
              </a>
              <a href="#projects" className="text-gray-400 hover:text-red-600 transition-colors font-medium uppercase text-sm tracking-wide">
                Projects
              </a>
              <a href="#certificates" className="text-gray-400 hover:text-red-600 transition-colors font-medium uppercase text-sm tracking-wide">
                Certificates
              </a>
              <a href="#education" className="text-gray-400 hover:text-red-600 transition-colors font-medium uppercase text-sm tracking-wide">
                Education
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
