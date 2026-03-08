import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Gem, Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg font-serif tracking-tight transition-colors ${isOpen ? 'text-amber-600' : 'text-zinc-900 group-hover:text-amber-600'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180 text-amber-600' : 'text-zinc-400'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-zinc-500 font-light leading-relaxed text-base max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About: React.FC = () => {
  const collectionHighlights = [
    {
      title: 'Private Collection',
      subtitle: 'The Pinnacle of Exclusivity',
      desc: 'Our most prestigious line, where cost is no object and rarity is the standard. Featuring precious ingredients like aged Oud, rare Saffron, and hand-picked Bulgarian Rose, these scents are designed for the true connoisseur who demands a signature that is as unique as their own fingerprint.',
      image: 'https://www.sedraperfumes.com/web/image/product.template/572/image_1024',
      id: 'Private'
    },
    {
      title: 'Luxury Collection',
      subtitle: 'Memories Captured in Glass',
      desc: 'Crafted for the grandest stages of life. Whether it is a royal wedding or a high-profile gala, the Luxury Collection offers opulent, long-lasting sillage that commands attention. These are deep, complex compositions that evolve beautifully over hours, leaving an unforgettable trail of elegance.',
      image: 'https://www.sedraperfumes.com/web/image/product.template/21/image_1024',
      id: 'Luxury'
    },
    {
      title: 'Grande Collection',
      subtitle: 'Daily Sophistication',
      desc: 'Luxury should not be reserved solely for the evening. The Grande Collection brings Sedra’s signature refinement to your daily ritual. Fresh, invigorating, and modern, these fragrances are designed to transition seamlessly from the boardroom to a casual lunch, ensuring you always radiate confidence.',
      image: 'https://www.sedraperfumes.com/web/image/product.template/22/image_1024',
      id: 'Grande'
    },
    {
      title: 'Femi Collection',
      subtitle: 'The Art of the Mist',
      desc: 'A delicate exploration of hair and body mists. The Femi Collection is a tribute to the soft, ethereal side of fragrance. Light enough for layering yet sophisticated enough to stand alone, these mists provide a gentle, refreshing aura that stays with you throughout the day.',
      image: 'https://www.sedraperfumes.com/web/image/product.template/25/image_1024',
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
            src="https://www.sedraperfumes.com/web/image/product.template/574/image_1024" 
            alt="Luxury Fragrance" 
            className="w-full h-full object-contain opacity-40 p-24"
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
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-zinc-50 flex items-center justify-center p-12">
                <img 
                  src="https://www.sedraperfumes.com/web/image/product.template/576/image_1024" 
                  alt="Fragrance Craftsmanship" 
                  className="max-h-full object-contain"
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
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-white flex items-center justify-center p-8">
                    <img 
                      src={col.image} 
                      alt={col.title} 
                      className="max-h-full object-contain transition-transform duration-1000 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.6em] text-amber-600 font-bold mb-4 block">Curiosity</span>
            <h2 className="text-4xl lg:text-6xl font-serif text-zinc-900 uppercase tracking-tight">Frequently Asked <span className="italic font-light text-zinc-400">Questions</span></h2>
          </div>

          <div className="space-y-2">
            <FAQItem 
              question="What makes Sedra fragrances unique?"
              answer="Sedra fragrances are defined by their high concentration of pure perfume oils and the meticulous balance between traditional Oriental ingredients and modern Western olfactory structures. Each scent is a narrative, crafted over months to ensure a unique evolution on the skin."
            />
            <FAQItem 
              question="How do I choose the right scent?"
              answer="Choosing a scent is a personal journey. We recommend exploring our collections based on your preferred mood or occasion. Our Private Collection offers depth and exclusivity, while the Grande Collection is perfect for daily sophistication. You can also visit our Creative Studio for a guided discovery."
            />
            <FAQItem 
              question="Are Sedra perfumes long-lasting?"
              answer="Yes, all our fragrances are formulated as Extraits or high-concentration Eaux de Parfum. Due to the quality of our raw materials and the density of the compositions, they typically offer exceptional longevity and a memorable sillage that lasts throughout the day."
            />
            <FAQItem 
              question="Do you offer international shipping?"
              answer="Absolutely. We ship our luxury fragrances to over 50 countries worldwide. We use specialized logistics partners like DHL and FedEx to ensure your bottles are handled with care and delivered securely to your doorstep."
            />
            <FAQItem 
              question="Can I layer different Sedra scents?"
              answer="While each Sedra fragrance is a complete composition, our Femi Collection mists are specifically designed to be light enough for layering. Many of our clients enjoy layering a Femi mist over a Private Collection extrait to create a truly bespoke olfactory signature."
            />
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
