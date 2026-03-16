import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">POSTANI <br/><span className="text-orange-500">DEL EKIPE</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Imaš vprašanje ali se želiš prijaviti na prvi trening? Piši nam in odgovorili ti bomo v najkrajšem možnem času.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <div className="space-y-12 mb-16">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-orange-500 border border-white/5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Telefon</h4>
                  <p className="text-2xl md:text-3xl font-black text-white">070 801 226</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-orange-500 border border-white/5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">E-pošta</h4>
                  <p className="text-2xl md:text-3xl font-black text-white">miha@mihalipovec.com</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-orange-500 border border-white/5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-2">Lokacija</h4>
                  <p className="text-2xl md:text-3xl font-black text-white">Oreško nabrežje 9, Maribor</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h4 className="text-white font-black uppercase tracking-widest mb-8">Spremljaj nas</h4>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/p144.gym/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white hover:bg-orange-500 transition-all hover:-translate-y-1 border border-white/5"><Instagram size={28} /></a>
                <a href="https://www.facebook.com/profile.php?id=61573109229527" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white hover:bg-orange-500 transition-all hover:-translate-y-1 border border-white/5"><Facebook size={28} /></a>
                <a href="https://www.youtube.com/@mlipovec" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-white hover:bg-orange-500 transition-all hover:-translate-y-1 border border-white/5"><Youtube size={28} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-900/50 p-10 md:p-16 rounded-[40px] border border-white/5 shadow-2xl"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Ime in Priimek</label>
                  <input 
                    type="text" 
                    placeholder="Janez Novak" 
                    className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">E-naslov</label>
                  <input 
                    type="email" 
                    placeholder="janez@novak.si" 
                    className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-orange-500 outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Zanima me</label>
                <select className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-orange-500 outline-none transition-colors appearance-none">
                  <option>Pol-privat treningi</option>
                  <option>Online coaching</option>
                  <option>Samostojna vadba</option>
                  <option>Drugo</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Sporočilo</label>
                <textarea 
                  rows={5} 
                  placeholder="Kako ti lahko pomagamo?" 
                  className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-orange-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-lg transition-all hover:scale-[1.02] shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3">
                Pošlji sporočilo <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-32 h-[500px] w-full bg-zinc-900 border-y border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative group">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest shadow-2xl group-hover:scale-110 transition-transform">
            Najdeš nas tukaj
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.174154449084!2d15.65651877684074!3d46.55418196069925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f779777777777%3A0x7777777777777777!2sOre%C5%A1ko%20nabre%C5%BEje%209%2C%202000%20Maribor!5e0!3m2!1ssl!2ssi!4v1710580000000!5m2!1ssl!2ssi" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
