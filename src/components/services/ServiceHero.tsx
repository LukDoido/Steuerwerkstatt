import React from 'react';
import Container from '../ui/Container';

const ServiceHero: React.FC = () => {
  return (
    <div className="bg-blue-700 py-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Unsere Dienstleistungen
          </h1>
          <p className="text-xl text-blue-100">
            Wir bieten massgeschneiderte Treuhand- und Steuerdienstleistungen, 
            die auf Ihre individuellen Bedürfnisse zugeschnitten sind. Entdecken 
            Sie, wie wir Ihnen und Ihrem Unternehmen helfen können.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ServiceHero;