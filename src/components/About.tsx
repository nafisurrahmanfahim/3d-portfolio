import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  Rocket, 
  Lightning,
  Browser,
  DeviceMobile,
  Database,
  GitBranch
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Main section animation
    gsap.fromTo(section,
      {
        opacity: 0,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Profile image animation
    gsap.fromTo(imageRef.current,
      {
        opacity: 0,
        x: -100,
        rotation: -10
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Skills stagger animation
    gsap.fromTo(".skill-icon",
      {
        opacity: 0,
        y: 30,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hover animations for skill icons
    const skillIcons = document.querySelectorAll('.skill-icon');
    skillIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
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

  const skills = [
    { icon: Code, name: "React", color: "text-blue-400" },
    { icon: Browser, name: "Next.js", color: "text-gray-300" },
    { icon: Lightning, name: "TypeScript", color: "text-blue-500" },
    { icon: Palette, name: "Tailwind", color: "text-cyan-400" },
    { icon: DeviceMobile, name: "React Native", color: "text-purple-400" },
    { icon: Database, name: "Node.js", color: "text-green-400" },
    { icon: GitBranch, name: "Git", color: "text-orange-400" },
    { icon: Rocket, name: "GSAP", color: "text-pink-400" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-full glow-primary opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full glass rounded-full p-2 overflow-hidden">
                <img
                  src="/lovable-uploads/aaec3e4e-e217-4951-ab06-56c752ce3535.png"
                  alt="Milad - Creative Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full glow-secondary float-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full float-delayed"></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a passionate web developer with a love for creating 
                  immersive digital experiences. With expertise in modern 
                  frameworks and cutting-edge animation libraries, I bring 
                  ideas to life through code.
                </p>
                
                <p>
                  My journey in web development spans over 3+ years, during 
                  which I've mastered the art of combining beautiful design 
                  with seamless functionality. I specialize in React, GSAP 
                  animations, and creating responsive, user-centric applications.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge 
                  with the developer community.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef}>
              <h3 className="text-2xl font-medium mb-6 gradient-text-secondary">
                Skills & Technologies
              </h3>
              
              <div className="grid grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-icon glass rounded-2xl p-4 text-center hover:glass-strong transition-all duration-300 cursor-pointer group"
                  >
                    <skill.icon 
                      size={32} 
                      weight="light"
                      className={`mx-auto mb-2 ${skill.color} group-hover:drop-shadow-lg`}
                    />
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;