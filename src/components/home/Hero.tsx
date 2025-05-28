import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-beige-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl md:text-6xl">
                <span className="block">Ihr Partner für</span>
                <span className="block text-blue-700">Treuhand und Steuern</span>
              </h1>
              <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-xl text-gray-600">
                Steuerwerkstatt bietet massgeschneiderte Treuhand- und Steuerberatung für KMUs, Selbständige und Privatpersonen in der Region Luzern.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-blue-800 hover:bg-blue-700">
                  <Link to="/contact" className="flex items-center">
                    Beratungstermin vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-blue-800 text-blue-800 hover:bg-blue-50">
                  <Link to="/services">Unsere Dienstleistungen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Steuerwerkstatt Beratung"
        />
      </div>
    </div>
  );
};

export default Hero;