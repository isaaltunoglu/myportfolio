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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">İA</span>
            </div>
            <span className="text-lg font-bold text-gray-900">İsa Altunoğlu</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm">
                About
              </a>
              <a href="#tech" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm">
                Projects
              </a>
              <a href="#certificates" className="text-gray-700 hover:text-purple-600 transition-colors font-medium text-sm">
                Certificates
              </a>
              <a href="#education" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium text-sm hover:shadow-lg transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
