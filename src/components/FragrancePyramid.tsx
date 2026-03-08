import React from 'react';
import { motion } from 'motion/react';
import { Wind, Heart, Trees, Sparkles } from 'lucide-react';

interface FragrancePyramidProps {
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

const NoteLevel: React.FC<{
  title: string;
  notes: string[];
  icon: React.ReactNode;
  description: string;
  delay: number;
  color: string;
  bgColor: string;
}> = ({ title, notes, icon, description, delay, color, bgColor }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} />
    <div className="flex items-start space-x-6 p-6 rounded-2xl border border-transparent hover:border-zinc-100 transition-all duration-500">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center shrink-0 shadow-sm`}>
        {icon}
      </div>
      <div className="flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-900">{title}</h4>
          <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">{description}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {notes.map((note, idx) => (
            <motion.span
              key={note}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: delay + (idx * 0.1), duration: 0.5 }}
              className="px-4 py-1.5 bg-white border border-zinc-100 text-[11px] text-zinc-600 rounded-full shadow-sm hover:border-amber-200 hover:text-amber-600 transition-colors cursor-default"
            >
              {note}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const FragrancePyramid: React.FC<FragrancePyramidProps> = ({ notes }) => {
  return (
    <div className="relative py-12">
      {/* Decorative Pyramid Background Line */}
      <div className="absolute left-[42px] top-24 bottom-24 w-px bg-gradient-to-b from-amber-200 via-amber-500 to-amber-200 opacity-20 hidden sm:block" />
      
      <div className="space-y-8">
        <NoteLevel
          title="Top Notes"
          notes={notes.top}
          icon={<Wind size={20} className="text-amber-600" />}
          description="First Impression (15-30 mins)"
          delay={0.1}
          color="bg-amber-50"
          bgColor="bg-amber-50/30"
        />
        
        <NoteLevel
          title="Heart Notes"
          notes={notes.heart}
          icon={<Heart size={20} className="text-rose-600" />}
          description="The Soul (2-4 hours)"
          delay={0.3}
          color="bg-rose-50"
          bgColor="bg-rose-50/30"
        />
        
        <NoteLevel
          title="Base Notes"
          notes={notes.base}
          icon={<Trees size={20} className="text-emerald-600" />}
          description="The Foundation (6+ hours)"
          delay={0.5}
          color="bg-emerald-50"
          bgColor="bg-emerald-50/30"
        />
      </div>

      <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
          <Sparkles size={18} className="text-amber-500" />
        </div>
        <p className="text-[11px] text-zinc-500 leading-relaxed uppercase tracking-wider">
          Our fragrances are highly concentrated extraits, designed to evolve on your skin throughout the day, revealing new layers of complexity.
        </p>
      </div>
    </div>
  );
};

export default FragrancePyramid;
