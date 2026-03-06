import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24 border-b border-zinc-800 mb-24">
          <div>
            <h3 className="text-3xl lg:text-4xl font-serif tracking-tight mb-6">Join the <span className="italic text-zinc-400">Sedra</span> Circle</h3>
            <p className="text-zinc-400 text-sm tracking-widest uppercase leading-relaxed max-w-md">
              Subscribe to receive exclusive offers, early access to new collections, and fragrance insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-zinc-700 py-4 text-[10px] tracking-[0.3em] uppercase focus:border-amber-500 outline-none transition-colors"
              />
            </div>
            <button className="px-12 py-4 bg-white text-zinc-900 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-amber-600 hover:text-white transition-all duration-500">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-10">
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-[0.3em] uppercase font-light">Sedra</span>
              <span className="text-[8px] uppercase tracking-[0.6em] text-zinc-500">Perfumes</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed tracking-widest uppercase font-light">
              Sedra is a Kuwaiti luxury fragrance brand that combines oriental richness with modern elegance. We create unique scents designed to reflect personality and leave a lasting impression.
            </p>
            <div className="flex space-x-8">
              <a href="https://www.instagram.com/sedraperfumes" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-500 transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-500 transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-500 transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a href="https://www.tiktok.com/@sedraperfumeskw" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-500 transition-colors">
                <TikTokIcon size={18} />
              </a>
              <a href="https://wa.me/96599338381" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-500 transition-colors">
                <MessageCircle size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-zinc-500">Collections</h4>
            <ul className="space-y-6 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
              <li><Link to="/shop?category=Private" className="hover:text-amber-500 transition-colors">Private Collection</Link></li>
              <li><Link to="/shop?category=Luxury" className="hover:text-amber-500 transition-colors">Luxury Collection</Link></li>
              <li><Link to="/shop?category=Grande" className="hover:text-amber-500 transition-colors">Grande Collection</Link></li>
              <li><Link to="/shop?category=Femi" className="hover:text-amber-500 transition-colors">Femi Collection</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-zinc-500">Support</h4>
            <ul className="space-y-6 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-amber-500 transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-amber-500 transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-zinc-500">Contact</h4>
            <ul className="space-y-8 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
              <li className="flex items-start space-x-4">
                <MapPin size={16} strokeWidth={1.5} className="text-amber-600 shrink-0 mt-0.5" />
                <span>Kuwait City, Kuwait</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={16} strokeWidth={1.5} className="text-amber-600 shrink-0" />
                <span>+965 9933 8381</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={16} strokeWidth={1.5} className="text-amber-600 shrink-0" />
                <span>info@sedraperfumes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <p className="text-[8px] uppercase tracking-[0.5em] text-zinc-600 font-bold">
            © {new Date().getFullYear()} Sedra Perfumes. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_logo%2C_revised_2016.svg" alt="Stripe" className="h-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" alt="Discover" className="h-3 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
