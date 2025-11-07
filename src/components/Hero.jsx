import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { User, ArrowRight } from 'lucide-react';

function Logo() {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return (
      <div className="text-2xl font-bold tracking-wide text-yellow-400">
        JR AICADEMY
      </div>
    );
  }
  return (
    <img
      src="/logo.png"
      alt="JR Aicademy"
      onError={() => setImgError(true)}
      className="h-10 w-auto"
    />
  );
}

export default function Hero() {
  const handleScrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/X4WHt6g0UjCGc3bW/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient vignette overlay - allow interactions to pass through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <Logo />
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Master AI. Build the Future.
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          A cinematic, immersive learning experience to launch your AI career.
        </p>
        <button
          onClick={handleScrollToCourses}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur transition hover:border-yellow-400 hover:bg-yellow-400/10"
        >
          Start Your Journey Now
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Fixed login button */}
      <a
        href="https://jrgroup.my.id/member"
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-yellow-400 hover:bg-black/60"
      >
        <User className="h-4 w-4" /> Login
      </a>
    </section>
  );
}
