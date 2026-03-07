import React from 'react';
import { motion } from 'motion/react';
import ViewportVideo from '../components/ViewportVideo';

const Cinematics: React.FC = () => {
  const videos = [
    { id: 0, title: 'Nero Grande', desc: 'The flagship cinematic experience for the Nero Grande Collection, featuring volcanic elements and intense energy.', src: '/video_0.mp4' },
    { id: 1, title: 'Private Collection: Prism', desc: 'A vibrant 3D visualization of the Private Collection, showcasing the interplay of light and color.', src: '/video_1.mp4' },
    { id: 2, title: 'Private Collection: Motion', desc: 'Dynamic motion graphics highlighting the architectural geometry of the Private Collection bottles.', src: '/video_2.mp4' },
    { id: 3, title: 'Grande Collection: Lineup', desc: 'The full lineup of the Grande Collection, presented in a clean, modern cinematic environment.', src: '/video_3.mp4' },
    { id: 4, title: 'Grande Collection: Detail', desc: 'Close-up cinematic shots focusing on the intricate textures and branding of the Grande Collection.', src: '/video_4.mp4' },
    { id: 5, title: 'Luxury Collection: Opulence', desc: 'A dynamic showcase of the Luxury Collection, emphasizing its rich heritage and premium positioning.', src: '/video_5.mp4' },
    { id: 6, title: 'Design Concept: The Sketch', desc: 'Witness the birth of a fragrance bottle through initial artistic sketches and wireframe concepts.', src: '/video_6.mp4' },
    { id: 7, title: 'Design Concept: Geometry', desc: 'Exploring the mathematical precision and geometric beauty of our signature bottle designs.', src: '/video_7.mp4' },
    { id: 8, title: 'Design Concept: Final Form', desc: 'The transition from digital wireframe to the final, polished luxury product.', src: '/video_8.mp4' },
    { id: 9, title: 'Private Collection: The Ensemble', desc: 'A grand cinematic showcase of the entire Private Collection lineup in a pristine architectural setting.', src: '/video_9.mp4' },
    { id: 10, title: 'Brand Identity: The Core', desc: 'A powerful visualization of the Sedra brand identity, merging luxury with modern artistic expression.', src: '/video_10.mp4' },
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
                <ViewportVideo
                  src={video.src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
