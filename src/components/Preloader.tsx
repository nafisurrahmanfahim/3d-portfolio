import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title entrance
    tl.fromTo(titleRef.current, 
      { 
        opacity: 0, 
        y: 50,
        filter: "blur(20px)"
      },
      { 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out"
      }
    );

    // Animate progress bar
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
    }, "-=0.5");

    // Exit animation
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
        onComplete();
      }
    }, "+=0.5");

  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={titleRef} className="text-center">
        <h1 className="text-6xl md:text-8xl font-light gradient-text mb-4">
          Fahim
        </h1>
        <p className="text-xl text-muted-foreground font-light tracking-wider">
          Creative Developer
        </p>
        
        <div className="progress-container mt-8">
          <div ref={progressBarRef} className="progress-bar"></div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          <div className="loading-dot w-3 h-3 bg-primary rounded-full"></div>
          <div className="loading-dot w-3 h-3 bg-primary rounded-full"></div>
          <div className="loading-dot w-3 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;