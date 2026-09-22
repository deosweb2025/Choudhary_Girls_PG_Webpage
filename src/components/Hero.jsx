import { siteData } from "../data/siteData";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0">
        <img 
          src={siteData.hero.image} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h2 className="text-blue-100 font-semibold tracking-wide uppercase text-sm md:text-base mb-4">
          {siteData.hero.eyebrow}
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {siteData.hero.title}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mb-10">
          {siteData.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            {siteData.hero.primaryCTA}
          </a>
          <a href="#services" className="bg-blue-800/50 backdrop-blur border border-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors">
            {siteData.hero.secondaryCTA}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
