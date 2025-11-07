import React from 'react';
import { Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} JR AICADEMY. All rights reserved.</div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
          <a href="https://youtube.com" aria-label="YouTube" className="hover:text-white"><Youtube size={18} /></a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
