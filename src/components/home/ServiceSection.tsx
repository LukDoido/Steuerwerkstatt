import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card, { CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { services } from '../../data';
import * as Icons from 'lucide-react';

const ServiceSection: React.FC = () => {
  // Dynamic icon component lookup
  const IconComponents: Record<string, React.FC<React.ComponentProps<typeof Icons.AlertCircle>>> = Icons;
  
  return (
    <Section className="bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Unsere Dienstleistungen</h2>
        <p className="mt-4 text-lg text-gray-600">
          Als erfahrener Treuhandpartner bieten wir massgeschneiderte Lösungen für Ihre finanziellen und steuerlichen Herausforderungen.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service) => {
          const Icon = IconComponents[service.icon] || IconComponents.HelpCircle;
          
          return (
            <Card key={service.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Link 
                  to={`/services#${service.id}`} 
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                >
                  Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      
      <div className="text-center mt-12">
        <Button>
          <Link to="/services" className="flex items-center">
            Alle Dienstleistungen <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default ServiceSection;