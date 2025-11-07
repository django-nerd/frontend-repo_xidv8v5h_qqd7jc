import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, User } from 'lucide-react';

export default function Hero() {
  const coursesRef = useRef(null);

  const handleScrollToCourses = (e) => {
    e.preventDefault();
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleLogoError = (e) => {
    e.currentTarget.style.display = 'none';
    const fallback = document.getElementById('logo-fallback');
    if (fallback) fallback.style.display = 'block';
  };

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene={
            import.meta.env.VITE_SPLINE_SCENE ||
            'https://prod.spline.design/x0o8lq7mJqk1l9t9/scene.splinecode'
          }
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient Overlay for Cinematic look - does not block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Fixed Login Button */}
      <div className="fixed right-6 top-6 z-50">
        <a
          href="https://jrgroup.my.id/member"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:border-yellow-400 hover:text-yellow-400"
        >
          <User size={18} />
          Login
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="JR AICADEMY"
            onError={handleLogoError}
            className="h-14 w-auto"
          />
          <div id="logo-fallback" className="hidden text-2xl font-bold tracking-widest text-yellow-400">
            JR AICADEMY
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Launch Your AI-Driven Future
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          From zero to launch. Learn the exact systems to build, deploy, and monetize AI-powered products.
        </p>

        {/* Primary CTA: scroll to courses (no pixel AddToCart here) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#courses"
            onClick={handleScrollToCourses}
            className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-yellow-300"
          >
            <Rocket className="transition-transform group-hover:-translate-y-0.5" size={20} />
            Start Your Journey Now
          </a>
        </div>
      </div>
    </section>
  );
}
