import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Quote, Star, Dumbbell, Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-8xl font-black leading-[0.9] mb-8 uppercase tracking-tighter">
            NADGRADI <br/><span className="text-orange-500">MOČ IN ENERGIJO</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-400 text-xl mb-10 max-w-lg leading-relaxed font-medium">
            Pridi švicnit, da rešimo tvoje težave zaradi sedenja v službi, slabih navad glede gibanja in nadgradimo tvojo moč, vzdržljivost ter energijo.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
            <Link to="/ceniki" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full flex items-center gap-3 font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-orange-500/20">
              Začni zdaj <ArrowUpRight size={24} />
            </Link>
            <Link to="/programi" className="border-2 border-white/10 hover:border-orange-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              Razišči več
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border-4 border-white/5 relative bg-zinc-900 shadow-2xl">
            <img 
              src="https://drive.google.com/thumbnail?id=1ssxNX1l_VBgU7Lsci-k64xPg-Cn3IJkW&sz=w1500" 
              alt="P144 Trening" 
              className="w-full h-auto max-h-[700px] object-contain opacity-90" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        </motion.div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/5 group"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/I6iHSwqB6W0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="group-hover:scale-[1.01] transition-transform duration-700"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-black text-orange-500 mb-2 tracking-tighter">100%</h3>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Osebni pristop</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">144</h3>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Minut fokusa</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-orange-500 mb-2 tracking-tighter">8+</h3>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Let izkušenj</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">500+</h3>
            <p className="text-gray-400 uppercase text-xs font-bold tracking-widest">Zadovoljnih članov</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">MNENJA <br/><span className="text-orange-500">ČLANOV</span></h2>
              <p className="text-gray-400 max-w-md text-lg">Preberi, zakaj naši člani radi prihajajo v P144 GYM.</p>
            </div>
            <Link to="/kontakt" className="text-orange-500 font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              Postani del ekipe <ArrowUpRight size={20} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Patrik", text: "Lipa je res strokovnjak na svojem področju, treningi so vrhunski, oprema top, vzdušje med treningi super." },
              { name: "Lidija", text: "Odličen trener, poln zagona in znanja. Izjemno strokovno delo in napredek zagotovljen." },
              { name: "Asei", text: "Prvič v življenju sem od trenerja dobil občutek, da res ve, kaj dela. Vzdušje je sproščeno, motivirano." }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all group"
              >
                <Quote className="text-orange-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
                <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">"{t.text}"</p>
                <h4 className="font-black uppercase tracking-widest text-white">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
