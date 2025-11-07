import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#101010] text-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/30 px-3 py-1 text-sm tracking-widest text-[#D4AF37]">
              JR AICADEMY
            </div>
            <p className="text-xs text-[#F5F5F5]/70">
              © 2024 JR AICADEMY. All Rights Reserved. A brand by PT JR GROUP DIGITAL.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href="#curriculum" className="text-[#F5F5F5]/80 transition-colors hover:text-[#D4AF37]">Programs</a>
            <a href="#promise" className="text-[#F5F5F5]/80 transition-colors hover:text-[#D4AF37]">About Javier</a>
            <a href="#terms" className="text-[#F5F5F5]/80 transition-colors hover:text-[#D4AF37]">Terms</a>
            <a href="#privacy" className="text-[#F5F5F5]/80 transition-colors hover:text-[#D4AF37]">Privacy</a>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/jr.aicademy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/50 px-3 py-2 text-sm text-[#F5F5F5] transition-colors hover:bg-[#D4AF37]/10"
            >
              <Instagram className="h-4 w-4 text-[#D4AF37]" />
              @jr.aicademy
              <ExternalLink className="h-3.5 w-3.5 text-[#D4AF37]" />
            </a>
            <a
              href="https://instagram.com/jr.ainonymous"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/50 px-3 py-2 text-sm text-[#F5F5F5] transition-colors hover:bg-[#D4AF37]/10"
            >
              <Instagram className="h-4 w-4 text-[#D4AF37]" />
              @jr.ainonymous
              <ExternalLink className="h-3.5 w-3.5 text-[#D4AF37]" />
            </a>
          </div>

          <a href="#home" className="text-sm text-[#007BFF] hover:underline">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
