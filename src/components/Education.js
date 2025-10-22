import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10" />
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            My academic journey at Jeddah University
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Bachelor of Software Engineering
                </h3>
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-medium">Jeddah University</span>
                </div>
                <p className="text-gray-400">Jeddah, Saudi Arabia</p>
              </div>
              
              <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-4">
                <div className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>2021 - 2025</span>
                  </div>
                </div>
                <div className="bg-gray-800 border border-gray-700 px-6 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400">3.8</div>
                  <div className="text-gray-400 text-sm">GPA</div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Expected Graduation: 2025", "Focus: Full-Stack Development", "GPA: 3.8/4.0", "Dean's List: 3 Semesters"].map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gray-800 border border-gray-700 p-4 rounded-lg"
                >
                  <Award className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Key Coursework */}
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-xl font-semibold text-white mb-4">Key Coursework</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Data Structures", subtitle: "Advanced Algorithms" },
                  { title: "Web Development", subtitle: "Full-Stack Applications" },
                  { title: "Software Engineering", subtitle: "Project Management" }
                ].map((course, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800 border border-gray-700 rounded-lg">
                    <div className="text-blue-400 font-semibold mb-1">{course.title}</div>
                    <div className="text-gray-400 text-sm">{course.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;