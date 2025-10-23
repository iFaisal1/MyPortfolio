import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Game Server Developer at CFX Platform",
      company: "High Complexity Arabic Game Server",
    //   location: "CFX Platform",
      period: "October 2023 - October 2025",
      type: "Full Stack Development",
      description: "Developed a high complexity Arabic game server achieving top 3 ranking on CFX platform. Successfully scaled the infrastructure to support 1,800+ concurrent players and 15,000+ daily active users, making it one of the largest servers on the platform.",
      achievements: [
        "Architected and deployed scalable server infrastructure supporting 1,800+ concurrent players from 200 players in 2023",
        "Achieved 15,000+ daily active users with optimal performance and stability",
        "Ranked in top 3 game servers on CFX platform",
        "Developed game mechanics and server-side logic using LUA & JS scripting"
      ],
      technologies: ["ReactJS", "Node.js", "MySQL", "MongoDB", "LUA"],
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-3">
            <Briefcase className="w-10 h-10" />
             Experience
          </h2>

        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Header */}
              <div className="bg-gray-900/50 border-b border-gray-700 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-blue-400 text-lg font-medium mb-2">
                      {experience.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg text-sm font-medium border border-blue-500/30">
                      {experience.type}
                    </span>
                    {experience.status && (
                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-sm font-medium border border-green-500/30">
                        {experience.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {experience.description}
                </p>
                
                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className="text-gray-400 flex items-start gap-3"
                      >
                        <span className="text-blue-400 mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm border border-blue-500/30 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

