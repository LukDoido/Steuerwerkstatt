import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 lg:p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Kontaktinformationen</h3>
      
      <div className="space-y-6">
        <div className="flex">
          <MapPin className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h4 className="text-base font-medium text-gray-900">Adresse</h4>
            <p className="text-gray-600 mt-1">
              Steuerwerkstatt GmbH<br />
              Pilatus-Strasse 35<br />
              6003 Luzern<br />
              Schweiz
            </p>
          </div>
        </div>
        
        <div className="flex">
          <Phone className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h4 className="text-base font-medium text-gray-900">Telefon</h4>
            <p className="text-gray-600 mt-1">
              <a href="tel:+41412401234" className="hover:text-blue-700">
                +41 41 240 12 34
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex">
          <Mail className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h4 className="text-base font-medium text-gray-900">E-Mail</h4>
            <p className="text-gray-600 mt-1">
              <a href="mailto:info@steuerwerkstatt.ch" className="hover:text-blue-700">
                info@steuerwerkstatt.ch
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex">
          <Clock className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
          <div className="ml-4">
            <h4 className="text-base font-medium text-gray-900">Öffnungszeiten</h4>
            <div className="text-gray-600 mt-1 space-y-1">
              <p>Montag - Freitag: 08:00 - 12:00, 13:30 - 17:00</p>
              <p>Samstag - Sonntag: Geschlossen</p>
              <p className="text-sm italic mt-2">Termine nach Vereinbarung auch ausserhalb der Öffnungszeiten möglich</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;