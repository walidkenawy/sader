import React from 'react';
import { motion } from 'motion/react';

const Cinematics: React.FC = () => {
  const videos = [
    { id: 0, title: 'Nero Grande', desc: 'The flagship cinematic experience for the Nero Grande Collection.', src: '/video_0.mp4' },
    { id: 1, title: 'Private Collection 3D', desc: 'A stunning 3D visualization of the Private Collection bottles.', src: '/video_1.mp4' },
    { id: 2, title: 'Private Collection 3D (Alt)', desc: 'Alternative 3D render showcasing the Private Collection.', src: '/video_2.mp4' },
    { id: 3, title: 'Grande Collection Lineup', desc: 'The full lineup of the Grande Collection in motion.', src: '/video_3.mp4' },
    { id: 4, title: 'Grande Collection Lineup (Alt)', desc: 'Alternative view of the Grande Collection fragrances.', src: '/video_4.mp4' },
    { id: 5, title: 'Luxury Collection Lineup', desc: 'A dynamic showcase of the Luxury Collection products.', src: '/video_5.mp4' },
    { id: 6, title: 'Design Concept I', desc: 'Initial design sketches and wireframes for the Sedra brand.', src: '/video_6.mp4' },
    { id: 7, title: 'Design Concept II', desc: 'Detailed wireframe exploration of bottle geometry.', src: '/video_7.mp4' },
    { id: 8, title: 'Design Concept III', desc: 'Final design process and brand identity visualization.', src: '/video_8.mp4' },
    { id: 9, title: 'Private Collection Showcase', desc: 'An elegant showcase of the Private Collection bottles on reflective surfaces.', src: '/video_9.mp4' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.8em] text-amber-500 font-bold mb-6 block"
          >
            Visual Storytelling
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-8xl font-serif mb-8 uppercase tracking-tight"
          >
            Cinematic <span className="italic font-light text-zinc-500">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            Explore the artistic vision behind Sedra Perfumes through our collection of cinematic renders, 3D visualizations, and design concepts.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.map((video, idx) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900 shadow-2xl mb-6 border border-zinc-800">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2 uppercase tracking-wide text-zinc-100">{video.title}</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">{video.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cinematics;
