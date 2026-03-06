import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Wind, Heart, Trees } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white z-[101] shadow-2xl rounded-2xl"
          >
            <div className="relative flex flex-col md:flex-row h-full">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-zinc-900 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Image Section */}
              <div className="w-full md:w-1/2 bg-[#F9F9F9] flex items-center justify-center p-12">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[400px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-bold mb-4">
                  {product.category} Collection
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif text-zinc-900 mb-6 tracking-tight">
                  {product.name}
                </h2>
                
                <div className="text-2xl font-light text-zinc-900 mb-8 tracking-widest">
                  {product.price.toFixed(3)} {product.currency}
                </div>

                <p className="text-zinc-500 leading-relaxed text-sm mb-10 font-light line-clamp-3">
                  {product.description}
                </p>

                {/* Scent Profile Mini */}
                {product.notes && (
                  <div className="grid grid-cols-3 gap-4 mb-10 border-y border-zinc-100 py-6">
                    <div className="text-center">
                      <Wind size={14} className="mx-auto text-amber-600 mb-2" />
                      <span className="text-[8px] uppercase tracking-widest font-bold text-zinc-400 block">Top</span>
                    </div>
                    <div className="text-center">
                      <Heart size={14} className="mx-auto text-amber-600 mb-2" />
                      <span className="text-[8px] uppercase tracking-widest font-bold text-zinc-400 block">Heart</span>
                    </div>
                    <div className="text-center">
                      <Trees size={14} className="mx-auto text-amber-600 mb-2" />
                      <span className="text-[8px] uppercase tracking-widest font-bold text-zinc-400 block">Base</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => {
                      addToCart(product);
                      onClose();
                    }}
                    className="w-full py-5 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold shadow-xl hover:bg-amber-600 transition-all duration-500 flex items-center justify-center space-x-4"
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full py-5 border border-zinc-100 text-zinc-400 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-zinc-50 transition-all duration-500"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
