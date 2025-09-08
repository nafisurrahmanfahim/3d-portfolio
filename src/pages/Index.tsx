import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize smooth scrolling and GSAP
    const handleComplete = () => {
      setIsLoading(false);
      
      // Initialize main content animations
      gsap.fromTo('main', 
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );
    };

    // Set a minimum loading time for the experience
    const timer = setTimeout(handleComplete, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className="relative">
        <Navigation />
        
        <main className="overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
