import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const { currency, setCurrency, supportedCurrencies, isLoading } = useCurrency();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Cinematics', path: '/cinematics' },
    { name: 'Private Collection', path: '/shop?category=Private' },
    { name: 'Grande Collection', path: '/shop?category=Grande' },
    { name: 'Luxury Collection', path: '/shop?category=Luxury' },
    { name: 'Femi Collection', path: '/shop?category=Femi' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-lg py-3 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 -ml-2 text-zinc-900"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.slice(0, 4).map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'} hover:text-amber-600`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
          <h1 className={`text-2xl lg:text-3xl font-serif tracking-[0.4em] uppercase font-light transition-all duration-500 ${isScrolled ? 'text-zinc-900' : 'text-white'} group-hover:text-amber-600`}>
            Sedra
          </h1>
          <span className={`text-[8px] lg:text-[10px] uppercase tracking-[0.5em] transition-all duration-500 ${isScrolled ? 'text-zinc-500' : 'text-white/70'} -mt-1`}>
            Perfumes
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center space-x-1 sm:space-x-4">
          {/* Currency Selector */}
          <div className="hidden md:flex items-center mr-2">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              disabled={isLoading}
              className={`bg-transparent border-none text-[10px] uppercase tracking-widest font-bold focus:ring-0 cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'} hover:text-amber-600 disabled:opacity-50`}
            >
              {supportedCurrencies.map(c => (
                <option key={c} value={c} className="text-zinc-900 bg-white">{c}</option>
              ))}
            </select>
          </div>

          <button className={`p-2 transition-colors duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'} hover:text-amber-600`}>
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className={`hidden sm:block p-2 transition-colors duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'} hover:text-amber-600`}>
            <User size={20} strokeWidth={1.5} />
          </button>
          <Link to="/wishlist" className={`p-2 transition-colors duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'} hover:text-amber-600 relative`}>
            <Heart size={20} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className={`p-2 transition-colors duration-300 ${isScrolled ? 'text-zinc-900' : 'text-white'} hover:text-amber-600 relative`}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-amber-600 text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55]"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white z-[60] p-8 flex flex-col overflow-y-auto shadow-2xl"
            >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <h1 className="text-xl font-serif tracking-[0.3em] uppercase font-light text-zinc-900">Sedra</h1>
                <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-500 -mt-1">Perfumes</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm border border-zinc-100"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-xl font-serif tracking-wide text-zinc-900 hover:text-amber-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Currency Selector */}
            <div className="mt-12 pt-12 border-t border-zinc-100">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 mb-6 block">Select Currency</span>
              <div className="grid grid-cols-3 gap-3">
                {supportedCurrencies.map(c => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`py-3 text-[10px] font-bold tracking-widest rounded-xl border transition-all ${currency === c ? 'bg-zinc-900 text-white border-zinc-900 shadow-lg' : 'bg-zinc-50 text-zinc-500 border-zinc-100 hover:border-zinc-200'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </nav>
  );
};

export default Navbar;
