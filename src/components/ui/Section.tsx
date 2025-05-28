import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  container?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  container = true
}) => {
  const content = container ? <Container>{children}</Container> : children;
  
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      {content}
    </section>
  );
};

export default Section;