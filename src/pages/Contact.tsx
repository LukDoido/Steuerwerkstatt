import React, { useEffect } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Kontakt | Steuerwerkstatt';
  }, []);

  return (
    <>
      <div className="bg-blue-700 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-blue-100">
              Haben Sie Fragen oder möchten Sie einen Beratungstermin vereinbaren? 
              Wir freuen uns, von Ihnen zu hören.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schreiben Sie uns</h2>
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.2071139400997!2d8.305946076125056!3d47.05020047114403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ffbe4d883b1cd%3A0xe5320bc2a6fb303a!2sPilatusstrasse%2C%20Luzern!5e0!3m2!1sen!2sch!4v1700000000000!5m2!1sen!2sch" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Steuerwerkstatt Standort"
          ></iframe>
        </div>
      </Section>
    </>
  );
};

export default Contact;