import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-400">
            Faisal AlMutairi
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-300">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Software Engineering Student (4/5) at Jeddah University
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
 
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Jeddah, Saudi Arabia</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://x.com/_21fl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              <Twitter className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">@_21FL</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/faisalal-mutairi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/ifaisal1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
