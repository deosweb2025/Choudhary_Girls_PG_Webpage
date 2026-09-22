import { siteData } from "../data/siteData";

const FloatingCallButton = () => {
  return (
    <a 
      href={`tel:${siteData.contact.phone}`} 
      aria-label="Call us"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center group"
    >
      <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
      <span className="hidden group-hover:block ml-2 font-bold whitespace-nowrap">Call Now</span>
    </a>
  );
};

export default FloatingCallButton;

