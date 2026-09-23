import React from 'react';
import { siteData } from '../data/siteData';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: About */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="text-3xl font-script tracking-wide text-white flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center text-white text-base font-sans font-bold shrink-0">CG</span>
              {siteData.company.name}
            </a>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              {siteData.company.description}
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a href={siteData.social.facebook} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-rose-600 transition-colors text-white"><FaFacebookF size={18} /></a>
              <a href={siteData.social.instagram} className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-rose-600 transition-colors text-white"><FaInstagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#home" className="hover:text-rose-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-rose-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-rose-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-rose-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="leading-relaxed">{siteData.location.address}</li>
              <li><a href={`tel:${siteData.contact.phone}`} className="hover:text-rose-400 transition-colors font-medium">+91 {siteData.contact.phone}</a></li>
              <li><a href={`mailto:${siteData.contact.email}`} className="hover:text-rose-400 transition-colors">{siteData.contact.email}</a></li>
            </ul>
          </div>

          {/* Column 4: Google Map */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Find Us</h4>
            <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-800">
              <iframe 
                src={siteData.location.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Footer Map"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm text-slate-500 gap-4">
          <p className="md:w-1/3 text-center md:text-left order-2 md:order-1">
            &copy; {new Date().getFullYear()} {siteData.company.name}. 
          </p>
          
          <p className="md:w-1/3 text-center flex items-center justify-center gap-1 order-1 md:order-2">
            Designed by 
            <a 
              href="https://www.teamdeoskolkata.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1 text-white"
            >
              Digital Exposure Online Service
            </a>
          </p>
          
          <div className="md:w-1/3 hidden md:block order-3"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
