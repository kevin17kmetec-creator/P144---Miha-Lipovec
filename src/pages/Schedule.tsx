import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Info } from 'lucide-react';

export default function Schedule() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scheduleData = [
    { day: "Ponedeljek", slots: ["-", "-", "-", "-", "-"] },
    { day: "Torek", slots: ["06:00 - 07:00", "07:15 - 08:15", "15:45 - 16:45", "17:00 - 18:00", "18:15 - 19:15"] },
    { day: "Sreda", slots: ["-", "-", "-", "-", "-"] },
    { day: "Četrtek", slots: ["06:00 - 07:00", "07:15 - 08:15", "15:45 - 16:45", "17:00 - 18:00", "18:15 - 19:15"] },
    { day: "Petek", slots: ["-", "-", "-", "-", "-"] },
    { day: "Sobota", slots: ["08:00 - 09:00", "09:15 - 10:15", "-", "-", "-"] },
  ];

  const headers = ["Jutro 1", "Jutro 2", "Popoldne 1", "Popoldne 2", "Večer"];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">URNIK <br/><span className="text-orange-500">TRENINGOV</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Naši termini so skrbno načrtovani, da omogočajo maksimalno pozornost trenerja vsakemu posamezniku.
          </p>
        </motion.div>

        <div className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-zinc-800/50">
                  <th className="p-8 text-left text-orange-500 font-black uppercase tracking-widest border-b border-white/5">Dan</th>
                  {headers.map((h, i) => (
                    <th key={i} className="p-8 text-center text-white font-black uppercase tracking-widest border-b border-white/5 text-sm">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className="p-8 font-black uppercase tracking-widest text-white border-b border-white/5 group-hover:text-orange-500 transition-colors">{row.day}</td>
                    {row.slots.map((slot, j) => (
                      <td key={j} className="p-8 text-center border-b border-white/5">
                        {slot === "-" ? (
                          <span className="text-gray-700 font-bold">-</span>
                        ) : (
                          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-lg font-bold text-sm border border-orange-500/20">
                            <Clock size={14} />
                            {slot}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">Rezervacije</h3>
            <p className="text-gray-400 leading-relaxed">
              Zaradi majhnih skupin so obvezne predhodne rezervacije terminov preko naše aplikacije ali SMS sporočila.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">Trajanje</h3>
            <p className="text-gray-400 leading-relaxed">
              Vsak trening traja točno 60 minut, vključno z ogrevanjem in zaključnim delom. Prosimo za točnost.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Info size={24} />
            </div>
            <h3 className="text-xl font-bold uppercase mb-4">Prilagodljivost</h3>
            <p className="text-gray-400 leading-relaxed">
              Če ti noben termin ne ustreza, nas kontaktiraj za možnost individualnih ur izven rednega urnika.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
