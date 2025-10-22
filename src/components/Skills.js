import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "TypeScript", "Go"]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React", "Vue.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Django", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Postman"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-3">
            <Code className="w-10 h-10" />
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-750 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-blue-500/10 text-blue-300 px-3 py-2 rounded-lg text-sm text-center border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
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