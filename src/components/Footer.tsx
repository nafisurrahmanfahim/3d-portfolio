import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo, Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Footer entrance animation
    gsap.fromTo(footer,
      {
        opacity: 0,
        y: 60,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating particles animation
    gsap.to(".footer-particle", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.2
    });

    gsap.to(".footer-particle", {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: "none",
      stagger: 0.1
    });

    // Social icons hover animation setup
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 5,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: GithubLogo,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: LinkedinLogo,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: TwitterLogo,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    {
      icon: InstagramLogo,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-pink-400"
    }
  ];

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <footer ref={footerRef} className="relative py-16 mt-32 glass border-t border-border/50">
      {/* Floating Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="footer-particle absolute top-8 left-8 w-2 h-2 bg-primary rounded-full glow-primary opacity-40"></div>
        <div className="footer-particle absolute top-16 right-16 w-3 h-3 bg-secondary rounded-full glow-secondary opacity-30"></div>
        <div className="footer-particle absolute bottom-12 left-16 w-2 h-2 bg-accent rounded-full opacity-50"></div>
        <div className="footer-particle absolute bottom-8 right-8 w-4 h-4 bg-primary rounded-full glow-primary opacity-20"></div>
        <div className="footer-particle absolute top-1/2 left-1/4 w-1 h-1 bg-secondary rounded-full opacity-60"></div>
        <div className="footer-particle absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div 
              className="text-3xl font-semibold gradient-text mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              Fahim
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Creative developer crafting digital experiences that inspire and engage 
              through innovative design and cutting-edge technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon w-12 h-12 glass rounded-2xl flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:glass-strong`}
                  aria-label={social.label}
                >
                  <social.icon size={20} weight="light" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 gradient-text-secondary">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 gradient-text-secondary">
              Get In Touch
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <a 
                href="mailto:hello@milad.dev"
                className="block hover:text-primary transition-colors duration-300"
              >
                nafisurrahmanfahim21@gmail.com
              </a>
              <a 
                href="tel:+15551234567"
                className="block hover:text-primary transition-colors duration-300"
              >
                +880 1611-720004
              </a>
              <p className="text-sm">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2025 Fahim. Made with</span>
              <Heart size={16} className="text-red-400" weight="fill" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button 
                onClick={scrollToTop}
                className="hover:text-primary transition-colors duration-300"
              >
                Back to Top
              </button>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;