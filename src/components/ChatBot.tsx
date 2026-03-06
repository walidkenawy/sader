import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2, User, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../data/products';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Sedra Perfumes. I am your personal fragrance concierge. How can I assist you in finding your signature scent today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      
      const productContext = PRODUCTS.map(p => 
        `${p.name} (${p.category} Collection): ${p.description}. Price: ${p.price} ${p.currency}. Notes: Top(${p.notes.top.join(', ')}), Heart(${p.notes.heart.join(', ')}), Base(${p.notes.base.join(', ')})`
      ).join('\n\n');

      const systemInstruction = `
        You are the "Sedra Fragrance Concierge", a luxury AI assistant for Sedra Perfumes, a high-end Kuwaiti fragrance brand.
        Your tone is sophisticated, helpful, and elegant.
        
        Context about Sedra Perfumes:
        - Born in Kuwait, blending Oriental richness with modern Western elegance.
        - Collections: Private (Most exclusive), Luxury (Grand occasions), Grande (Daily sophistication), Femi (Hair & Body mists).
        
        Product Catalog:
        ${productContext}
        
        Guidelines:
        - Help users find perfumes based on their preferences (notes, occasion, mood).
        - If they ask about a specific product, provide details from the catalog.
        - Encourage them to explore the collections.
        - Keep responses concise but luxurious.
        - If you don't know something about a specific order, ask them to contact support at info@sedraperfumes.com.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: systemInstruction }] },
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
      });

      const botText = response.text || "I apologize, but I am having trouble connecting to my olfactory senses at the moment. Please try again shortly.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error('ChatBot Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but I encountered an error. Please ensure your connection is stable or contact our support team." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-zinc-900 text-white rounded-full shadow-2xl flex items-center justify-center border border-white/10 hover:bg-amber-600 transition-colors duration-500"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-[100] w-[90vw] sm:w-[400px] h-[600px] bg-white rounded-3xl shadow-2xl border border-zinc-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-zinc-900 text-white flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 border border-amber-500/20">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-serif uppercase tracking-widest">Sedra Concierge</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-zinc-400 uppercase tracking-tighter">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[#FAFAFA]">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-zinc-900 text-white' : 'bg-amber-100 text-amber-700'}`}>
                      {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-zinc-900 text-white rounded-tr-none' : 'bg-white text-zinc-700 shadow-sm border border-zinc-100 rounded-tl-none'}`}>
                      {m.text}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Bot size={14} />
                    </div>
                    <div className="p-4 bg-white rounded-2xl rounded-tl-none shadow-sm border border-zinc-100">
                      <Loader2 size={16} className="animate-spin text-amber-600" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-zinc-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our fragrances..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 pr-14 text-sm focus:outline-none focus:border-amber-600 transition-all placeholder:text-zinc-400 font-light"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center hover:bg-amber-600 transition-all disabled:opacity-50 disabled:hover:bg-zinc-900"
                >
                  <Send size={16} />
                </button>
              </form>
              <p className="text-[9px] text-center text-zinc-400 mt-4 uppercase tracking-widest">
                Powered by Sedra Intelligence
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
