import React from 'react';
import Section from '../ui/Section';
import { Award, Clock, Shield, Users } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-700" />,
      title: 'Expertise & Erfahrung',
      description: 'Unser Team aus qualifizierten Experten verfügt über jahrelange Erfahrung in der Steuerberatung und im Treuhandwesen.',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-700" />,
      title: 'Persönliche Betreuung',
      description: 'Wir legen Wert auf persönlichen Kontakt und individuelle Beratung. Bei uns sind Sie kein anonymer Kunde.',
    },
    {
      icon: <Award className="h-8 w-8 text-blue-700" />,
      title: 'Qualität & Sicherheit',
      description: 'Unsere Arbeitsweise garantiert höchste Qualität und Sicherheit bei allen finanziellen und steuerlichen Angelegenheiten.',
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-700" />,
      title: 'Effizienz & Zeitersparnis',
      description: 'Durch unsere Dienstleistungen sparen Sie wertvolle Zeit, die Sie in Ihr Kerngeschäft investieren können.',
    },
  ];

  return (
    <Section className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Warum Steuerwerkstatt?</h2>
        <p className="mt-4 text-lg text-gray-600">
          Wir bieten mehr als nur Treuhanddienstleistungen – wir sind Ihr strategischer Partner für nachhaltigen finanziellen Erfolg.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="flex p-6 rounded-lg bg-blue-50 transition-all hover:bg-blue-100">
            <div className="mr-4 flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyUs;