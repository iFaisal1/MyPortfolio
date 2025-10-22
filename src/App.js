import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <About />
        <Projects />
        <Experience />
      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Faisal Al-Mutairi</h3>
              <p className="text-gray-400">Full-Stack Developer</p>
            </div>
            
            <div className="flex justify-center gap-6 mb-6 flex-wrap">
              <a 
                href="mailto:pd9@outlook.sa"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/faisalal-mutairi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://x.com/_21fl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                X (Twitter)
              </a>
              <a 
                href="https://github.com/ifaisal1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2024 Faisal Al-Mutairi. Built with React.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;