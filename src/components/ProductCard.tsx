import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Share2, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion, AnimatePresence, useInView } from 'motion/react';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  const shareUrl = `${window.location.origin}/product/${product.id}`;
  const shareText = `Check out ${product.name} at Sedra Perfumes!`;

  const shareLinks = [
    { icon: <Facebook size={14} />, label: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { icon: <Twitter size={14} />, label: 'Twitter', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { icon: <MessageCircle size={14} />, label: 'WhatsApp', url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}` },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="relative aspect-[4/5] bg-[#F9F9F9] overflow-hidden mb-8 flex items-center justify-center transition-all duration-700 rounded-2xl group-hover:shadow-2xl group-hover:shadow-zinc-200/50 group-hover:-translate-y-1">
          <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center p-10 sm:p-14 relative">
            {product.video ? (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src={product.video} type="video/mp4" />
              </video>
            ) : null}
            <img 
              src={product.image} 
              alt={product.name} 
              className={`max-h-full object-contain transition-transform duration-1000 group-hover:scale-110 ${product.video ? 'group-hover:opacity-0' : ''}`}
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
          <div className="absolute inset-x-4 bottom-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2 z-20">
            <button 
              onClick={() => setIsQuickViewOpen(true)}
              className="w-full py-3.5 bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] uppercase tracking-[0.4em] font-bold flex items-center justify-center space-x-2 hover:bg-zinc-900 hover:text-white transition-all rounded-xl shadow-xl"
            >
              <Eye size={14} />
              <span>Quick View</span>
            </button>
            <button 
              onClick={() => addToCart(product)}
              className="w-full py-4 bg-zinc-900/95 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.4em] font-bold flex items-center justify-center space-x-2 hover:bg-amber-600 transition-all rounded-xl shadow-xl"
            >
              <ShoppingBag size={14} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        <div className="text-center px-4">
          <span className="text-[9px] uppercase tracking-[0.5em] text-amber-600 mb-3 block font-bold">{product.category}</span>
          <Link to={`/product/${product.id}`}>
            <h4 className="text-lg sm:text-xl font-serif text-zinc-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-1 tracking-tight leading-tight">{product.name}</h4>
          </Link>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-8 h-px bg-zinc-200" />
            <p className="text-sm font-light text-zinc-500 tracking-[0.2em]">
              {product.price.toFixed(3)} {product.currency}
            </p>
            <span className="w-8 h-px bg-zinc-200" />
          </div>
        </div>
      </motion.div>

      <QuickViewModal 
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};

export default ProductCard;
