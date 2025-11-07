import React, { useState, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, User } from 'lucide-react';

const Hero = () => {
  const [showLogoImg, setShowLogoImg] = useState(true);

  const handleCtaClick = useCallback((e) => {
    // Fire Facebook Pixel AddToCart if available
    try {
      if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
        window.fbq('track', 'AddToCart', { content_name: 'Course Level 1', value: 0.0, currency: 'USD' });
      }
    } catch (err) {
      // fail silently
    }
    // Allow normal navigation to proceed
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#101010] text-[#F5F5F5] overflow-hidden">
      {/* 3D Spline scene as immersive background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark overlay for readability; allow Spline interactions through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#101010]/90" />

      {/* Top-right Login button */}
      <div className="fixed right-5 top-5 z-20">
        <a
          href="/login"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur transition-colors hover:border-[#D4AF37]/60 hover:text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
        >
          <User className="h-4 w-4" />
          Login
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Logo / Wordmark (image with graceful fallback to text) */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-black/30 px-4 py-2 backdrop-blur">
          {showLogoImg ? (
            <img
              src="/logo.png"
              alt="JR AICADEMY"
              className="h-8 w-auto"
              onError={() => setShowLogoImg(false)}
            />
          ) : (
            <span className="text-sm tracking-widest text-[#D4AF37]">JR AICADEMY</span>
          )}
        </div>

        <h1 className="mb-4 max-w-5xl text-4xl font-semibold leading-tight text-[#F5F5F5] sm:text-5xl md:text-6xl">
          I Won't Just Teach You AI. <span className="text-[#D4AF37]">I Will Make You an Architect of It.</span>
        </h1>
        <p className="mb-10 max-w-2xl text-base text-[#F5F5F5]/90 sm:text-lg">
          Join the founder-led academy that builds real-world AI masters, not just users.
        </p>

        <a
          href="https://jrgroup.my.id/course-level-1"
          onClick={handleCtaClick}
          className="group inline-flex items-center gap-3 rounded-md bg-[#D4AF37] px-6 py-3 text-[#101010] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/60"
        >
          Start Your Journey Now
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
