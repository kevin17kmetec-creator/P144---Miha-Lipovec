import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 mb-16 relative z-10">
        <div className="md:col-span-2">
          <Link to="/" className="text-4xl font-bold tracking-wider flex items-center mb-8 uppercase">
            <span className="text-orange-500">[</span>
            <span className="text-white px-0.5">P144</span>
            <span className="text-orange-500">]</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-8 text-lg leading-relaxed">
            Ekskluziven privatni GYM v Mariboru. Specializirani za funkcionalno vadbo, moč in dolgoročno zdravje telesa.
          </p>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/p144.gym/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all hover:-translate-y-1"><Instagram size={24} /></a>
            <a href="https://www.facebook.com/profile.php?id=61573109229527" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all hover:-translate-y-1"><Facebook size={24} /></a>
            <a href="https://www.youtube.com/@mlipovec" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all hover:-translate-y-1"><Youtube size={24} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white text-xl mb-8 uppercase tracking-widest">Hitre povezave</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><Link to="/" className="hover:text-orange-500 transition-colors">Domov</Link></li>
            <li><Link to="/programi" className="hover:text-orange-500 transition-colors">Programi</Link></li>
            <li><Link to="/urnik" className="hover:text-orange-500 transition-colors">Urnik</Link></li>
            <li><Link to="/ceniki" className="hover:text-orange-500 transition-colors">Ceniki</Link></li>
            <li><Link to="/kontakt" className="hover:text-orange-500 transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-xl mb-8 uppercase tracking-widest">Kontakt</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3"><Phone size={18} className="text-orange-500" /> 070 801 226</li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-orange-500" /> miha@mihalipovec.com</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-orange-500" /> Oreško nabrežje 9, Maribor</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} P144 GYM. Vse pravice pridržane.</p>
        <p className="flex items-center gap-2">Design & Build with <span className="text-orange-500">♥</span> in Maribor</p>
      </div>
    </footer>
  );
}
