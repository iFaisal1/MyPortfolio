import React from 'react';
import { User } from 'lucide-react';

const About = () => {
 

  return (
    <section id="about" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-600 mb-4 flex items-center justify-center gap-3">
            <User className="w-10 h-10" />
            About Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main About Text */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
            <p className="text-lg leading-relaxed text-gray-700">
              Software Engineering student at the University of Jeddah. Practical experience in full-stack development, first with <span className="text-green-600 font-medium">Suhol.ai</span>, where I built a multi-stage AI prompt strategy to fix generation failures and make the system more reliable. Also developed <span className="text-green-600 font-medium">PlaneBot</span> dashboard, serving 50,000+ users across 500 servers by using <span className="text-green-600 font-medium">Redis</span> and <span className="text-green-600 font-medium">Next.js ISR</span> to ensure high performance. I like to use <span className="text-green-600 font-medium">Next.js</span>, <span className="text-green-600 font-medium">Nuxt.js</span>, and <span className="text-green-600 font-medium">Supabase</span> to create functional and fast applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;