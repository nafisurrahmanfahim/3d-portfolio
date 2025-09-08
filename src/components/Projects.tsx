import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo, Globe } from 'phosphor-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "AuthKit Dashboard",
      description: "Modern authentication system with glassmorphic design and smooth animations.",
      image: "/lovable-uploads/1d10ffba-c59b-40cc-b7c5-b3334e9cc0f0.png",
      tech: ["React", "TypeScript", "GSAP", "Tailwind"],
      category: "Web App",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "3D Interactive Web",
      description: "Cutting-edge 3D web experience with Spline integration and smooth parallax scrolling.",
      image: "/lovable-uploads/a5a3a1ea-06f2-4771-b88b-155e93ad630b.png",
      tech: ["Three.js", "Spline", "GSAP", "React"],
      category: "3D Experience",
      github: "https://github.com",
      live: "https://3d-site-beta.vercel.app/"
    },
    {
      id: 3,
      title: "Gaming UI Dashboard",
      description: "Next-level gaming interface with advanced animations and interactive elements.",
      image: "/lovable-uploads/b46ee0f2-6bda-40d1-ae5e-082c878edac9.png",
      tech: ["React", "Framer Motion", "WebGL", "Node.js"],
      category: "Gaming UI",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Creative developer portfolio with 3D elements and immersive user experience.",
      image: "/lovable-uploads/94a0189c-a5e2-4a34-a53c-4408ae93799c.png",
      tech: ["React", "GSAP", "Three.js", "Tailwind"],
      category: "Portfolio",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 5,
      title: "Gaming Platform",
      description: "Immersive gaming website with character animations and interactive features.",
      image: "/lovable-uploads/09fa949a-cd54-493d-80df-c07e78a2b5bb.png",
      tech: ["Next.js", "TypeScript", "GSAP", "WebGL"],
      category: "Gaming",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 6,
      title: "Animation Tools Hub",
      description: "Comprehensive platform for web animation tools and interactive learning.",
      image: "/lovable-uploads/e93d9958-a4d3-4860-85a9-05fb43946d7c.png",
      tech: ["React", "GSAP", "Lottie", "TypeScript"],
      category: "Tools",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 50,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Projects stagger animation
    gsap.fromTo(".project-card",
      {
        opacity: 0,
        y: 80,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-light text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 glass-strong px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-secondary">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass-strong px-2 py-1 rounded-lg text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button onClick={() => window.open(project.live, "_blank")}
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow text-white rounded-xl flex-1 group/btn"
                  >
                    <Globe size={16} className="mr-2" />
                    Live Demo
                    <ArrowUpRight 
                      size={16} 
                      className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" 
                    />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass border-border hover:border-primary rounded-xl"
                  >
                    <GithubLogo size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="glass border-primary/30 hover:border-primary text-foreground px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowUpRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;