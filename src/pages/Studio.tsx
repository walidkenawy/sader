import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Video, CheckCircle2, AlertCircle, Loader2, Key } from 'lucide-react';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const COLLECTIONS = [
  { 
    id: 'Private', 
    name: 'Private Collection', 
    prompt: 'A cinematic 6-second close-up of a luxury perfume bottle with intricate gold patterns, placed on a rotating black marble pedestal with soft golden lighting and floating embers, 4k, hyper-realistic, 16:9' 
  },
  { 
    id: 'Luxury', 
    name: 'Luxury Collection', 
    prompt: 'A cinematic 6-second shot of a premium perfume bottle in a grand palace setting, reflecting off a crystal mirror, surrounded by velvet drapes and soft candlelight, 4k, elegant, 16:9' 
  },
  { 
    id: 'Grande', 
    name: 'Grande Collection', 
    prompt: 'A cinematic 6-second shot of a modern perfume bottle on a sleek glass surface with a vibrant city skyline at sunset in the background, clean lines, fresh atmosphere, 4k, 16:9' 
  },
  { 
    id: 'Femi', 
    name: 'Femi Collection', 
    prompt: 'A cinematic 6-second shot of a delicate perfume mist bottle among soft pink flower petals and morning dew, bright natural lighting, airy and feminine, 4k, 16:9' 
  },
];

const Studio: React.FC = () => {
  const [hasKey, setHasKey] = useState<boolean | null>(null);
  const [generating, setGenerating] = useState<Record<string, boolean>>({});
  const [results, setResults] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    try {
      const selected = await window.aistudio.hasSelectedApiKey();
      setHasKey(selected);
    } catch (e) {
      setHasKey(false);
    }
  };

  const handleOpenKey = async () => {
    await window.aistudio.openSelectKey();
    setHasKey(true);
  };

  const generateVideo = async (collectionId: string, prompt: string) => {
    setGenerating(prev => ({ ...prev, [collectionId]: true }));
    setErrors(prev => ({ ...prev, [collectionId]: '' }));
    
    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        setResults(prev => ({ ...prev, [collectionId]: downloadLink }));
      } else {
        throw new Error('No video generated');
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setHasKey(false);
        setErrors(prev => ({ ...prev, [collectionId]: 'API Key session expired. Please re-select your key.' }));
      } else {
        setErrors(prev => ({ ...prev, [collectionId]: err.message || 'Failed to generate video' }));
      }
    } finally {
      setGenerating(prev => ({ ...prev, [collectionId]: false }));
    }
  };

  if (hasKey === null) return null;

  return (
    <div className="pt-32 pb-24 px-6 bg-zinc-950 min-h-screen text-white">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-8"
          >
            <Sparkles size={14} />
            <span>AI Creative Studio</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-serif mb-6 uppercase tracking-tight"
          >
            Collection <span className="italic font-light text-zinc-500">Cinematics</span>
          </motion.h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Generate high-end 6-second cinematic videos for each Sedra collection using Veo 3.1.
          </p>
        </header>

        {!hasKey ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-8 text-amber-500">
              <Key size={32} />
            </div>
            <h2 className="text-2xl font-serif mb-4 uppercase tracking-wide">API Key Required</h2>
            <p className="text-zinc-500 mb-8 max-w-md mx-auto">
              To use Veo video generation, you must select a paid Google Cloud project API key.
            </p>
            <button 
              onClick={handleOpenKey}
              className="px-12 py-5 bg-amber-600 text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-amber-500 transition-all shadow-xl shadow-amber-600/20"
            >
              Select API Key
            </button>
            <p className="mt-6 text-[10px] text-zinc-600 uppercase tracking-widest">
              Requires billing enabled. See <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline">documentation</a>.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COLLECTIONS.map((col) => (
              <motion.div 
                key={col.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-serif uppercase tracking-wide">{col.name}</h3>
                  <Video size={20} className="text-zinc-700" />
                </div>
                
                <p className="text-zinc-500 text-sm font-light mb-8 flex-grow">
                  {col.prompt}
                </p>

                {results[col.id] ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-emerald-500 text-xs uppercase tracking-widest font-bold">
                      <CheckCircle2 size={16} />
                      <span>Generation Complete</span>
                    </div>
                    <a 
                      href={results[col.id]} 
                      target="_blank" 
                      rel="noreferrer"
                      className="block w-full py-4 bg-emerald-600/10 border border-emerald-600/20 text-emerald-500 text-[10px] uppercase tracking-[0.4em] font-bold rounded-xl text-center hover:bg-emerald-600/20 transition-all"
                    >
                      Download Video
                    </a>
                  </div>
                ) : (
                  <button 
                    disabled={generating[col.id]}
                    onClick={() => generateVideo(col.id, col.prompt)}
                    className={`w-full py-5 rounded-xl text-[10px] uppercase tracking-[0.4em] font-bold transition-all flex items-center justify-center space-x-3 ${
                      generating[col.id] 
                        ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                        : 'bg-white text-zinc-950 hover:bg-amber-500 hover:text-white'
                    }`}
                  >
                    {generating[col.id] ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <Video size={16} />
                        <span>Generate 6s Video</span>
                      </>
                    )}
                  </button>
                )}

                {errors[col.id] && (
                  <div className="mt-4 flex items-start space-x-2 text-red-400 text-[10px] uppercase tracking-widest leading-relaxed">
                    <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                    <span>{errors[col.id]}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        <footer className="mt-24 text-center border-t border-zinc-900 pt-12">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em]">
            Powered by Veo 3.1 & Sedra Creative Engine
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Studio;
