import React, { useEffect } from 'react';
import Section from '../components/ui/Section';

const AGB: React.FC = () => {
  useEffect(() => {
    document.title = 'AGB | Steuerwerkstatt';
  }, []);

  return (
    <Section className="pt-32">
      <div className="prose prose-lg max-w-3xl mx-auto">
        <h1>Allgemeine Geschäftsbedingungen</h1>
        
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Steuerwerkstatt GmbH 
          (nachfolgend "Steuerwerkstatt") und ihren Kunden.
        </p>

        <h2>2. Vertragsgegenstand</h2>
        <p>
          Die Steuerwerkstatt erbringt Dienstleistungen im Bereich Treuhand, Buchhaltung, Steuerberatung und 
          weitere damit verbundene Dienstleistungen gemäss separater Vereinbarung.
        </p>

        <h2>3. Zustandekommen des Vertrags</h2>
        <p>
          Der Vertrag kommt durch die Annahme des Auftrags durch die Steuerwerkstatt zustande. Die Annahme erfolgt 
          durch schriftliche Bestätigung oder durch Beginn der Auftragsausführung.
        </p>

        <h2>4. Honorar und Zahlungsbedingungen</h2>
        <p>
          Das Honorar wird nach Zeitaufwand oder als Pauschalhonorar vereinbart. Ohne andere Vereinbarung gilt ein 
          Stundenansatz von CHF 180.00. Die Rechnungsstellung erfolgt monatlich oder nach Projektabschluss.
        </p>

        <h2>5. Haftung</h2>
        <p>
          Die Steuerwerkstatt haftet für Schäden, die durch grobe Fahrlässigkeit oder Vorsatz verursacht wurden. 
          Die Haftung ist auf den Auftragswert beschränkt.
        </p>

        <h2>6. Vertraulichkeit</h2>
        <p>
          Die Steuerwerkstatt verpflichtet sich zur Verschwiegenheit über alle Tatsachen, die ihr im Rahmen der 
          Tätigkeit für den Kunden bekannt werden.
        </p>

        <h2>7. Schlussbestimmungen</h2>
        <p>
          Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Sollten einzelne Bestimmungen unwirksam 
          sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </div>
    </Section>
  );
};

export default AGB;