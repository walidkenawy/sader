import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Share2, Facebook, Twitter, MessageCircle, Quote, X, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { formatPrice } = useCurrency();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const shareUrl = `${window.location.origin}/product/${product.id}`;
  const shareText = `Check out ${product.name} at Sedra Perfumes!`;

  const shareLinks = [
    { icon: <Facebook size={14} />, label: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { icon: <Twitter size={14} />, label: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { icon: <MessageCircle size={14} />, label: 'WhatsApp', url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}` },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <>
      <motion.div 
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group"
      >
        <div className="relative aspect-[4/5] bg-[#F9F9F9] overflow-hidden mb-8 flex items-center justify-center transition-all duration-700 rounded-2xl group-hover:shadow-2xl group-hover:shadow-zinc-200/50 group-hover:-translate-y-1">
          <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center p-10 sm:p-14 relative">
            {product.video ? (
              <motion.video
                style={{ y }}
                ref={videoRef}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              >
                <source src={product.video} type="video/mp4" />
              </motion.video>
            ) : null}
            <motion.img 
              style={{ y }}
              src={product.image} 
              alt={product.name} 
              className={`max-h-full object-contain transition-all duration-1000 group-hover:scale-110 ${product.video ? 'group-hover:opacity-0 group-hover:scale-125' : ''}`}
              referrerPolicy="no-referrer"
            />
          </Link>
          
          {/* Share Button */}
          <div className="absolute top-5 left-5 z-10 flex flex-col gap-3">
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsShareOpen(!isShareOpen);
                }}
                className={`p-3 rounded-full transition-all duration-500 ${
                  isShareOpen 
                    ? 'bg-zinc-900 text-white shadow-lg' 
                    : 'bg-white/90 backdrop-blur-sm text-zinc-400 hover:text-zinc-900 hover:bg-white shadow-sm'
                }`}
              >
                <Share2 size={15} />
              </button>
              
              <AnimatePresence>
                {isShareOpen && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full ml-3 top-0 flex items-center gap-2 bg-white/95 backdrop-blur-md p-2 rounded-full shadow-2xl border border-zinc-100"
                  >
                    {shareLinks.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-amber-600 transition-colors"
                        title={link.label}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {product.isNew && (
              <span className="bg-amber-600 text-white text-[8px] uppercase tracking-[0.4em] px-4 py-2 font-bold rounded-full shadow-lg shadow-amber-600/20">New</span>
            )}
          </div>
 
          {/* Wishlist Button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            className={`absolute top-5 right-5 p-3 rounded-full transition-all duration-500 z-10 ${
              isWishlisted 
                ? 'bg-amber-600 text-white shadow-lg' 
                : 'bg-white/90 backdrop-blur-sm text-zinc-400 hover:text-amber-600 hover:bg-white shadow-sm'
            }`}
          >
            <Heart size={15} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={isWishlisted ? 0 : 1.5} />
          </button>
 
          {/* Quick Actions Overlay */}
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col gap-2 z-20">
            <button 
              onClick={() => setIsQuickViewOpen(true)}
              className="w-full py-3.5 bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] uppercase tracking-[0.4em] font-bold flex items-center justify-center space-x-2 hover:bg-zinc-900 hover:text-white transition-all rounded-xl shadow-xl active:scale-95"
            >
              <Eye size={14} />
              <span>Quick View</span>
            </button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product)}
              className="w-full py-4 bg-zinc-900/95 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.4em] font-bold flex items-center justify-center space-x-2 hover:bg-amber-600 transition-all rounded-xl shadow-xl"
            >
              <ShoppingBag size={14} />
              <span>Add to Cart</span>
            </motion.button>
          </div>
        </div>

        <div className="text-center px-4">
          <span className="text-[9px] uppercase tracking-[0.5em] text-amber-600 mb-3 block font-bold">{product.category}</span>
          <Link to={`/product/${product.id}`}>
            <h4 className="text-lg sm:text-xl font-serif text-zinc-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-1 tracking-tight leading-tight">{product.name}</h4>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="w-8 h-px bg-zinc-200" />
            <p className="text-sm font-light text-zinc-500 tracking-[0.2em]">
              {formatPrice(product.price)}
            </p>
            <span className="w-8 h-px bg-zinc-200" />
          </div>

          {product.story && (
            <div className="mt-4">
              <p className="text-[10px] text-zinc-400 italic font-serif leading-relaxed mb-3 line-clamp-2 px-4">
                "{product.story}"
              </p>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsStoryOpen(true);
                }}
                className="text-[9px] uppercase tracking-[0.3em] font-bold text-amber-600 hover:text-amber-700 transition-colors mb-4"
              >
                Read More
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Story Modal */}
      <AnimatePresence>
        {isStoryOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStoryOpen(false)}
              className="absolute inset-0 bg-zinc-900/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsStoryOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="p-10 sm:p-14 text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                    <Quote size={32} />
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-[0.6em] text-amber-600 font-bold mb-4 block">The Story of</span>
                <h3 className="text-3xl font-serif text-zinc-900 mb-8 uppercase tracking-tight">{product.name}</h3>
                
                <div className="relative">
                  <p className="text-zinc-600 leading-relaxed font-serif italic text-xl mb-10">
                    {product.story}
                  </p>
                  
                  {product.mood && (
                    <div className="flex flex-wrap justify-center gap-2 pt-8 border-t border-zinc-100">
                      {product.mood.map(m => (
                        <span key={m} className="px-4 py-1.5 bg-zinc-50 border border-zinc-100 text-[9px] uppercase tracking-widest font-bold text-zinc-400 rounded-full flex items-center">
                          <Sparkles size={10} className="mr-2 text-amber-500" />
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => setIsStoryOpen(false)}
                  className="mt-12 w-full py-5 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-2xl hover:bg-amber-600 transition-all"
                >
                  Close Story
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <QuickViewModal 
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};

export default ProductCard;
