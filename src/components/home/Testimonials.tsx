import React from 'react';
import Section from '../ui/Section';
import { testimonials } from '../../data';

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-blue-700 text-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold sm:text-4xl">Was unsere Kunden sagen</h2>
        <p className="mt-4 text-lg text-blue-100">
          Erfahren Sie, wie wir unseren Kunden geholfen haben, ihre finanziellen und steuerlichen Herausforderungen zu meistern.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-blue-800 rounded-lg p-6 relative">
            <svg className="absolute top-6 left-6 h-12 w-12 text-blue-600 opacity-30" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="relative z-10">
              <p className="text-blue-100 mb-4">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-blue-300 text-sm">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;