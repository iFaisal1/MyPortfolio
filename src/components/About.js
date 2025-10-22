import React from 'react';
import { User, Code, Zap, Rocket } from 'lucide-react';

const About = () => {
 

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-3">
            <User className="w-10 h-10" />
            About Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main About Text */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              I'm a developer who enjoys exploring all kinds of technologies and building creative solutions. Since 2016, I've been on a journey with code, working with everything from scripting and backend development.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Currently in my 4th year of Software Engineering at Jeddah University (4/5), I focus on creating practical applications and automation tools. I work with various technologies including <span className="text-blue-400 font-medium">Node.js</span>, <span className="text-blue-400 font-medium">Next.js</span>, <span className="text-blue-400 font-medium">MongoDB</span>, <span className="text-blue-400 font-medium">MySQL</span>, and <span className="text-blue-400 font-medium">Linux</span>. I'm passionate about learning new frameworks and building solutions that make a difference.
            </p>
          </div>

 
        </div>
      </div>
    </section>
  );
};

export default About;