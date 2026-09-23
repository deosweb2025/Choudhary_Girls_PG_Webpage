import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { siteData } from '../data/siteData';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % siteData.hero.images.length);
    }, 3000); // slightly longer for premium feel
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current.children, 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    )
    .fromTo(textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.7"
    );
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full Page Background Images Crossfade */}
      <div className="absolute inset-0 z-0">
        {siteData.hero.images.map((src, index) => (
          <div 
            key={src}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2000ms] ease-in-out"
            style={{ 
              backgroundImage: `url(${src})`,
              opacity: currentImage === index ? 1 : 0,
              transform: currentImage === index ? 'scale(1.05)' : 'scale(1)', // subtle zoom
            }}
          ></div>
        ))}
        {/* Premium Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center mt-16">
        <div className="max-w-4xl" ref={titleRef}>
          <span className="block text-rose-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 drop-shadow-md">
            {siteData.hero.eyebrow}
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-script text-white leading-tight md:leading-tight mb-8 drop-shadow-xl">
            {siteData.hero.title}
          </h1>
        </div>
        
        <p ref={textRef} className="text-lg md:text-2xl text-slate-200 mb-12 max-w-2xl font-light drop-shadow-md">
          {siteData.hero.description}
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-5">
          <a 
            href="#contact"
            className="bg-rose-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition-all hover:scale-105 shadow-[0_0_20px_rgba(225,29,72,0.4)]"
          >
            {siteData.hero.primaryCTA}
          </a>
          <a 
            href="#gallery"
            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all"
          >
            {siteData.hero.secondaryCTA}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
