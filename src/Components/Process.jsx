import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    step: "01",
    title: "Understanding Requirements",
    desc: "We discuss goals, audience, features, and expectations to avoid surprises later.",
  },
  {
    step: "02",
    title: "Design & Wireframing",
    desc: "I create a clean structure and visual direction before writing a single line of code.",
  },
  {
    step: "03",
    title: "Development",
    desc: "The design comes to life with clean, scalable, performance-focused code.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    desc: "Cross-device testing, performance tuning, and smooth interaction checks.",
  },
  {
    step: "05",
    title: "Delivery & Support",
    desc: "Final delivery with deployment support and post-launch assistance if needed.",
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
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
    <section className="process-section" ref={sectionRef}>
      <div className="process-container">
        <div className="process-header">
          <h2>My Process</h2>
          <p>
            A transparent, step-by-step workflow designed to deliver clarity,
            speed, and quality — every time.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((item, index) => (
            <div
              className="process-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <span className="process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
