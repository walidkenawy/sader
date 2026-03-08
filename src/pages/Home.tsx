import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, RotateCcw, ArrowUp } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import ViewportVideo from '../components/ViewportVideo';

const Home: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const collections = [
    { 
      id: 'Private', 
      title: 'Private Collection', 
      desc: 'A masterpiece of refined luxury, crafted for those who seek exclusivity beyond the ordinary. Each fragrance reflects timeless elegance, sophistication, and unmatched distinction.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200',
      video: '/video_9.mp4'
    },
    { 
      id: 'Luxury', 
      title: 'Luxury Collection', 
      desc: 'Sedra’s premium line for special occasions and memorable moments. Sophisticated, rich, and long-lasting scents that highlight elegance and exclusivity.',
      image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=1200',
      video: '/video_5.mp4'
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
          <ViewportVideo
            src="/video_1.mp4"
            className="w-full h-full object-cover opacity-70"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl text-white">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8"
          >
            <span className="text-[10px] lg:text-xs uppercase tracking-[1em] font-bold text-amber-500">
              A Symphony of Oriental Elegance
            </span>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="flex flex-col items-center mb-12"
          >
            <h1 className="text-7xl lg:text-[160px] font-serif mb-4 leading-[0.8] tracking-tighter uppercase font-bold text-white">
              Sedra
            </h1>
            <h2 className="text-xl lg:text-3xl font-light text-amber-500/80 tracking-[0.6em] uppercase">
              Private Collection
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
          >
            <button 
              onClick={() => scrollToSection('collections-section')}
              className="group relative px-16 py-6 bg-white text-zinc-900 text-[10px] uppercase tracking-[0.4em] font-bold overflow-hidden rounded-full transition-all duration-500 hover:bg-amber-500 hover:text-white shadow-2xl shadow-white/10"
            >
              <span className="relative z-10">Shop the Collection</span>
            </button>
            <button 
              onClick={() => scrollToSection('cinematics-teaser')}
              className="px-16 py-6 border border-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-zinc-900 transition-all duration-500 rounded-full"
            >
              Watch the Film
            </button>
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
              <ViewportVideo
                src="/video_8.mp4"
                className="w-full h-full object-contain p-8 transition-transform duration-[2s] hover:scale-110"
              />
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

      {/* Featured Products Section */}
      <section className="py-32 px-6 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.6em] text-amber-600 font-bold mb-4 block"
              >
                Curated Selection
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-6xl font-serif text-zinc-900 uppercase tracking-tight"
              >
                Featured <span className="italic font-light text-zinc-400">Products</span>
              </motion.h2>
            </div>
            <Link to="/shop?category=Private" className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-900 hover:text-amber-600 transition-all border-b border-zinc-200 pb-1 hover:border-amber-600">
              View All Private Collection
            </Link>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-12 gap-8 snap-x no-scrollbar">
              {PRODUCTS.filter(p => p.category === 'Private').slice(0, 4).map((product, idx) => (
                <div key={product.id} className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] snap-start">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            {/* Scroll Hint Gradient */}
            <div className="absolute top-0 right-0 bottom-12 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Collection Sections */}
      {collections.map((col, idx) => (
        <section 
          key={col.id} 
          id={idx === 0 ? 'collections-section' : undefined}
          className={`py-32 px-6 ${idx % 2 === 0 ? 'bg-[#FAFAFA]' : 'bg-white'}`}
        >
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
                  className="space-y-4"
                >
                  {col.video ? (
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg bg-zinc-900">
                      <ViewportVideo
                        src={col.video}
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg bg-zinc-900">
                      <img 
                        src={col.image} 
                        alt={col.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
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

      {/* Grande Collection Spotlight - Prominent Video Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0">
          <ViewportVideo
            src="/video_4.mp4"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-end">
          <div className="max-w-2xl text-right">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-6 block"
            >
              Grande Collection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-8xl font-serif text-white mb-8 uppercase tracking-tight leading-none"
            >
              Grande <br /> <span className="italic font-light text-zinc-400">Everyday</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-300 text-lg font-light leading-relaxed mb-12 max-w-lg ml-auto"
            >
              Designed for everyday wear. Fresh, versatile, and modern fragrances that suit daily life and any casual setting. Elevate your daily routine with Sedra.
            </motion.p>
            <div className="flex flex-wrap gap-6 justify-end">
              <Link to="/shop?category=Grande" className="px-12 py-5 bg-white text-zinc-900 text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-500">
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grande Products Grid */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {PRODUCTS.filter(p => p.category === 'Grande').slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Femi Collection Spotlight - Prominent Video Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0">
          <ViewportVideo
            src="/video_4.mp4"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-6 block"
            >
              Femi Collection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-6xl lg:text-8xl font-serif text-white mb-8 uppercase tracking-tight leading-none"
            >
              Femi <br /> <span className="italic font-light text-zinc-400">Mist</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-300 text-lg font-light leading-relaxed mb-12 max-w-lg"
            >
              A dedicated line for hair and body mists. Light, refreshing, and feminine scents that add a soft touch throughout the day. Experience the essence of delicate luxury.
            </motion.p>
            <div className="flex flex-wrap gap-6">
              <Link to="/shop?category=Femi" className="px-12 py-5 bg-white text-zinc-900 text-[10px] uppercase tracking-[0.3em] font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-500">
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Femi Products Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {PRODUCTS.filter(p => p.category === 'Femi').slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Cinematics Teaser */}
      <section id="cinematics-teaser" className="py-32 px-6 bg-zinc-950 text-white overflow-hidden">
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
                <ViewportVideo
                  src="/video_8.mp4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-zinc-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Wall Section */}
      <section className="py-32 px-6 bg-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-6 block"
            >
              The Full Vision
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-serif text-white mb-8 uppercase tracking-tight"
            >
              Cinematic <span className="italic font-light text-zinc-500">Wall</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: id * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-lg bg-zinc-800 group"
              >
                <ViewportVideo
                  src={`/video_${id}.mp4`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-[8px] uppercase tracking-widest text-white font-bold">Scene {id + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/cinematics" className="inline-flex items-center space-x-4 text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500 hover:text-white transition-all">
              <span>View Full Gallery</span>
              <ArrowRight size={16} />
            </Link>
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

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-[70] w-14 h-14 bg-white text-zinc-900 rounded-full shadow-2xl flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-500 group border border-zinc-100"
            aria-label="Back to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-500" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
