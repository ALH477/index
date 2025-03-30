
import React from 'react';
import { Button } from "@/components/ui/button";
import { Robot } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-demod-extralight to-white">
      <div className="container-wide min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-demod-dark">DeMoD LLC:</span> Your Friendly AI Partner for Tomorrow's Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              From secure data destruction to cutting-edge agricultural tech, we bring AI-powered innovation to your doorstep.
            </p>
            <Button 
              className="bg-demod-dark hover:bg-demod text-white font-medium py-6 px-8 text-lg rounded-lg transition-colors duration-300"
            >
              Discover Our Solutions
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-demod to-demod-light rounded-full blur opacity-30"></div>
              <div className="relative bg-white p-10 rounded-full border-2 border-demod-light/50">
                <Robot size={240} className="text-demod" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
