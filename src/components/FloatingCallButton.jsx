import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteData } from '../data/siteData';
import { motion } from 'framer-motion';

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        href={`https://wa.me/91${siteData.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl transition-all"
      >
        <FaWhatsapp size={28} />
      </motion.a>
      
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        href={`tel:${siteData.contact.phone}`}
        aria-label="Call us"
        className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-rose-600 hover:shadow-xl transition-all"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingCallButton;
