import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-40 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.8em] text-amber-600 font-bold mb-6 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-serif mb-8 uppercase tracking-tight text-zinc-900"
          >
            Contact <span className="italic font-light text-zinc-400">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Have a question about our collections or need assistance with an order? Our dedicated team is here to help you experience the art of scent.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-amber-600 border border-zinc-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">Email Us</h4>
                  <p className="text-zinc-500 font-light text-sm">info@sedraperfumes.com</p>
                  <p className="text-zinc-500 font-light text-sm">admin@sedraperfumes.eu</p>
                  <p className="text-zinc-500 font-light text-sm">admin@sedraperfumes.co.uk</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-amber-600 border border-zinc-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">Call Us</h4>
                  <p className="text-zinc-500 font-light">+965 2222 3333</p>
                  <p className="text-zinc-500 font-light">+48 739 256 482</p>
                  <p className="text-zinc-500 font-light">+44 7700 183296</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-amber-600 border border-zinc-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">Kuwait Boutique</h4>
                    <p className="text-zinc-500 font-light text-sm">Al Hamra Tower, Floor 45</p>
                    <p className="text-zinc-500 font-light text-sm">Kuwait City, Kuwait</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">UK Boutique</h4>
                    <p className="text-zinc-500 font-light text-sm">5 Brayford Square</p>
                    <p className="text-zinc-500 font-light text-sm">London, E1 0SG</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">Kington Address</h4>
                    <p className="text-zinc-500 font-light text-sm">61 Bridge Street</p>
                    <p className="text-zinc-500 font-light text-sm">Kington, HR5 3DJ</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-amber-600 border border-zinc-100 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">Office Hours</h4>
                  <p className="text-zinc-500 font-light text-sm">Monday—Friday: 9:00AM–6:00PM</p>
                  <p className="text-zinc-500 font-light text-[10px] uppercase tracking-widest mt-1">Excluding Public Holidays</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 bg-zinc-950 rounded-2xl text-white relative overflow-hidden group"
            >
              <div className="relative z-10">
                <MessageSquare className="text-amber-500 mb-6" size={32} strokeWidth={1} />
                <h3 className="text-xl font-serif mb-4 uppercase tracking-wider">Live Concierge</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
                  Need immediate assistance? Our fragrance experts are available for a live consultation.
                </p>
                <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500 hover:text-white transition-colors">
                  Start Chatting
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700" />
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-50 p-8 lg:p-12 rounded-3xl border border-zinc-100"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-amber-600 hover:border-zinc-300 transition-all duration-300 font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-amber-600 hover:border-zinc-300 transition-all duration-300 font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What can we help you with?"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-amber-600 hover:border-zinc-300 transition-all duration-300 font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 ml-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-amber-600 hover:border-zinc-300 transition-all duration-300 font-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full md:w-auto px-12 py-5 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full overflow-hidden transition-all duration-500 hover:bg-amber-600"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>Send Message</span>
                    <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
