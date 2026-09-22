import { siteData } from "../data/siteData";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{siteData.about.title}</h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {siteData.about.description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Owned and managed by <span className="text-blue-900 font-bold">{siteData.company.owner}</span>.
            </p>
          </div>
          <div className="relative">
            <img 
              src={siteData.about.images[0]} 
              alt="About us" 
              className="rounded-2xl shadow-xl object-cover w-full h-[400px]"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

