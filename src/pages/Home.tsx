import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const [currentPrivateVideo, setCurrentPrivateVideo] = useState(0);
  const privateVideos = ['/video_9.mp4', '/video_1.mp4', '/video_2.mp4'];

  const nextVideo = () => setCurrentPrivateVideo((prev) => (prev + 1) % privateVideos.length);
  const prevVideo = () => setCurrentPrivateVideo((prev) => (prev - 1 + privateVideos.length) % privateVideos.length);

  useEffect(() => {
    const timer = setInterval(nextVideo, 8000); // Change video every 8 seconds
    return () => clearInterval(timer);
  }, []);

  const collections = [
    { 
      id: 'Private', 
      title: 'Private Collection', 
      desc: 'A masterpiece of refined luxury, crafted for those who seek exclusivity beyond the ordinary. Each fragrance reflects timeless elegance, sophistication, and unmatched distinction.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200',
      videos: privateVideos
    },
    { 
      id: 'Luxury', 
      title: 'Luxury Collection', 
      desc: 'Sedra’s premium line for special occasions and memorable moments. Sophisticated, rich, and long-lasting scents that highlight elegance and exclusivity.',
      image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=1200',
      video: '/video_5.mp4'
    },
    { 
      id: 'Grande', 
      title: 'Grande Collection', 
      desc: 'Designed for everyday wear. Fresh, versatile, and modern fragrances that suit daily life and any casual setting.',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1200',
      video: '/video_3.mp4'
    },
    { 
      id: 'Femi', 
      title: 'Femi Collection', 
      desc: 'A dedicated line for hair and body mists. Light, refreshing, and feminine scents that add a soft touch throughout the day.',
      image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=1200',
      video: '/video_4.mp4'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source 
              src="/video_0.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8"
          >
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.8em] font-bold text-[#D4AF37]">
              Exclusivity Beyond the Ordinary
            </span>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-8xl lg:text-[180px] font-serif mb-4 leading-[0.8] tracking-tight uppercase font-bold text-white">
              Nero
            </h2>
            <h3 className="text-2xl lg:text-4xl font-light text-[#D4AF37] tracking-[0.4em] uppercase mb-12">
              Grand Collection
            </h3>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
          >
            <Link to="/shop" className="group relative px-12 py-5 bg-white text-zinc-900 text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden rounded-full transition-all duration-500 hover:bg-[#D4AF37] hover:text-white">
              <span className="relative z-10">Explore Collections</span>
            </Link>
            <Link to="/about" className="px-12 py-5 border border-white/30 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-zinc-900 transition-all duration-500 rounded-full">
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/50 font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Brand Story Block */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl bg-white flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain p-8 transition-transform duration-[2s] hover:scale-110"
              >
                <source 
                  src="/video_8.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-amber-50/50 -z-10 hidden lg:block" />
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-amber-600 font-bold mb-8 block">About Us</span>
            <h2 className="text-5xl lg:text-7xl font-serif text-zinc-900 mb-10 leading-[1.1] uppercase tracking-wider">SEDRA <br /> <span className="italic font-light text-zinc-400">PERFUMES</span></h2>
            <p className="text-zinc-600 leading-relaxed mb-10 text-lg font-light">
              Sedra is a Kuwaiti luxury fragrance brand that combines oriental richness with modern elegance. The brand creates unique scents designed to reflect personality and leave a lasting impression.
            </p>
            <p className="text-zinc-500 leading-relaxed mb-12 font-light">
              Each fragrance is a masterpiece of refined luxury, crafted for those who seek exclusivity beyond the ordinary. Timeless elegance, sophistication, and unmatched distinction are at the heart of everything we create.
            </p>
            <Link to="/about" className="inline-block px-12 py-5 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-amber-600 transition-all duration-500">
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Collection Sections */}
      {collections.map((col, idx) => (
        <section key={col.id} className={`py-32 px-6 ${idx % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
              <div className={idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] uppercase tracking-[0.5em] text-amber-600 font-bold mb-4 block"
                >
                  {col.title}
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl lg:text-6xl font-serif text-zinc-900 mb-8 uppercase tracking-tight"
                >
                  {col.title.split(' ')[0]} <span className="italic font-light text-zinc-400">{col.title.split(' ')[1]}</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-zinc-500 max-w-xl text-base font-light leading-relaxed mb-12"
                >
                  {col.desc}
                </motion.p>
                <Link to={`/shop?category=${col.id}`} className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 hover:text-amber-600 transition-all border-b border-zinc-200 pb-1 hover:border-amber-600">
                  Shop {col.title}
                </Link>
              </div>
              <div className={idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg bg-zinc-900 group"
                >
                  {col.videos ? (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.video
                          key={col.videos[currentPrivateVideo]}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={col.videos[currentPrivateVideo]} type="video/mp4" />
                        </motion.video>
                      </AnimatePresence>
                      
                      {/* Carousel Controls */}
                      <div className="absolute inset-x-0 bottom-6 flex justify-center space-x-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={prevVideo}
                          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          onClick={nextVideo}
                          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>

                      {/* Indicators */}
                      <div className="absolute bottom-6 right-8 flex space-x-2 z-20">
                        {col.videos.map((_, i) => (
                          <div 
                            key={i}
                            className={`h-1 transition-all duration-500 ${i === currentPrivateVideo ? 'w-8 bg-amber-500' : 'w-2 bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </>
                  ) : col.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    >
                      <source src={col.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={col.image} 
                      alt={col.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {PRODUCTS.filter(p => p.category === col.id).slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cinematics Teaser */}
      <section className="py-32 px-6 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-8 block"
              >
                The Art of Scent
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-serif mb-10 uppercase tracking-tight leading-[1.1]"
              >
                Cinematic <br /> <span className="italic font-light text-zinc-500">Vision</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-zinc-400 max-w-xl text-lg font-light leading-relaxed mb-12"
              >
                Experience the soul of Sedra through our cinematic gallery. From the initial design sketches to the final 3D masterpieces, witness the journey of luxury.
              </motion.p>
              <Link to="/cinematics" className="group inline-flex items-center space-x-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white hover:text-amber-500 transition-all">
                <span>Explore the Gallery</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="relative z-10 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video_8.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-zinc-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center shadow-sm text-amber-600 border border-zinc-100">
              <Truck size={28} strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">Free Worldwide Shipping</h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest">On all orders over 50 KWD</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center shadow-sm text-amber-600 border border-zinc-100">
              <ShieldCheck size={28} strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">Secure Payments</h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest">100% secure payment processing</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center shadow-sm text-amber-600 border border-zinc-100">
              <RotateCcw size={28} strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 mb-2">Easy Returns</h4>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest">14-day money back guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
