import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import FoundersPromise from './components/FoundersPromise';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';

    // Ensure modal buttons work if present elsewhere
    const level0Btn = document.getElementById('level0-open');
    if (level0Btn) {
      level0Btn.addEventListener('click', () => {
        const d = document.getElementById('free-videos');
        if (d && d.showModal) d.showModal();
      });
    }

    return () => {
      document.documentElement.style.scrollBehavior = '';
      if (level0Btn) level0Btn.replaceWith(level0Btn.cloneNode(true));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Courses />
      <FoundersPromise />
      <Testimonials />
      <Footer />
    </div>
  );
}
