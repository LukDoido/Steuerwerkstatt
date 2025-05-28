import React, { useEffect } from 'react';
import Section from '../components/ui/Section';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    document.title = 'Datenschutzerklärung | Steuerwerkstatt';
  }, []);

  return (
    <Section className="pt-32">
      <div className="prose prose-lg max-w-3xl mx-auto">
        <h1>Datenschutzerklärung</h1>
        
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
          wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
          werden können.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
          Impressum dieser Website entnehmen.
        </p>

        <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser 
          Website erfasst werden, werden auf den Servern des Hosters gespeichert.
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
          personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser 
          Datenschutzerklärung.
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
          inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
          Anschlussfragen bei uns gespeichert.
        </p>

        <h2>5. Plugins und Tools</h2>
        <h3>Google Maps</h3>
        <p>
          Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, 
          Barrow Street, Dublin 4, Irland.
        </p>
      </div>
    </Section>
  );
};

export default Datenschutz;