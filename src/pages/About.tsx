import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import TeamSection from '../components/about/TeamSection';
import CompanyValues from '../components/about/CompanyValues';
import History from '../components/about/History';
import CTASection from '../components/home/CTASection';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Über uns | Steuerwerkstatt';
  }, []);

  return (
    <>
      <AboutHero />
      <CompanyValues />
      <History />
      <TeamSection />
      <CTASection />
    </>
  );
};

export default About;