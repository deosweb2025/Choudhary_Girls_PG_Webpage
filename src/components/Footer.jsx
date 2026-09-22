import { siteData } from "../data/siteData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            {siteData.company.name}
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Facilities</a>
            <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
          </div>
        </div>
        <div className="text-center md:flex justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteData.company.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed by <a href="https://www.teamdeoskolkata.in/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-red-700 transition-colors duration-300 ml-1">Digital Exposure Online Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

