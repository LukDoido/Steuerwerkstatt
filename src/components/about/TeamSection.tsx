import React from 'react';
import Section from '../ui/Section';
import { teamMembers } from '../../data';
import { Mail, Linkedin } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Unser Team</h2>
        <p className="mt-4 text-lg text-gray-600">
          Lernen Sie das Expertenteam hinter Steuerwerkstatt kennen. Wir vereinen Fachwissen mit persönlicher Betreuung.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-700 font-medium mt-1">{member.position}</p>
              <p className="text-gray-600 mt-4">{member.bio}</p>
              <div className="flex space-x-3 mt-5">
                <a 
                  href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@steuerwerkstatt.ch`} 
                  className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                  aria-label={`E-Mail an ${member.name} senden`}
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                  aria-label={`LinkedIn-Profil von ${member.name}`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TeamSection;