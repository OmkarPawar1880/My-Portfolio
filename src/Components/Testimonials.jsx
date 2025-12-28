import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Omkar showed strong problem-solving skills while working on the LiverCare project. His approach to explaining complex liver cirrhosis data through a clean UI was impressive.",
    name: "College Project Review",
    role: "LiverCare – Health Analytics Project",
  },
  {
    quote:
      "During the internship, Omkar consistently delivered structured, readable code and understood real-world data workflows quickly. A focused and reliable learner.",
    name: "Senior Data Engineer",
    role: "National Skill Deveolopment Corporation",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <p className="testimonials-subtitle">
          Feedback from academic projects and professional internships.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div
              className="testimonial-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <p className="testimonial-quote">“{item.quote}”</p>

              <div className="testimonial-author">
                <span className="name">{item.name}</span>
                <span className="role">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
