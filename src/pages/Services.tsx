import React, { useEffect } from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceDetail from '../components/services/ServiceDetail';
import { services } from '../data';
import Section from '../components/ui/Section';
import CTASection from '../components/home/CTASection';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Dienstleistungen | Steuerwerkstatt';
  }, []);

  return (
    <>
      <ServiceHero />
      <Section>
        <div className="space-y-6">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
};

export default Services;