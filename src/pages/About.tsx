import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Gem } from 'lucide-react';

const About: React.FC = () => {
  const collectionHighlights = [
    {
      title: 'Private Collection',
      subtitle: 'The Pinnacle of Exclusivity',
      desc: 'Our most prestigious line, where cost is no object and rarity is the standard. Featuring precious ingredients like aged Oud, rare Saffron, and hand-picked Bulgarian Rose, these scents are designed for the true connoisseur who demands a signature that is as unique as their own fingerprint.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
      id: 'Private'
    },
    {
      title: 'Luxury Collection',
      subtitle: 'Memories Captured in Glass',
      desc: 'Crafted for the grandest stages of life. Whether it is a royal wedding or a high-profile gala, the Luxury Collection offers opulent, long-lasting sillage that commands attention. These are deep, complex compositions that evolve beautifully over hours, leaving an unforgettable trail of elegance.',
      image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800',
      id: 'Luxury'
    },
    {
      title: 'Grande Collection',
      subtitle: 'Daily Sophistication',
      desc: 'Luxury should not be reserved solely for the evening. The Grande Collection brings Sedra’s signature refinement to your daily ritual. Fresh, invigorating, and modern, these fragrances are designed to transition seamlessly from the boardroom to a casual lunch, ensuring you always radiate confidence.',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800',
      id: 'Grande'
    },
    {
      title: 'Femi Collection',
      subtitle: 'The Art of the Mist',
      desc: 'A delicate exploration of hair and body mists. The Femi Collection is a tribute to the soft, ethereal side of fragrance. Light enough for layering yet sophisticated enough to stand alone, these mists provide a gentle, refreshing aura that stays with you throughout the day.',
      image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=800',
      id: 'Femi'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-zinc-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1616984748474-20a4d97756d9?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Fragrance" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-8 block"
          >
            Our Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl lg:text-9xl font-serif text-white mb-8 uppercase tracking-tight leading-[0.9]"
          >
            The Soul of <br /> <span className="italic font-light text-zinc-400">Sedra</span>
          </motion.h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl lg:text-6xl font-serif text-zinc-900 mb-10 uppercase tracking-tight leading-tight">
                Crafting <span className="italic font-light text-zinc-400">Exclusivity</span> <br /> Since Inception
              </h2>
              <div className="space-y-6 text-zinc-600 font-light text-lg leading-relaxed">
                <p>
                  Born in the heart of Kuwait, Sedra Perfumes was founded on a singular vision: to bridge the gap between the rich, traditional heritage of Oriental perfumery and the sleek, minimalist elegance of modern Western design.
                </p>
                <p>
                  We believe that a fragrance is more than just a scent; it is a silent language, an invisible signature that speaks before you do. Our journey began with a commitment to sourcing only the most exceptional raw materials from around the globe, ensuring that every drop of Sedra is a testament to quality.
                </p>
                <p>
                  From the meticulous distillation process to the architectural design of our bottles, every detail is handled with the precision of a master craftsman. We don't just create perfumes; we curate experiences that linger in the memory long after the wearer has left the room.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1583467875263-d50dec37a88c?auto=format&fit=crop&q=80&w=800" 
                  alt="Fragrance Craftsmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections Deep Dive */}
      <section className="py-32 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.6em] text-amber-600 font-bold mb-4 block">Our Portfolio</span>
            <h2 className="text-5xl lg:text-7xl font-serif text-zinc-900 uppercase tracking-tight">The <span className="italic font-light text-zinc-400">Collections</span></h2>
          </div>

          <div className="space-y-32">
            {collectionHighlights.map((col, idx) => (
              <div key={col.id} className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:w-1/2"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold mb-4 block">{col.subtitle}</span>
                  <h3 className="text-4xl lg:text-5xl font-serif text-zinc-900 mb-8 uppercase tracking-wide">{col.title}</h3>
                  <p className="text-zinc-500 text-lg font-light leading-relaxed mb-10">
                    {col.desc}
                  </p>
                  <Link 
                    to={`/shop?category=${col.id}`} 
                    className="group inline-flex items-center space-x-4 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900 hover:text-amber-600 transition-all"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </Link>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="lg:w-1/2"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-zinc-200">
                    <img 
                      src={col.image} 
                      alt={col.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-amber-500 border border-white/10">
                <Gem size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif uppercase tracking-wider">Purity</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                We use the highest concentrations of pure perfume oils, ensuring that every spray delivers a rich, authentic experience that lasts.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-amber-500 border border-white/10">
                <Sparkles size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif uppercase tracking-wider">Innovation</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Our creative process is a constant dialogue between tradition and technology, resulting in avant-garde scents that feel both familiar and futuristic.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-amber-500 border border-white/10">
                <ShieldCheck size={24} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-serif uppercase tracking-wider">Integrity</h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                From ethical sourcing to sustainable packaging, we are committed to a standard of excellence that respects both our heritage and our future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-serif text-zinc-900 mb-10 uppercase tracking-tight">Begin Your <span className="italic font-light text-zinc-400">Journey</span></h2>
          <p className="text-zinc-500 text-lg font-light mb-12 leading-relaxed">
            Discover the fragrance that defines your story. Explore our collections and find your signature scent today.
          </p>
          <Link to="/shop" className="inline-block px-16 py-6 bg-zinc-900 text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-amber-600 transition-all duration-500 shadow-xl">
            Shop All Collections
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
