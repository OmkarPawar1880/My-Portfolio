import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Cinematic Portfolio Website",
    problem:
      "Client needed a premium portfolio to showcase photography with immersive visuals and smooth storytelling.",
    tech: ["React", "GSAP", "CSS3"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    live: "#",
    github: "#",
  },
  {
    title: "Coffee Shop Landing Page",
    problem:
      "Local café wanted a modern website to attract customers and increase walk-ins.",
    tech: ["React", "GSAP", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    live: "#",
    github: "#",
  },
  {
    title: "Developer Portfolio",
    problem:
      "Needed a clean, fast, and animated personal portfolio to convert visitors into leads.",
    tech: ["React", "GSAP", "Modern UI"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className="projects-header">
          <h2>Selected Projects</h2>
          <p>Real problems. Clean solutions. Shipped with care.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-problem">
                  <strong>Problem:</strong> {project.problem}
                </p>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
