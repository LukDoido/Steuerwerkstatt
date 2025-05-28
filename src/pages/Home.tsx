import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ServiceSection from '../components/home/ServiceSection';
import WhyUs from '../components/home/WhyUs';
import Testimonials from '../components/home/Testimonials';
import BlogSection from '../components/home/BlogSection';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Steuerwerkstatt | Treuhand & Steuerberatung Luzern';
  }, []);

  return (
    <>
      <Hero />
      <ServiceSection />
      <WhyUs />
      <Testimonials />
      <BlogSection />
      <CTASection />
    </>
  );
};

export default Home;