import React from 'react';
import { motion } from 'motion/react';
import { RefreshCcw, ShieldCheck, Clock, Mail, Scale, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Returns: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <Helmet>
        <title>Returns & Exchanges | Sedra Perfumes</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.8em] text-amber-600 font-bold mb-6 block">Customer Care</span>
          <h1 className="text-5xl font-serif text-zinc-900 mb-8">Returns & <span className="italic text-zinc-400">Exchanges</span></h1>
          <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase leading-relaxed font-light">
            Our policy is designed to protect your safety while respecting your consumer rights.
          </p>
        </div>

        <div className="space-y-16">
          {/* EU & UK Standards Section */}
          <div className="bg-zinc-900 text-white p-12 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 blur-[80px] rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-amber-500">
                  <Scale size={24} />
                </div>
                <h2 className="text-xl font-serif">EU & UK Consumer Rights</h2>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed tracking-widest uppercase font-light mb-8">
                In accordance with the EU Consumer Rights Directive and the UK Consumer Rights Act 2015, customers in the European Union and the United Kingdom have specific protections when shopping online.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500 mb-4">14-Day Cooling-Off Period</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed uppercase tracking-wider font-light">
                    You have the right to cancel your order within 14 days of receiving your goods without giving any reason. To exercise this right, the item must remain in its original, unopened condition.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500 mb-4">Hygiene Exception</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed uppercase tracking-wider font-light">
                    Please note that perfumes are classified as "sealed goods" for health protection and hygiene reasons. Once the protective cellophane seal is broken or the product is used, the 14-day right to cancel is voided.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* General Policy */}
          <div className="bg-zinc-50 p-12 rounded-[2rem] border border-zinc-100">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-xl font-serif text-zinc-900">Our Standard Policy</h2>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-3">Damaged or Faulty Items</h4>
                <p className="text-xs text-zinc-500 leading-relaxed tracking-widest uppercase font-light">
                  If your product arrives damaged or defective, you have a 30-day right to a full refund or replacement under UK law. Please contact us within 48 hours of delivery with photographic evidence of the damage.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-3">Return Shipping</h4>
                <p className="text-xs text-zinc-500 leading-relaxed tracking-widest uppercase font-light">
                  Unless the item is faulty or not as described, the cost of return shipping is the responsibility of the customer. We recommend using a tracked service as we cannot be held responsible for items lost in transit.
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-3">Refund Process</h4>
                <p className="text-xs text-zinc-500 leading-relaxed tracking-widest uppercase font-light">
                  Once we receive and inspect your return, we will process your refund within 14 days. The refund will be issued to the original payment method used at checkout.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border border-zinc-100 rounded-3xl text-center">
              <Clock size={24} className="text-amber-600 mx-auto mb-6" />
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-4">Timeframe</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider font-light">
                14 Days for change of mind (Sealed items only)
              </p>
            </div>
            <div className="p-10 border border-zinc-100 rounded-3xl text-center">
              <AlertCircle size={24} className="text-amber-600 mx-auto mb-6" />
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-4">Faulty Goods</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider font-light">
                30 Days for defective or damaged items
              </p>
            </div>
            <div className="p-10 border border-zinc-100 rounded-3xl text-center">
              <Mail size={24} className="text-amber-600 mx-auto mb-6" />
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 mb-4">Contact</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed tracking-wider font-light lowercase">
                care@sedraperfumes.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
