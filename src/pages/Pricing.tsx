import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Activity, Dumbbell, Star } from 'lucide-react';

export default function Pricing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">CENIK <br/><span className="text-orange-500">STORITEV</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Investiraj v svoje zdravje in moč. Izberi paket, ki najbolje ustreza tvojemu življenjskemu slogu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Guided Trainings */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900 rounded-[40px] p-10 md:p-16 border-2 border-orange-500 relative overflow-hidden group shadow-2xl shadow-orange-500/10"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-3xl -mr-20 -mt-20 group-hover:bg-orange-500/20 transition-colors"></div>
            
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase text-white">POL-PRIVAT TRENINGI</h3>
                <p className="text-orange-500 font-bold tracking-widest text-sm">NAJBOLJŠA IZBIRA</p>
              </div>
            </div>

            <div className="space-y-12">
              {/* 3 Months */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-orange-500"></span>
                  <h4 className="text-lg font-black text-white uppercase tracking-widest">3 MESEČNA KARTA</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-black p-8 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all group/card">
                    <p className="text-xs text-gray-500 mb-2 uppercase font-bold tracking-widest group-hover:text-orange-500 transition-colors">3x na teden</p>
                    <p className="text-4xl font-black text-white">367 €</p>
                    <p className="text-xs text-gray-600 mt-2">~ 122€ / mesec</p>
                  </div>
                  <div className="bg-black p-8 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all group/card">
                    <p className="text-xs text-gray-500 mb-2 uppercase font-bold tracking-widest group-hover:text-orange-500 transition-colors">2x na teden</p>
                    <p className="text-4xl font-black text-white">327 €</p>
                    <p className="text-xs text-gray-600 mt-2">~ 109€ / mesec</p>
                  </div>
                </div>
              </div>

              {/* 1 Month */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[2px] bg-orange-500/30"></span>
                  <h4 className="text-lg font-black text-gray-400 uppercase tracking-widest">MESEČNA KARTA</h4>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-black p-8 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all group/card">
                    <p className="text-xs text-gray-500 mb-2 uppercase font-bold tracking-widest group-hover:text-orange-500 transition-colors">3x na teden</p>
                    <p className="text-4xl font-black text-white">149 €</p>
                  </div>
                  <div className="bg-black p-8 rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all group/card">
                    <p className="text-xs text-gray-500 mb-2 uppercase font-bold tracking-widest group-hover:text-orange-500 transition-colors">2x na teden</p>
                    <p className="text-4xl font-black text-white">109 €</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5">
              <ul className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Osebni pristop",
                  "Majhne skupine",
                  "Video razlage vaj",
                  "P144 Community",
                  "Svetovanje o prehrani",
                  "Tedenski napredek"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400 font-medium">
                    <Check className="text-orange-500" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-lg transition-all hover:scale-[1.02] shadow-xl shadow-orange-500/20">
                Rezerviraj svoj termin
              </button>
            </div>
          </motion.div>

          {/* Secondary Options */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zinc-900 rounded-[40px] p-10 md:p-12 border border-white/10"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-orange-500">
                  <Activity size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase text-white">OSTALA PONUDBA</h3>
                  <p className="text-gray-500 font-bold tracking-widest text-xs">DODATNE STORITVE</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-8 bg-black rounded-3xl border border-white/5 hover:border-white/20 transition-all group">
                  <div>
                    <p className="text-xl font-black text-white uppercase group-hover:text-orange-500 transition-colors">Online trening</p>
                    <p className="text-sm text-gray-500">Mesečna naročnina</p>
                  </div>
                  <p className="text-3xl font-black text-white">97 €</p>
                </div>
                <div className="flex items-center justify-between p-8 bg-black rounded-3xl border border-white/5 hover:border-white/20 transition-all group">
                  <div>
                    <p className="text-xl font-black text-white uppercase group-hover:text-orange-500 transition-colors">P144 GYM</p>
                    <p className="text-sm text-gray-500">Samostojna vadba</p>
                  </div>
                  <p className="text-3xl font-black text-white">49 €</p>
                </div>
                <div className="flex items-center justify-between p-8 bg-orange-500/5 rounded-3xl border border-orange-500/20">
                  <div>
                    <p className="text-xl font-black text-white uppercase">Prvi trening</p>
                    <p className="text-sm text-orange-500/70 font-bold">Preizkusi nas</p>
                  </div>
                  <p className="text-xl font-black text-orange-500 uppercase tracking-widest">Brezplačno</p>
                </div>
              </div>
            </motion.div>

            {/* Promo Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-orange-500 rounded-[40px] p-12 text-black relative overflow-hidden shadow-2xl shadow-orange-500/20"
            >
              <Dumbbell className="absolute -right-8 -bottom-8 text-black/10 rotate-12" size={200} />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  <Star size={20} fill="black" />
                  <Star size={20} fill="black" />
                  <Star size={20} fill="black" />
                  <Star size={20} fill="black" />
                  <Star size={20} fill="black" />
                </div>
                <h3 className="text-4xl font-black uppercase mb-6 leading-none tracking-tighter">NISI PREPRIČAN, KATERI PAKET JE ZATE?</h3>
                <p className="text-black/80 mb-10 font-bold text-lg leading-relaxed">
                  Pridi na brezplačen posvet in prvi trening, kjer bomo skupaj našli najboljšo rešitev za tvoje cilje.
                </p>
                <button className="bg-black text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                  Piši nam zdaj
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
