import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'phosphor-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 }); // Delay for preloader

    // Animate main content
    tl.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 80,
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out"
      }
    )
    .fromTo(subtitleRef.current,
      {
        opacity: 0,
        y: 30,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 20
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      },
      "-=0.4"
    )
    .fromTo(splineRef.current,
      {
        opacity: 0,
        x: 100,
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out"
      },
      "-=1"
    );

    // Floating orbs animation
    gsap.to(".floating-orb", {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });

    gsap.to(".floating-orb", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline 3D */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/orb-QzYANIc6Tc0oxzWPGwgWVz31/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>

      {/* Floating Orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-orb absolute top-20 left-10 w-4 h-4 bg-primary rounded-full glow-primary opacity-60"></div>
        <div className="floating-orb absolute top-40 right-20 w-6 h-6 bg-secondary rounded-full glow-secondary opacity-40"></div>
        <div className="floating-orb absolute bottom-40 left-20 w-3 h-3 bg-accent rounded-full opacity-50"></div>
        <div className="floating-orb absolute bottom-20 right-10 w-5 h-5 bg-primary rounded-full glow-primary opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight"
          >
            Hi, I'm <span className="gradient-text text-glow">Milad</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">
              Web Developer
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Crafting digital experiences that inspire and engage through 
            innovative design and cutting-edge technology.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary hover:shadow-glow text-white px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-300 hover:scale-105 group"
            >
              Hire Me
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              onClick={() => scrollToSection('projects')}
              className="glass border-primary/30 hover:border-primary text-foreground px-8 py-6 text-lg rounded-2xl font-medium transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;