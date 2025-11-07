import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
    { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} JR AICADEMY</div>
        <div className="flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-yellow-400 hover:bg-yellow-400/10"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
