
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-demod-extralight section-padding">
      <div className="container-wide">
        <div className="bg-white p-12 rounded-2xl shadow-lg border border-demod-light/30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discover how our AI solutions can help you achieve your goals.
          </p>
          <Button 
            className="bg-demod hover:bg-demod-dark text-white font-medium py-6 px-8 text-lg rounded-lg transition-colors duration-300 flex items-center mx-auto"
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
