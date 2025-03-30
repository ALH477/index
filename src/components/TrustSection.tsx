
import React from 'react';
import { Award, Users, Lightbulb } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why DeMoD LLC?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're committed to delivering exceptional AI solutions with a human touch
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-demod-extralight p-8 rounded-xl text-center">
            <Award size={48} className="mx-auto mb-4 text-demod-dark" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Expertise in AI-Driven Technology
            </h3>
            <p className="text-gray-700">
              Our team brings years of experience across industries, ensuring solutions that truly make a difference.
            </p>
          </div>
          
          <div className="bg-demod-extralight p-8 rounded-xl text-center">
            <Users size={48} className="mx-auto mb-4 text-demod-dark" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Solutions Designed with You in Mind
            </h3>
            <p className="text-gray-700">
              We listen to your needs and create tailored solutions that align perfectly with your goals.
            </p>
          </div>
          
          <div className="bg-demod-extralight p-8 rounded-xl text-center">
            <Lightbulb size={48} className="mx-auto mb-4 text-demod-dark" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Innovation You Can Rely On
            </h3>
            <p className="text-gray-700">
              We're constantly exploring new frontiers in AI to deliver cutting-edge solutions you can trust.
            </p>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-demod-dark to-demod rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl max-w-3xl mx-auto">
            "At DeMoD LLC, we're on a mission to make AI technology approachable, 
            effective, and beneficial for businesses of all sizes. We believe that 
            innovation delivered with care can transform the way you work."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
