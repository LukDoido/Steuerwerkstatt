import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '../../types';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  // Dynamic icon component lookup
  const IconComponents: Record<string, React.FC<React.ComponentProps<typeof Icons.AlertCircle>>> = Icons;
  const Icon = IconComponents[service.icon] || IconComponents.HelpCircle;
  
  // Additional details for each service (this could be extended in the data file)
  const benefits = [
    'Professionelle Bearbeitung durch Experten',
    'Einhaltung aller gesetzlichen Vorschriften',
    'Zeitersparnis für Sie und Ihr Unternehmen',
    'Minimierung von steuerlichen Risiken',
    'Kosteneffiziente Lösungen',
  ];

  return (
    <div id={service.id} className="py-12 border-b border-gray-200 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
          <Icon className="h-8 w-8 text-blue-700" />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
          <p className="text-lg text-gray-600 mb-6">{service.description}</p>
          
          <h4 className="text-xl font-semibold text-gray-900 mb-3">Ihre Vorteile</h4>
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5 mr-2" />
                <span className="text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button>
            <Link to="/contact" className="flex items-center">
              Beratung anfragen
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;