import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "TheSmartBridge",
    role: "Intern",
    duration: "September 2025 – October 2025",
    points: [
      "Worked on real-world industry projects under structured mentorship.",
      "Improved problem-solving skills through hands-on development tasks.",
      "Collaborated in an agile learning environment."
    ],
  },
  {
    company: "Google Cloud – Generative AI Virtual Internship",
    role: "Generative AI Intern",
    duration: "September 2025 – October 2025",
    points: [
      "Worked with Vertex AI, Model Garden, Embeddings, and Vector Search.",
      "Built AI workflows using BigQuery and Cloud Storage.",
      "Completed challenge labs focused on debugging and deployment.",
      "Gained hands-on experience in Generative AI and cloud-based ML systems."
    ],
  },
  {
    company: "National Skill Development Corporation (NSDC)",
    role: "Senior Data Engineer Intern",
    duration: "May 2025 – June 2025",
    points: [
      "Designed scalable data pipelines using Python and SQL.",
      "Built ETL workflows for batch and real-time data processing.",
      "Worked with AWS (Redshift, S3) and GCP (BigQuery).",
      "Ensured data quality, security, and governance."
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              className="experience-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <span>{exp.company}</span>
              </div>

              <p className="experience-duration">{exp.duration}</p>

              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
