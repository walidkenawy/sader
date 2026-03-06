import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 text-center px-6">
        <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-8 text-zinc-300">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-serif text-zinc-900 mb-4">Your cart is empty</h2>
        <p className="text-zinc-500 mb-12 max-w-md mx-auto">Looks like you haven't added any fragrances to your cart yet. Explore our collections to find your signature scent.</p>
        <Link to="/shop" className="px-12 py-5 bg-zinc-900 text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg">
          Start Shopping
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
          <span className="text-zinc-900">Shopping Cart</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-serif text-zinc-900 mb-20 tracking-tight">Your <span className="italic font-light text-zinc-400">Cart</span></h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-12">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center space-x-8 pb-12 border-b border-zinc-100 relative group"
                >
                  <div className="w-32 h-40 bg-[#F9F9F9] overflow-hidden p-6 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="max-h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-amber-600 font-bold mb-2 block">{item.category} Collection</span>
                    <Link to={`/product/${item.id}`}>
                      <h4 className="text-xl lg:text-2xl font-serif text-zinc-900 mb-2 hover:text-amber-700 transition-colors truncate tracking-wide">{item.name}</h4>
                    </Link>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-6 font-bold">{item.size}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-zinc-100 px-4 py-2 bg-white">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors"><Minus size={14} /></button>
                        <span className="w-10 text-center font-bold text-sm text-zinc-900">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors"><Plus size={14} /></button>
                      </div>
                      <div className="text-lg font-light text-zinc-900 tracking-widest">
                        {(item.price * item.quantity).toFixed(3)} {item.currency}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-0 right-0 p-2 text-zinc-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} strokeWidth={1.5} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#F9F9F9] p-10 sticky top-32">
              <h3 className="text-2xl font-serif text-zinc-900 mb-10 pb-6 border-b border-zinc-200 tracking-tight">Order Summary</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-xs uppercase tracking-widest">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="font-bold text-zinc-900">{totalPrice.toFixed(3)} KWD</span>
                </div>
                <div className="flex justify-between text-xs uppercase tracking-widest">
                  <span className="text-zinc-500">Shipping</span>
                  <span className="text-amber-600 font-bold">Complimentary</span>
                </div>
                <div className="pt-8 border-t border-zinc-200 flex justify-between items-end">
                  <span className="text-zinc-900 font-bold uppercase tracking-[0.2em] text-[10px]">Total Amount</span>
                  <span className="text-3xl font-light text-zinc-900 tracking-widest">{totalPrice.toFixed(3)} KWD</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full py-6 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold shadow-xl hover:bg-amber-600 transition-all duration-500 flex items-center justify-center space-x-4"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </Link>

              <div className="mt-12 space-y-6">
                <p className="text-[9px] text-zinc-400 text-center uppercase tracking-[0.3em] font-bold">Secure Checkout Guaranteed</p>
                <div className="flex justify-center items-center space-x-6 opacity-30 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-2.5" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" referrerPolicy="no-referrer" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3.5" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
