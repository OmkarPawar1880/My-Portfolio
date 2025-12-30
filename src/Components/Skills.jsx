import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Font Awesome icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

// Simple Icons
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiC,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "C", icon: <SiC /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> }, // ✅ FIXED
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="skills-container">
        <h2 className="skills-title">Skills & Tech Stack</h2>
        <p className="skills-subtitle">
          Tools and technologies I use to build fast, modern, scalable web experiences.
        </p>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className="skill-card" key={index}>
              <h3 className="skill-group-title">{group.title}</h3>

              <div className="skill-items">
                {group.items.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
