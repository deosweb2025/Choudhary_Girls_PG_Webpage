import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });

    tl.fromTo(imgRef.current,
      { x: -50, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
      { x: 0, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.2, ease: 'power3.inOut' }
    )
    .fromTo(textRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      "-=0.6"
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2" ref={imgRef}>
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src={siteData.about.image} 
                alt="About Choudhary Girls PG" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-rose-900/10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2" ref={textRef}>
            <h2 className="text-sm font-bold text-rose-600 tracking-widest uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-6xl font-script text-slate-900 mb-6 leading-tight">
              {siteData.about.title}
            </h3>
            <div className="w-20 h-1 bg-rose-600 mb-8 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              {siteData.about.description}
            </p>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-200">
                <span className="text-xl font-bold text-slate-800">BC</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-lg">{siteData.company.owner}</p>
                <p className="text-slate-500">Owner & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
