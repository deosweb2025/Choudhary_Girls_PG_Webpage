import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.name.toLowerCase());
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className={`text-3xl font-script tracking-wide flex items-center gap-3 transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
          <span className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white text-base font-sans font-bold shadow-lg shrink-0">CG</span>
          {siteData.company.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`relative text-sm font-semibold transition-colors hover:text-rose-500 ${
                  isScrolled ? (isActive ? 'text-rose-600' : 'text-slate-700') : (isActive ? 'text-rose-400 drop-shadow-md' : 'text-white/90 drop-shadow-sm')
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a 
            href={`tel:${siteData.contact.phone}`}
            className="bg-rose-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-900/20"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-800 hover:text-rose-600 py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${siteData.contact.phone}`}
              className="mt-4 bg-rose-600 text-white px-5 py-3 rounded-xl text-center font-medium"
            >
              Call {siteData.contact.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
