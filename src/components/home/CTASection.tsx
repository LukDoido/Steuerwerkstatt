import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold sm:text-4xl mb-6">
          Bereit für eine professionelle Beratung?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch. 
          Unser Expertenteam in Luzern freut sich darauf, Sie kennenzulernen und 
          Ihre finanziellen und steuerlichen Herausforderungen zu lösen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="border-white text-white hover:bg-blue-700" size="lg">
            <Link to="/contact">Kontakt aufnehmen</Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-blue-700" size="lg">
            <Link to="/services">Unsere Dienstleistungen</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;