import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-600 mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10" />
            Education
          </h2>
          <p className="text-gray-600 text-lg">
            My academic journey at Jeddah University
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  BSc Software Engineering
                </h3>
                <div className="flex items-center gap-2 text-green-600 mb-1">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-medium">Jeddah University</span>
                </div>
                <p className="text-gray-600">Jeddah, Saudi Arabia</p>
              </div>
              
              <div className="mt-4 lg:mt-0">
                <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>2022 - 2027</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {["Awarded Certificate of Excellence for the 2022 and 2023 academic semesters"].map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-200 p-4 rounded-lg"
                >
                  <Award className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-900">{achievement}</span>
                </div>
              ))}
            </div>

            {/* Key Coursework */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Coursework</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Software Project Management",
                  "Software Design and Architecture",
                  "Software Process Models"
                ].map((course, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="text-green-600 font-semibold">{course}</div>
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