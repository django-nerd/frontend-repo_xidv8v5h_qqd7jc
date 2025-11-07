import React, { useEffect } from 'react';
import Hero from './components/Hero';
import FoundersPromise from './components/FoundersPromise';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    // enable smooth scrolling
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div className="font-sans antialiased">
      <Hero />
      <FoundersPromise />
      <Curriculum />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
