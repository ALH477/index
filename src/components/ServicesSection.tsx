
import React from 'react';
import { Lock, Robot, Drone, Leaf, Computer, Shield } from 'lucide-react';

const services = [
  {
    icon: <Lock size={28} />,
    title: 'Data Destruction',
    description: 'Protect your sensitive information with secure, AI-driven destruction services.'
  },
  {
    icon: <Robot size={28} />,
    title: 'AI Agents',
    description: 'Boost efficiency with smart, user-friendly AI agents tailored to your business.'
  },
  {
    icon: <Drone size={28} />,
    title: 'Drone Imaging',
    description: 'Capture the big picture with advanced drone imaging solutions.'
  },
  {
    icon: <Leaf size={28} />,
    title: 'Agricultural Tech',
    description: 'Grow smarter with AI tools for crop monitoring and farm optimization.'
  },
  {
    icon: <Computer size={28} />,
    title: 'Custom PCs',
    description: 'Power your projects with custom-built PCs designed for peak performance.'
  },
  {
    icon: <Shield size={28} />,
    title: 'Cyber Security',
    description: 'Defend your digital world with robust, AI-enhanced security.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our range of AI-powered solutions designed to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
