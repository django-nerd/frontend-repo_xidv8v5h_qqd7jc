import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import FoundersPromise from './components/FoundersPromise';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Attach open modal for Level 0 button after mount
  useEffect(() => {
    const section = document.getElementById('courses');
    if (!section) return;
    const btn = section.querySelector('button');
    if (!btn) return;
    const onClick = (e) => {
      const dlg = document.getElementById('free-videos');
      dlg?.showModal?.();
    };
    btn.addEventListener('click', onClick);
    return () => btn.removeEventListener('click', onClick);
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
