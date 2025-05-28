import React from 'react';
import Section from '../ui/Section';

const History: React.FC = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Gründung',
      description: 'Steuerwerkstatt wird von Lucas Banholzer in Luzern gegründet, mit dem Ziel, qualitativ hochwertige Treuhand- und Steuerberatung anzubieten.',
    },

  ];

  return (
    <Section>
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">Unsere Geschichte</h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Von den bescheidenen Anfängen bis zum heutigen Tag - ein Rückblick auf unsere Entwicklung.
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Year Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold z-10">
                {milestone.year.slice(2)}
              </div>
              
              {/* Content */}
              <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div> {/* Spacer */}
                <div className="w-5/12 p-6 bg-white rounded-lg shadow-md ml-8 mr-8">
                  <div className="text-blue-700 font-bold mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default History;