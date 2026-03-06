import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
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
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col">
                <h1 className="text-xl font-serif tracking-[0.3em] uppercase font-light text-zinc-900">Sedra</h1>
                <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-500 -mt-1">Perfumes</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-zinc-900">
                <X size={32} />
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
