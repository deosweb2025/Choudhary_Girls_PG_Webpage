import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Utensils, Wifi, Sparkles, Shirt, Wind } from 'lucide-react';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  ShieldCheck: <ShieldCheck size={32} className="text-rose-600" />,
  Utensils: <Utensils size={32} className="text-rose-600" />,
  Wifi: <Wifi size={32} className="text-rose-600" />,
  Sparkles: <Sparkles size={32} className="text-rose-600" />,
  Shirt: <Shirt size={32} className="text-rose-600" />,
  Wind: <Wind size={32} className="text-rose-600" />
};

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-rose-600 tracking-widest uppercase mb-4">Our Amenities</h2>
          <h3 className="text-4xl md:text-6xl font-script text-slate-900 mb-6">Premium Living Experience</h3>
          <p className="text-lg text-slate-600">Everything you need for a comfortable, safe, and productive stay.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="relative rounded-3xl group md:hover:-translate-y-2 transition-transform duration-500 p-[2px]"
            >
              {/* Animated Gradient Border: Always on for mobile, hover for desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-rose-600 to-rose-400 opacity-100 animate-gradient-xy md:opacity-0 md:group-hover:opacity-100 md:group-hover:animate-gradient-xy transition-opacity duration-500 rounded-3xl z-0"></div>
              
              {/* Card Inner Content */}
              <div className="relative bg-white h-full p-10 rounded-[22px] shadow-xl shadow-slate-200/50 z-10 flex flex-col items-start">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mb-8 group-hover:bg-rose-100 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
