import { siteData } from "../data/siteData";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-2xl text-blue-900 tracking-tighter">
              {siteData.company.logo}
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex">
            <a href={`tel:${siteData.contact.phone}`} className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors">
              Call {siteData.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

