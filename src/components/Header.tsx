
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-demod-dark">DeMoD LLC</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium text-gray-700 hover:text-demod-dark">
            Services
          </a>
          <a href="#" className="font-medium text-gray-700 hover:text-demod-dark">
            About
          </a>
          <a href="#" className="font-medium text-gray-700 hover:text-demod-dark">
            Blog
          </a>
          <Button 
            className="bg-demod-dark hover:bg-demod text-white font-medium rounded-lg transition-colors duration-300"
          >
            Contact Us
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-wide py-4 space-y-4">
            <a 
              href="#services" 
              className="block font-medium text-gray-700 hover:text-demod-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#" 
              className="block font-medium text-gray-700 hover:text-demod-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#" 
              className="block font-medium text-gray-700 hover:text-demod-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <Button 
              className="w-full bg-demod-dark hover:bg-demod text-white font-medium rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
