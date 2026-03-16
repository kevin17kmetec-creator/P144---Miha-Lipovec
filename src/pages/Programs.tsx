import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, Users, Check, ArrowRight } from 'lucide-react';

export default function Programs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const programs = [
    {
      title: "Funkcionalni Trening",
      icon: <Dumbbell size={32} />,
      description: "Naš paradni konj. Trening, ki te pripravi na življenje. Poudarek je na naravnih gibalnih vzorcih, moči in stabilnosti.",
      details: [
        "Individualno prilagojene obremenitve",
        "Majhne skupine (do 8 oseb)",
        "Poudarek na tehniki in varni izvedbi",
        "Kombinacija moči in vzdržljivosti"
      ],
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Kondicijska Priprava",
      icon: <Activity size={32} />,
      description: "Za tiste, ki želite premikati meje svoje vzdržljivosti. Intenzivni treningi, ki bodo tvoj metabolizem pognali v višave.",
      details: [
        "HIIT in intervalni treningi",
        "Izboljšanje kardiovaskularnega sistema",
        "Izguba odvečne maščobe",
        "Povečanje dnevne energije"
      ],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Mobilnost in Preventiva",
      icon: <Users size={32} />,
      description: "Rešitev za sodobne probleme. Če veliko sediš ali imaš bolečine v križu/vratu, je to program zate.",
      details: [
        "Odprava bolečin zaradi sedenja",
        "Povečanje gibljivosti sklepov",
        "Korekcijske vaje",
        "Dolgoročno zdravje hrbtenice"
      ],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Online Coaching",
      icon: <Check size={32} />,
      description: "Nisi iz Maribora ali raje treniraš sam? Naš sistem treningov lahko dobiš tudi na daljavo.",
      details: [
        "Personaliziran plan treningov",
        "Video razlage vseh vaj",
        "Tedensko spremljanje napredka",
        "Prehransko svetovanje"
      ],
      image: "https://images.unsplash.com/photo-1526506114642-54f0051f62e1?q=80&w=1374&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">NAŠI <br/><span className="text-orange-500">PROGRAMI</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            V P144 GYM ne verjamemo v univerzalne rešitve. Vsak trening je prilagojen tvojemu trenutnemu stanju in dolgoročnim ciljem.
          </p>
        </motion.div>

        <div className="space-y-32">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-500/20">
                  {program.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">{program.title}</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {program.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-white font-medium">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest hover:gap-4 transition-all group">
                  Izvedi več o programu <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative group">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
