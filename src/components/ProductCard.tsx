import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'motion/react';
import QuickViewModal from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className="relative aspect-[4/5] bg-[#F9F9F9] overflow-hidden mb-6 flex items-center justify-center transition-all duration-700">
          <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center p-8 sm:p-12">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full object-contain transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-zinc-900 text-white text-[7px] uppercase tracking-[0.3em] px-3 py-1.5 font-bold">New Arrival</span>
            )}
          </div>

          {/* Wishlist Button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-500 z-10 ${
              isWishlisted 
                ? 'bg-amber-600 text-white shadow-lg' 
                : 'bg-white/80 backdrop-blur-sm text-zinc-400 hover:text-amber-600 hover:bg-white shadow-sm'
            }`}
          >
            <Heart size={14} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={isWishlisted ? 0 : 1.5} />
          </button>

          {/* Quick Actions Overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">
            <button 
              onClick={() => setIsQuickViewOpen(true)}
              className="w-full py-3 bg-white/90 backdrop-blur-sm text-zinc-900 text-[9px] uppercase tracking-[0.3em] font-bold flex items-center justify-center space-x-2 hover:bg-zinc-100 transition-colors border-b border-zinc-100"
            >
              <Eye size={14} />
              <span>Quick View</span>
            </button>
            <button 
              onClick={() => addToCart(product)}
              className="w-full py-4 bg-zinc-900/90 backdrop-blur-sm text-white text-[9px] uppercase tracking-[0.3em] font-bold flex items-center justify-center space-x-2 hover:bg-amber-600 transition-colors"
            >
              <ShoppingBag size={14} />
              <span>Quick Add</span>
            </button>
          </div>
        </div>

        <div className="text-center px-2">
          <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-400 mb-2 block font-medium">{product.category} Collection</span>
          <Link to={`/product/${product.id}`}>
            <h4 className="text-base sm:text-lg font-serif text-zinc-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-1 tracking-wide">{product.name}</h4>
          </Link>
          <p className="text-xs sm:text-sm font-light text-zinc-500 tracking-widest">
            {product.price.toFixed(3)} {product.currency}
          </p>
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
