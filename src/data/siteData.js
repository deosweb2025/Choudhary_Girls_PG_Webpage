import heroRoom from '../assets/hero_room.jpg';
import heroLounge from '../assets/hero_lounge.jpg';
import heroDining from '../assets/hero_dining.jpg';
import gallery1 from '../assets/gallery_1.jpg';
import gallery2 from '../assets/gallery_2.jpg';
import gallery3 from '../assets/gallery_3.jpg';

export const siteData = {
  company: {
    name: "Choudhary Girls PG",
    owner: "BINAY CHOUDHURY",
    tagline: "Premium & Secure Girls Accommodation in Kolkata",
    description: "Experience luxury, safety, and comfort at Choudhary Girls PG. Designed specifically for female students and working professionals, our modern facility offers a perfect blend of premium living and a vibrant community.",
    logo: "Choudhary Girls PG",
  },
  contact: {
    phone: "9007032701",
    email: "contact@choudharygirlspg.com",
    whatsapp: "9007032701",
  },
  location: {
    address: "Haldirams, VIP Rd, Dhalipara, Tegharia, Rajarhat, Kolkata, West Bengal 700052",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.456!2d88.435!3d22.625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e2!2sHaldiram%27s!5e0!3m2!1sen!2sin!4v1", // Dummy embed url, but sufficient for design
  },
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  hero: {
    eyebrow: "Welcome to",
    title: "Choudhary Girls PG",
    description: "Premium, safe, and luxurious accommodation for women in the heart of Rajarhat, Kolkata.",
    primaryCTA: "Book a Room",
    secondaryCTA: "View Gallery",
    images: [heroRoom, heroLounge, heroDining],
  },
  about: {
    title: "A Home Away From Home",
    description: "At Choudhary Girls PG, we understand the importance of a safe and comfortable environment. Managed by Binay Choudhary, our hostel is thoughtfully designed to cater to the modern needs of students and working women. From nutritious meals to high-speed internet and round-the-clock security, we ensure that your stay is completely hassle-free.",
    image: gallery2,
  },
  services: [
    {
      title: "24/7 Security",
      description: "Round-the-clock CCTV surveillance and professional security personnel.",
      icon: "ShieldCheck",
    },
    {
      title: "Nutritious Meals",
      description: "Hygienic and delicious home-cooked meals served three times a day.",
      icon: "Utensils",
    },
    {
      title: "High-Speed Wi-Fi",
      description: "Uninterrupted, high-speed internet access for your study and work needs.",
      icon: "Wifi",
    },
    {
      title: "Housekeeping",
      description: "Daily room cleaning and maintenance for a spotless living space.",
      icon: "Sparkles",
    },
    {
      title: "Laundry Services",
      description: "In-house washing machines and laundry facilities available.",
      icon: "Shirt",
    },
    {
      title: "Air Conditioned",
      description: "Spacious, well-ventilated, and fully air-conditioned rooms.",
      icon: "Wind",
    },
  ],
  gallery: [
    { src: gallery1, alt: "Luxury Room" },
    { src: gallery2, alt: "Study Lounge" },
    { src: gallery3, alt: "Premium Twin Room" },
    { src: heroRoom, alt: "Premium Bedroom" },
    { src: heroLounge, alt: "Common Area" },
    { src: heroDining, alt: "Dining Area" },
  ],
};
