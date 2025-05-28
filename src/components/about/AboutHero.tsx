import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-blue-700 py-16 sm:py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Team Steuerwerkstatt"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Über Steuerwerkstatt
          </h1>
          <p className="mt-6 text-xl text-blue-100">
            Gegründet mit der Vision, Treuhand- und Steuerdienstleistungen auf höchstem Niveau zu bieten,
            steht Steuerwerkstatt für professionelle Beratung in der Region Luzern.
            Unsere Expertise vereint mit persönlichem Service macht uns zum vertrauenswürdigen Partner für
            Ihre finanziellen Angelegenheiten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;