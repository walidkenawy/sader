import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, CreditCard, Truck, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useCurrency } from '../context/CurrencyContext';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-40 pb-24 text-center px-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 size={48} />
        </motion.div>
        <h2 className="text-3xl lg:text-5xl font-serif text-zinc-900 mb-4">Order Confirmed</h2>
        <p className="text-zinc-500 mb-12 max-w-md mx-auto">Thank you for your purchase. Your order #AURA-98231 has been received and is being prepared for delivery.</p>
        <Link to="/" className="px-12 py-5 bg-zinc-900 text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg">
          Return Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 text-center px-6">
        <h2 className="text-3xl font-serif text-zinc-900 mb-6">Your cart is empty</h2>
        <Link to="/shop" className="px-10 py-4 bg-zinc-900 text-white text-[10px] uppercase tracking-widest font-bold rounded-full">
          Back to Shop
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
          <Link to="/cart" className="hover:text-zinc-900 transition-colors">Cart</Link>
          <ChevronRight size={12} />
          <span className="text-zinc-900">Checkout</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-serif text-zinc-900 mb-20 tracking-tight">Checkout</h1>

        <form onSubmit={handleCheckout} className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Form */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h3 className="text-2xl font-serif text-zinc-900 mb-10 flex items-center space-x-4">
                <span className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <span>Shipping Information</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">First Name</label>
                  <input required type="text" className="w-full bg-[#F9F9F9] border-none py-5 px-8 text-sm focus:ring-1 focus:ring-amber-500 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Last Name</label>
                  <input required type="text" className="w-full bg-[#F9F9F9] border-none py-5 px-8 text-sm focus:ring-1 focus:ring-amber-500 transition-all outline-none" />
                </div>
                <div className="sm:col-span-2 space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Email Address</label>
                  <input required type="email" className="w-full bg-[#F9F9F9] border-none py-5 px-8 text-sm focus:ring-1 focus:ring-amber-500 transition-all outline-none" />
                </div>
                <div className="sm:col-span-2 space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Shipping Address</label>
                  <input required type="text" className="w-full bg-[#F9F9F9] border-none py-5 px-8 text-sm focus:ring-1 focus:ring-amber-500 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">City</label>
                  <input required type="text" className="w-full bg-[#F9F9F9] border-none py-5 px-8 text-sm focus:ring-1 focus:ring-amber-500 transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Phone Number</label>
                  <input required type="tel" className="w-full bg-[#F9F9F9] border-none py-5 px-8 text-sm focus:ring-1 focus:ring-amber-500 transition-all outline-none" />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-zinc-900 mb-10 flex items-center space-x-4">
                <span className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <span>Shipping Method</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="relative flex items-center p-8 bg-[#F9F9F9] cursor-pointer border border-transparent has-[:checked]:border-amber-500 transition-all">
                  <input type="radio" name="shipping" className="sr-only" defaultChecked />
                  <div className="w-10 h-10 mr-6 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg" alt="DHL" className="max-h-full" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900">DHL Express</span>
                    <span className="text-[8px] uppercase tracking-[0.1em] text-zinc-400">2-4 Business Days</span>
                  </div>
                </label>
                <label className="relative flex items-center p-8 bg-[#F9F9F9] cursor-pointer border border-transparent has-[:checked]:border-amber-500 transition-all">
                  <input type="radio" name="shipping" className="sr-only" />
                  <div className="w-10 h-10 mr-6 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/FedEx_Express_logo.svg" alt="FedEx" className="max-h-full" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900">FedEx Priority</span>
                    <span className="text-[8px] uppercase tracking-[0.1em] text-zinc-400">3-5 Business Days</span>
                  </div>
                </label>
                <label className="relative flex items-center p-8 bg-[#F9F9F9] cursor-pointer border border-transparent has-[:checked]:border-amber-500 transition-all">
                  <input type="radio" name="shipping" className="sr-only" />
                  <div className="w-10 h-10 mr-6 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/02/PostNL_logo.svg" alt="PostNL" className="max-h-full" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900">PostNL (EU)</span>
                    <span className="text-[8px] uppercase tracking-[0.1em] text-zinc-400">3-6 Business Days</span>
                  </div>
                </label>
                <label className="relative flex items-center p-8 bg-[#F9F9F9] cursor-pointer border border-transparent has-[:checked]:border-amber-500 transition-all">
                  <input type="radio" name="shipping" className="sr-only" />
                  <div className="w-10 h-10 mr-6 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Royal_Mail_logo.svg/1200px-Royal_Mail_logo.svg.png" alt="Royal Mail" className="max-h-full" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900">Royal Mail (UK)</span>
                    <span className="text-[8px] uppercase tracking-[0.1em] text-zinc-400">3-5 Business Days</span>
                  </div>
                </label>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-serif text-zinc-900 mb-10 flex items-center space-x-4">
                <span className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <span>Payment Method</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="relative flex items-center p-8 bg-[#F9F9F9] cursor-pointer border border-transparent has-[:checked]:border-amber-500 transition-all">
                  <input type="radio" name="payment" className="sr-only" defaultChecked />
                  <CreditCard className="text-zinc-400 mr-6" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900">Credit / Debit Card</span>
                </label>
                <label className="relative flex items-center p-8 bg-[#F9F9F9] cursor-pointer border border-transparent has-[:checked]:border-amber-500 transition-all">
                  <input type="radio" name="payment" className="sr-only" />
                  <Truck className="text-zinc-400 mr-6" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900">Cash on Delivery</span>
                </label>
                <label className="relative flex items-center p-8 bg-[#F9F9F9] cursor-pointer border border-transparent has-[:checked]:border-amber-500 transition-all">
                  <input type="radio" name="payment" className="sr-only" />
                  <div className="w-6 h-6 mr-6 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="max-h-full" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900">PayPal</span>
                </label>
                <label className="relative flex items-center p-8 bg-[#F9F9F9] cursor-pointer border border-transparent has-[:checked]:border-amber-500 transition-all">
                  <input type="radio" name="payment" className="sr-only" />
                  <div className="w-6 h-6 mr-6 flex items-center justify-center">
                    <span className="text-amber-600 font-black text-xs">PayU</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900">PayU</span>
                </label>
              </div>
            </section>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#F9F9F9] p-10 sticky top-32">
              <h3 className="text-2xl font-serif text-zinc-900 mb-10 pb-6 border-b border-zinc-200 tracking-tight">Order Summary</h3>
              
              <div className="space-y-6 mb-10 max-h-60 overflow-y-auto pr-2 no-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-16 bg-white p-2 flex items-center justify-center shrink-0">
                        <img src={item.image} alt={item.name} className="max-h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-900 font-bold uppercase tracking-widest truncate max-w-[120px]">{item.name}</span>
                        <span className="text-[9px] text-zinc-400 uppercase tracking-widest">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="text-xs font-light text-zinc-900 tracking-widest">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6 mb-10 pt-6 border-t border-zinc-200">
                <div className="flex justify-between text-[10px] uppercase tracking-widest">
                  <span className="text-zinc-500">Subtotal</span>
                  <span className="font-bold text-zinc-900">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-[10px] uppercase tracking-widest">
                  <span className="text-zinc-500">Shipping</span>
                  <span className="text-amber-600 font-bold">Complimentary</span>
                </div>
                <div className="pt-8 border-t border-zinc-200 flex justify-between items-end">
                  <span className="text-zinc-900 font-bold uppercase tracking-[0.2em] text-[10px]">Total Amount</span>
                  <span className="text-3xl font-light text-zinc-900 tracking-widest">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <button 
                disabled={isProcessing}
                type="submit"
                className="w-full py-6 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold shadow-xl hover:bg-amber-600 transition-all duration-500 flex items-center justify-center space-x-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <ShieldCheck size={18} />
                    <span>Complete Order</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
