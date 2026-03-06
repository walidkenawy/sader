import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronRight, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const Wishlist: React.FC = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="pt-40 pb-24 text-center px-6">
        <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-8 text-zinc-300">
          <Heart size={48} strokeWidth={1} />
        </div>
        <h2 className="text-3xl font-serif text-zinc-900 mb-4 tracking-tight">Your wishlist is empty</h2>
        <p className="text-zinc-500 mb-12 max-w-md mx-auto font-light leading-relaxed">
          Save your favorite fragrances to your wishlist and they'll appear here for easy access.
        </p>
        <Link to="/shop" className="px-12 py-5 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold shadow-xl hover:bg-amber-600 transition-all duration-500">
          Explore Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-12">
          <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-zinc-900">Wishlist</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h1 className="text-5xl lg:text-7xl font-serif text-zinc-900 tracking-tight">Your <span className="italic font-light text-zinc-400">Wishlist</span></h1>
            <p className="text-zinc-500 mt-4 text-sm uppercase tracking-[0.2em] font-bold">{wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'} Saved</p>
          </div>
          <Link to="/shop" className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 hover:text-amber-600 transition-colors border-b border-zinc-900 pb-1">
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {wishlist.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
