import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: "2025",
    title: "Cinematic Portfolio Website",
    problem:
      "Client needed a premium portfolio to showcase photography with immersive visuals and smooth storytelling.",
    tech: ["React", "GSAP", "CSS3"],
    live: "#",
    github: "#",
  },
  {
    year: "2025",
    title: "Coffee Shop Landing Page",
    problem:
      "Local café wanted a modern website to attract customers and increase walk-ins.",
    tech: ["React", "GSAP", "Responsive Design"],
    live: "#",
    github: "#",
  },
  {
    year: "2025",
    title: "Developer Portfolio",
    problem:
      "Needed a clean, fast, and animated personal portfolio to convert visitors into leads.",
    tech: ["React", "GSAP", "Modern UI"],
    live: "#",
    github: "#",
  },
];

const FeaturedProject = () => {
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
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className="projects-header">
          <h2>Selected Projects</h2>
          <p>Real problems. Clean solutions. Shipped with care.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {/* YEAR */}
              <span className="project-year">{project.year}</span>

              {/* TITLE */}
              <h3 className="project-title">{project.title}</h3>

              {/* DESCRIPTION */}
              <p className="project-description">{project.problem}</p>

              {/* TECH STACK */}
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="project-actions">
                <a
                  href={project.github}
                  className="btn-outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project <span>↗</span>
                </a>

                <a
                  href={project.live}
                  className="btn-solid"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
