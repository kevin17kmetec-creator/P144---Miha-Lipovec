import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Check, Star, Phone, MapPin, Instagram, Facebook, Youtube, Quote, Mail, Dumbbell, Activity, Users, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BackToTop3D from './components/BackToTop3D';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-zinc-900/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-3xl md:text-4xl font-bold tracking-wider flex items-center uppercase">
            <span className="text-3d-orange-sm">[</span>
            <span className="text-3d-white-sm px-0.5">P144</span>
            <span className="text-3d-orange-sm">]</span>
          </a>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#domov" className="hover:text-orange-500 transition-colors">Domov</a>
            <a href="#programi" className="hover:text-orange-500 transition-colors">Programi</a>
            <a href="#urnik" className="hover:text-orange-500 transition-colors">Urnik</a>
            <a href="#ceniki" className="hover:text-orange-500 transition-colors">Ceniki</a>
            <a href="#kontakt" className="hover:text-orange-500 transition-colors">Kontakt</a>
          </div>

          <a href="#kontakt" className="hidden md:inline-block btn-3d-orange px-6 py-2 rounded-full">
            Pridruži se
          </a>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-white/10 px-6 py-4 flex flex-col space-y-4">
            <a href="#domov" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-500">Domov</a>
            <a href="#programi" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-500">Programi</a>
            <a href="#urnik" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-500">Urnik</a>
            <a href="#ceniki" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-500">Ceniki</a>
            <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-orange-500">Kontakt</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="domov" className="pt-24 pb-16 lg:pt-28 lg:pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-500 text-sm font-semibold mb-6 uppercase tracking-wide">
            <Activity size={16} /> PassSport Ekskluziva
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 uppercase text-3d-white">
            NADGRADI SVOJO <br/><span className="text-3d-orange">MOČ IN ENERGIJO</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Pridi švicnit, da rešimo tvoje težave zaradi sedenja v službi, slabih navad glede gibanja in nadgradimo tvojo moč, vzdržljivost ter energijo.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="#ceniki" className="btn-3d-orange px-8 py-3.5 rounded-full flex items-center gap-2">
              Začni zdaj <ArrowUpRight size={20} />
            </a>
            <a href="#programi" className="btn-3d-outline px-8 py-3.5 rounded-full">
              Razišči več
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 relative bg-zinc-900/30 flex items-center justify-center">
            <img src="https://drive.google.com/thumbnail?id=1ssxNX1l_VBgU7Lsci-k64xPg-Cn3IJkW&sz=w1500" alt="P144 Trening" className="w-full h-auto max-h-[600px] object-contain opacity-90 hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-12 bg-black relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/I6iHSwqB6W0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* PROGRAM GRID */}
      <section id="programi" className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 uppercase text-3d-white">NAŠI <span className="text-3d-orange">PROGRAMI</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Odkrij popoln program, prilagojen tvojim zmožnostim in ciljem.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Program 1 */}
            <motion.div variants={fadeInUp} className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all cursor-pointer aspect-[16/9] md:aspect-[21/9] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" alt="Funkcionalni trening" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Dumbbell className="text-orange-500" size={20} />
                    <h3 className="text-2xl font-bold uppercase text-3d-white-sm">FUNKCIONALNI TRENING</h3>
                  </div>
                  <p className="text-gray-300 text-sm max-w-md">Specifično oblikovan za tvoje zmožnosti in cilje. Krepitev gibalnih sposobnosti.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>

            {/* Program 2 */}
            <motion.div variants={fadeInUp} className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all cursor-pointer aspect-[16/9] md:aspect-[21/9] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop" alt="Brez izgubljanja časa" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="text-orange-500" size={20} />
                    <h3 className="text-2xl font-bold uppercase text-3d-white-sm">BREZ IZGUBLJANJA ČASA</h3>
                  </div>
                  <p className="text-gray-300 text-sm max-w-md">Vsak dan si voden skozi nov trening. Brez zabušavanja, na tebi je da delaš.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>

            {/* Program 3 */}
            <motion.div variants={fadeInUp} className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all cursor-pointer aspect-[16/9] md:aspect-[21/9] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" alt="Prilagodljivost" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-orange-500" size={20} />
                    <h3 className="text-2xl font-bold uppercase text-3d-white-sm">PRILAGODLJIVOST</h3>
                  </div>
                  <p className="text-gray-300 text-sm max-w-md">Vsak potrebuje svoj način. Trening prilagodimo zate, glede na tvojo dnevno energijo.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>

            {/* Program 4 */}
            <motion.div variants={fadeInUp} className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all cursor-pointer aspect-[16/9] md:aspect-[21/9] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1526506114642-54f0051f62e1?q=80&w=1374&auto=format&fit=crop" alt="Proti modernim problemom" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="text-orange-500" size={20} />
                    <h3 className="text-2xl font-bold uppercase text-3d-white-sm">PROTI MODERNIM PROBLEMOM</h3>
                  </div>
                  <p className="text-gray-300 text-sm max-w-md">Poseben poudarek na težavah modernega načina življenja in preventivi poškodb.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY / ABOUT */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center">
            <img src="https://drive.google.com/thumbnail?id=1A9Fzvxdwq0qmbIo-pAUaOkUPNY2B7rEV&sz=w1500" alt="Filozofija treninga" className="w-full h-auto max-h-[600px] object-contain grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold mb-6 uppercase text-3d-white">KAKO IZGLEDAJO <br/><span className="text-3d-orange">NAŠI TRENINGI?</span></motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-6 leading-relaxed">
            Treningi so po SKLOPIH razdeljeni na; ogrevanje, aktivacijo, funkcionalni del in/ali kondicijo. Vsaka VAJA je razložena in jasno prikazana.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-8 leading-relaxed">
            Vaje si sledijo v zaporedju 3 - 4 vaj, katere so PRILAGOJENE POSAMEZNIKU IN NJEGOVIM POTREBAM TER ZMOŽNOSTIM. Na tebi je samo, da PRIDEŠ MIMO IN "ŠVICNEŠ".
          </motion.p>
          <motion.a variants={fadeInUp} href="#kontakt" className="inline-flex items-center gap-2 btn-3d-orange px-8 py-3.5 rounded-full">
            Pridruži se ekipi
          </motion.a>
        </motion.div>
      </section>

      {/* SCHEDULE TABLE */}
      <section id="urnik" className="py-20 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 uppercase text-3d-white">URNIK <span className="text-3d-orange">TRENINGOV</span></h2>
            <p className="text-gray-400">Izberi termin, ki ti najbolj ustreza.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[800px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="p-4 bg-orange-500 text-white font-bold uppercase tracking-wider border border-orange-500">Dnevi</th>
                  <th className="p-4 bg-zinc-900 text-white font-bold uppercase tracking-wider border border-white/10">Jutro 1</th>
                  <th className="p-4 bg-zinc-900 text-white font-bold uppercase tracking-wider border border-white/10">Jutro 2</th>
                  <th className="p-4 bg-zinc-900 text-white font-bold uppercase tracking-wider border border-white/10">Popoldne 1</th>
                  <th className="p-4 bg-zinc-900 text-white font-bold uppercase tracking-wider border border-white/10">Popoldne 2</th>
                  <th className="p-4 bg-zinc-900 text-white font-bold uppercase tracking-wider border border-white/10">Večer</th>
                </tr>
              </thead>
              <tbody className="text-center text-gray-300">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-orange-500">Ponedeljek</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-orange-500">Torek</td>
                  <td className="p-4 border border-white/10">06:00 - 07:00</td>
                  <td className="p-4 border border-white/10">07:15 - 08:15</td>
                  <td className="p-4 border border-white/10">15:45 - 16:45</td>
                  <td className="p-4 border border-white/10">17:00 - 18:00</td>
                  <td className="p-4 border border-white/10">18:15 - 19:15</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-orange-500">Sreda</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-orange-500">Četrtek</td>
                  <td className="p-4 border border-white/10">06:00 - 07:00</td>
                  <td className="p-4 border border-white/10">07:15 - 08:15</td>
                  <td className="p-4 border border-white/10">15:45 - 16:45</td>
                  <td className="p-4 border border-white/10">17:00 - 18:00</td>
                  <td className="p-4 border border-white/10">18:15 - 19:15</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-orange-500">Petek</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 border border-white/10 font-bold text-orange-500">Sobota</td>
                  <td className="p-4 border border-white/10">08:00 - 09:00</td>
                  <td className="p-4 border border-white/10">09:15 - 10:15</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                  <td className="p-4 border border-white/10">-</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section id="ceniki" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 uppercase text-3d-white">CENIK <span className="text-3d-orange">P144 GYM</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Izberi paket, ki najbolj ustreza tvojim ciljem.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8 items-center"
          >
            
            {/* Tier 1 */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all">
              <h3 className="text-2xl font-bold mb-2 uppercase text-3d-white-sm">1 MESEČNA KARTA</h3>
              <p className="text-gray-400 text-sm mb-6">Neomejen obisk POL PRIVAT SKUPINSKE VADBE</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">€89</span><span className="text-gray-400">/mesec</span>
                <p className="text-xs text-orange-500 mt-1">PassSport cena (Redna: €137)</p>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-3"><Check className="text-orange-500 shrink-0" size={18} /> P144 Community, zayebancya, nasveti</li>
                <li className="flex items-center gap-3"><Check className="text-orange-500 shrink-0" size={18} /> Ekskluziven PassSport POPUST</li>
              </ul>
              <a href="https://buy.stripe.com/dR6cQM2f30R7bTydRa" target="_blank" rel="noreferrer" className="block w-full text-center btn-3d-outline py-3 rounded-full">
                Pridruži se
              </a>
            </motion.div>

            {/* Tier 2 (RECOMMENDED) */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 rounded-2xl p-8 border-2 border-orange-500 transform lg:scale-105 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                Priporočeno
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase text-3d-white-sm">3 MESEČNA KARTA</h3>
              <p className="text-gray-400 text-sm mb-6">Neomejen obisk POL PRIVAT SKUPINSKE VADBE</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">€237</span><span className="text-gray-400">/3 mesece</span>
                <p className="text-xs text-orange-500 mt-1">PassSport cena (Redna: €330)</p>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-3"><Check className="text-orange-500 shrink-0" size={18} /> P144 Community, zayebancya, nasveti</li>
                <li className="flex items-center gap-3"><Check className="text-orange-500 shrink-0" size={18} /> Ekskluziven PassSport POPUST</li>
              </ul>
              <a href="https://buy.stripe.com/cN2dUQaLz43j8HmbJ3" target="_blank" rel="noreferrer" className="block w-full text-center btn-3d-orange py-3 rounded-full">
                Pridruži se
              </a>
            </motion.div>

            {/* Tier 3 */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all">
              <h3 className="text-2xl font-bold mb-2 uppercase text-3d-white-sm">PRVI TRENING</h3>
              <p className="text-gray-400 text-sm mb-6">Nisi ziher? Preizkusi trening, energijo in GYM.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">BREZPLAČNO</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-gray-300">
                <li className="flex items-center gap-3"><Check className="text-orange-500 shrink-0" size={18} /> Spoznaj trenerja in ekipo</li>
                <li className="flex items-center gap-3"><Check className="text-orange-500 shrink-0" size={18} /> Preizkusi način dela</li>
              </ul>
              <a href="#kontakt" className="block w-full text-center btn-3d-outline py-3 rounded-full">
                Prijavi se
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* TRAINER PROFILE */}
      <section className="py-20 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 uppercase text-3d-white">NAŠA <span className="text-3d-orange">EKIPA</span></h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Trainer 1: Miha Lipovec */}
            <motion.div variants={fadeInUp} className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1470&auto=format&fit=crop" alt="Miha Lipovec" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="text-xl font-bold text-white uppercase">Miha Lipovec</h3>
                <p className="text-orange-500 text-sm">Glavni Trener</p>
              </div>
            </motion.div>
            
            {/* Placeholders for layout */}
            <motion.div variants={fadeInUp} className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop" alt="Trener 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="text-xl font-bold text-white uppercase">Trener 2</h3>
                <p className="text-orange-500 text-sm">Kondicijski Trener</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop" alt="Trener 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="text-xl font-bold text-white uppercase">Trener 3</h3>
                <p className="text-orange-500 text-sm">Funkcionalna Vadba</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900">
              <img src="https://images.unsplash.com/photo-1534438097544-e5141240d518?q=80&w=1470&auto=format&fit=crop" alt="Trener 4" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h3 className="text-xl font-bold text-white uppercase">Trener 4</h3>
                <p className="text-orange-500 text-sm">Mobilnost</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-black to-black pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 uppercase text-3d-white">MNENJA <br/><span className="text-3d-orange">ČLANOV</span></h2>
            <p className="text-gray-400">Preberi, kaj o nas pravijo naši člani.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Testimonial 1 */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 p-8 rounded-2xl border border-white/5 relative flex flex-col h-full hover:border-orange-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-orange-500/10" size={48} />
              <div className="flex text-orange-500 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic flex-grow text-sm">
                "Lipa je res strokovnjak na svojem področju, treningi so vrhunski, oprema top, vzdušje med treningi super. Odlična lokacija nedaleč od centra Maribora. Toplo priporočam P144 GYM."
              </p>
              <div>
                <h4 className="font-bold uppercase text-white">Patrik</h4>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 p-8 rounded-2xl border border-white/5 relative flex flex-col h-full hover:border-orange-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-orange-500/10" size={48} />
              <div className="flex text-orange-500 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic flex-grow text-sm">
                "Odličen trener, poln zagona in znanja. Izjemno strokovno delo in napredek zagotovljen. Fitnes s odlično energijo in treningom kot se šika👏👍"
              </p>
              <div>
                <h4 className="font-bold uppercase text-white">Lidija</h4>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 p-8 rounded-2xl border border-white/5 relative flex flex-col h-full hover:border-orange-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-orange-500/10" size={48} />
              <div className="flex text-orange-500 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic flex-grow text-sm">
                "Vse zivljenje imam tezave z krizom. Ko sem treniral z Miho, so tezave s krizom prenehale. Ko sem vmes zaradi pomanjkanja casa nehal, so se spet pojavile. Prvic v zivljenju sem od trenerja dobil obcutek da res ve kaj dela. Vzdusje je sprosceno, motivirano. Super je ker ne gres 'z muko' na trening."
              </p>
              <div>
                <h4 className="font-bold uppercase text-white">Asei</h4>
              </div>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 p-8 rounded-2xl border border-white/5 relative flex flex-col h-full hover:border-orange-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-orange-500/10" size={48} />
              <div className="flex text-orange-500 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic flex-grow text-sm">
                "Zelo raznolike vaje. Vsakič kakšna nova vaja ali kombinacija. Včasih ti pove kateri mišični sklop cilja, včasih uganeš, skoraj vedno pa čez kakšen dan spoznaš kakšno novo mišico ali sklop. Velik poudarek na pravilni izvedbi vaj in prilagoditvi glede specifičnih težav ali potreb."
              </p>
              <div>
                <h4 className="font-bold uppercase text-white">Gorazd</h4>
              </div>
            </motion.div>

            {/* Testimonial 5 */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 p-8 rounded-2xl border border-white/5 relative flex flex-col h-full hover:border-orange-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-orange-500/10" size={48} />
              <div className="flex text-orange-500 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic flex-grow text-sm">
                "Najboljša izbira za vadbo! Privat fitnes z osebnim pristopom je res nekaj posebnega. Skupinske vaje so odlično organizirane, trener pa poskrbi, da vsak dela pravilno in glede na svoje zmožnosti. Vzdušje je sproščeno, hkrati pa te res motivira, da daš vse od sebe. Priporočam vsem, ki iščejo bolj oseben pristop in rezultate!"
              </p>
              <div>
                <h4 className="font-bold uppercase text-white">Urban</h4>
              </div>
            </motion.div>

            {/* Testimonial 6 */}
            <motion.div variants={fadeInUp} className="bg-zinc-900 p-8 rounded-2xl border border-white/5 relative flex flex-col h-full hover:border-orange-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-orange-500/10" size={48} />
              <div className="flex text-orange-500 mb-4">
                <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic flex-grow text-sm">
                "Top fitnes, odlična lokacija, brezplačen parking pred vhodom. Trener, ki se ti posveti, ti pokaže vaje in te usmerja skozi trening. Odlična ekipa, ki si med seboj pomaga ter se vzpodbuja. Toplo priporočam P144 GYM vsem, ki bi radi nekaj naredili iz sebe."
              </p>
              <div>
                <h4 className="font-bold uppercase text-white">Niko</h4>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="kontakt" className="py-24 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 uppercase text-3d-white">NISI ZIHER? <span className="text-3d-orange">PRIDI NA PRVI TRENING.</span></h2>
            <p className="text-gray-400">Prijavi se preko obrazca ali nas kontaktiraj direktno.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <form className="bg-zinc-900 p-8 md:p-10 rounded-2xl border border-white/10 h-full">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Ime in priimek</label>
                    <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Tvoje ime" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Telefonska številka</label>
                    <input type="tel" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="070 123 456" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">E-mail naslov</label>
                    <input type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="tvoj@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Izbira programa</label>
                    <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors">
                      <option>Brezplačen prvi trening</option>
                      <option>1 Mesečna Karta</option>
                      <option>3 Mesečna Karta</option>
                    </select>
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Sporočilo (neobvezno)</label>
                  <textarea rows={4} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Imaš kakšne poškodbe ali specifične cilje?"></textarea>
                </div>
                <button type="button" className="w-full btn-3d-orange text-lg py-4 rounded-lg uppercase tracking-wider">
                  Pošlji povpraševanje
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="flex flex-col gap-8"
            >
              <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10 flex-grow">
                <h3 className="text-2xl font-bold mb-6 uppercase text-3d-white-sm">Kontaktni <span className="text-3d-orange-sm">Podatki</span></h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Phone className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Pokliči nas</p>
                      <p className="text-lg font-bold">070 801 226</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                      <Mail className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Pošlji nam e-mail</p>
                      <p className="text-lg font-bold">miha@mihalipovec.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Lokacija</p>
                      <p className="text-lg font-bold">Oreško nabrežje 9</p>
                      <p className="text-gray-400">Maribor, Slovenia, 2000</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden h-64 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.613350352554!2d15.6547844!3d46.5562111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f77a641a95b05%3A0x6d9f3b7b4b3b1b0a!2sOre%C5%A1ko%20nabre%C5%BEje%209%2C%202000%20Maribor%2C%20Slovenia!5e0!3m2!1sen!2sus!4v1709666666666!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 pt-16 pb-8 border-t-2 border-orange-500/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12 relative z-10">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-bold tracking-wider flex items-center mb-6 uppercase">
              <span className="text-3d-orange-sm">[</span>
              <span className="text-3d-white-sm px-0.5">P144</span>
              <span className="text-3d-orange-sm">]</span>
              <span className="text-3d-orange-sm ml-2">GYM</span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Privaten GYM za vadbo v Mariboru, kjer boš nadgradil svoje počutje, sposobnosti in energijo.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/p144.gym/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/profile.php?id=61573109229527" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="https://www.youtube.com/@mlipovec" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Povezave</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#domov" className="hover:text-orange-500 transition-colors">Domov</a></li>
              <li><a href="#programi" className="hover:text-orange-500 transition-colors">Programi</a></li>
              <li><a href="#urnik" className="hover:text-orange-500 transition-colors">Urnik</a></li>
              <li><a href="#ceniki" className="hover:text-orange-500 transition-colors">Ceniki</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="text-orange-500 shrink-0 mt-0.5" size={20} />
                <span>070 801 226</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-orange-500 shrink-0 mt-0.5" size={20} />
                <span>miha@mihalipovec.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-0.5" size={20} />
                <span>Oreško nabrežje 9<br/>Maribor, 2000</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 relative z-10">
          <p>&copy; 2025 P1S4RN4, Miha Lipovec s.p. Vse pravice pridržane.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>

      <BackToTop3D />
    </div>
  );
}
