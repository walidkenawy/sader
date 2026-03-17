import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck } from 'lucide-react';

const GDPRBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:right-12 md:w-[450px]"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-zinc-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-600" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-serif text-zinc-900">Privacy & Cookies</h3>
                <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider font-light">
                  We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies in accordance with our Privacy Policy.
                </p>
                <div className="flex items-center space-x-4 pt-2">
                  <button 
                    onClick={handleAccept}
                    className="px-8 py-3 bg-zinc-900 text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg shadow-zinc-200"
                  >
                    Accept All
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GDPRBanner;
