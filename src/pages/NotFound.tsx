import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Seite nicht gefunden | Steuerwerkstatt';
  }, []);

  return (
    <Section className="min-h-[calc(100vh-300px)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-700">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mt-4 mb-6">Seite nicht gefunden</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben. 
          Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.
        </p>
        <Button size="lg">
          <Link to="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    </Section>
  );
};

export default NotFound;