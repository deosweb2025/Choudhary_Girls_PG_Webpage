import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const galleryRef = useRef([]);

  useEffect(() => {
    galleryRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-rose-600 tracking-widest uppercase mb-4">Our Gallery</h2>
          <h3 className="text-4xl md:text-6xl font-script text-slate-900 mb-6">Take A Tour</h3>
          <p className="text-lg text-slate-600">Glimpses of your future home.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.gallery.map((image, index) => (
            <div 
              key={index}
              ref={el => galleryRef.current[index] = el}
              className={`relative overflow-hidden rounded-3xl group ${
                index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1 aspect-[4/3] lg:aspect-square' : 'aspect-square'
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-medium text-lg">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
