import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-rose-400 tracking-widest uppercase mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-6xl font-script mb-8">Get In Touch</h3>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Ready to secure your stay? Contact us today for bookings and inquiries. Our team is here to help you.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                  <MapPin className="text-rose-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Location</h4>
                  <p className="text-slate-400 leading-relaxed">{siteData.location.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                  <Phone className="text-rose-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Phone</h4>
                  <a href={`tel:${siteData.contact.phone}`} className="text-slate-400 hover:text-white transition-colors block mb-1">
                    +91 {siteData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                  <Mail className="text-rose-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <a href={`mailto:${siteData.contact.email}`} className="text-slate-400 hover:text-white transition-colors block">
                    {siteData.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-2xl relative">
            {/* Decorative background glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-600/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <h4 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h4>
            <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all" 
                    placeholder="you@example.com" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all" 
                    placeholder="+91" 
                    required 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all resize-none" 
                  placeholder="How can we help you?" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl px-4 py-4 mt-2 transition-all shadow-[0_0_20px_rgba(225,29,72,0.2)] hover:shadow-[0_0_25px_rgba(225,29,72,0.4)] hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
