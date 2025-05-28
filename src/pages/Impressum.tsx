import React, { useEffect } from 'react';
import Section from '../components/ui/Section';

const Impressum: React.FC = () => {
  useEffect(() => {
    document.title = 'Impressum | Steuerwerkstatt';
  }, []);

  return (
    <Section className="pt-32">
      <div className="prose prose-lg max-w-3xl mx-auto">
        <h1>Impressum</h1>
        
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Steuerwerkstatt GmbH<br />
          Pilatus-Strasse 35<br />
          6003 Luzern<br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +41 41 240 12 34<br />
          E-Mail: info@steuerwerkstatt.ch
        </p>

        <h2>Handelsregistereintrag</h2>
        <p>
          Eingetragen im Handelsregister.<br />
          Registergericht: Handelsregister Kanton Luzern<br />
          Registernummer: CHE-XXX.XXX.XXX
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          CHE-XXX.XXX.XXX MWST
        </p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          Berufsbezeichnung: Treuhänder<br />
          Zuständige Kammer: Treuhand Suisse<br />
          Verliehen in: Schweiz
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Impressum;