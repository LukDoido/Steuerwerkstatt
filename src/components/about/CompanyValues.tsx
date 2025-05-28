import React from 'react';
import Section from '../ui/Section';
import { Heart, ShieldCheck, TrendingUp, Clock } from 'lucide-react';

const CompanyValues: React.FC = () => {
  const values = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-700" />,
      title: 'Vertrauen',
      description: 'Wir behandeln Ihre Daten und Finanzen mit höchster Vertraulichkeit und Integrität. Vertrauen ist die Basis unserer Zusammenarbeit.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-700" />,
      title: 'Kompetenz',
      description: 'Wir investieren kontinuierlich in die Weiterbildung unseres Teams, um Ihnen stets fundierte und aktuelle Beratung zu bieten.',
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-700" />,
      title: 'Engagement',
      description: 'Wir setzen uns mit Leidenschaft und Hingabe für Ihre finanziellen Interessen ein und betrachten Ihren Erfolg als unseren eigenen.',
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-700" />,
      title: 'Zuverlässigkeit',
      description: 'Auf uns können Sie sich verlassen. Wir halten Fristen ein und stehen Ihnen zuverlässig zur Seite, wenn Sie uns brauchen.',
    },
  ];

  return (
    <Section className="bg-blue-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Unsere Werte</h2>
        <p className="mt-4 text-lg text-gray-600">
          Diese Grundsätze leiten unser tägliches Handeln und prägen unsere Zusammenarbeit mit Kunden.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CompanyValues;