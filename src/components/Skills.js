import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git", "Linux", "Telegram Bot API", "X API", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-600 mb-4 flex items-center justify-center gap-3">
            <Code className="w-10 h-10" />
            Technical Skills
          </h2>
          <p className="text-gray-600 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:bg-gray-50 hover:border-green-500 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm text-center border border-green-200 hover:bg-green-100 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;