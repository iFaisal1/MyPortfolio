import React from 'react';
import { FolderOpen, ExternalLink, Users,MessageSquare,Calendar } from 'lucide-react';
const Projects = () => {
  const projects = [
    {
      title: "Academic Semester Countdown Bot",
      description: "Developed an automated social media bot that provides daily visual progress tracking for academic semester completion. The bot posts daily updates featuring progress bar visualization showing semester completion percentage, remaining days countdown with precise calculations, weekly progress indicators and milestone tracking, and clean, minimalist design for easy readability.",
      technologies: ["Node.js", "X API", "Automation"],
      platform: "X (Twitter)",
      stats: { users: "2.3k+" },
      liveLink: "https://x.com/timer_uj",
      since: "2023",
      untilNow: true
    },
    {
      title: "PlaneBot",
      subtitle: "Discord Server Management Bot",
      description: "PlaneBot is a Discord management bot that helps over 500+ Discord servers and 300,000+ members automate moderation, ticketing, and logging through an easy-to-use web dashboard. Built with Node.js and SQL, it provides comprehensive server management tools for Discord communities.",
      technologies: ["Node.js", "Discord.js", "SQL", "Web Dashboard"],
      platform: "Discord",
      stats: { servers: "500+", users: "300K+" },
      liveLink: "https://planebot.xyz",
      since: "2024",
      untilNow: true
    },
    {
      title: "MezlaBot",
      subtitle: "Telegram Group Moderation Bot",
      description: "MezlaBot is a Telegram bot that helps group admins automatically moderate chats and protect communities by detecting and banning spam accounts instantly. Built with Node.js and MySQL, it provides real-time protection for Telegram groups.",
      technologies: ["Node.js", "MySQL", "Telegram Bot API", "Auto-Moderation"],
      platform: "Telegram",
      stats: { servers: "1.5k+",users: "1.3M+" },
      liveLink: "https://t.me/MezlaBot",
      since: "2021",
      untilNow: true
    },
    {
      title: "Nahj Project",
      subtitle: "Website + Mobile App",
      description: "A comprehensive scheduling solution designed to help students manage their academic schedules efficiently. The platform includes both a web application and mobile app, providing students with easy access to their timetables, assignments, and academic planning tools across all devices.",
      technologies: ["React", "React Native", "Node.js", "Larvel", "MySQL"],
      platform: "Web & Mobile",
      status: "In Development",
      isComingSoon: true,
      since: "2025",
      untilNow: true
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-3">
            <FolderOpen className="w-10 h-10" />
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building automation tools that serve thousands of users across multiple platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col"
            >
              {/* Header */}
              <div className="bg-gray-800 border-b border-gray-700 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 text-sm font-medium">{project.platform}</span>
                  <div className="flex items-center gap-3">
                    {project.status && (
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/30">
                        {project.status}
                      </span>
                    )}
                    {project.stats && (
                      <div className="flex items-center gap-2 text-blue-400 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{project.stats.users}</span>
                        {project.stats.servers && (
                          <>
                        <MessageSquare className="w-4 h-4" />
                        <span>{project.stats.servers}</span>
                        </>
                        )}

                        {project.since && (
                          <>
                          <Calendar className="w-4 h-4"   />
                          <span>{project.since} - {project.untilNow ? "Present" : project.untilNow}</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-gray-400 text-sm">{project.subtitle}</p>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-300 px-3 py-1.5 rounded-lg text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link or Coming Soon */}
                {project.isComingSoon ? (
                  <div className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 text-gray-400 px-6 py-3 rounded-lg font-semibold">
                    <span>Coming Soon</span>
                  </div>
                ) : (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Visit Project</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;