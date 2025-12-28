import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "🖥️",
    title: "Landing Page",
    price: "Starting from $5",
    desc: "Perfect for startups, creators, and small businesses.",
    points: [
      "One-page modern landing page",
      "Clean UI & responsive design",
      "Fast loading & SEO-friendly structure",
      "Basic animations (GSAP if needed)",
    ],
    note: "Best for promotions, portfolios, or product launches",
  },
  {
    icon: "⚙️",
    title: "Landing Page (Frontend + Backend)",
    price: "Starting from $10",
    desc: "For projects that need functionality, not just design.",
    points: [
      "Everything in the $5 plan",
      "Backend integration (forms, APIs, database)",
      "Authentication or contact handling",
      "Secure & structured code",
    ],
    note: "Best for lead collection & interactive pages",
  },
  {
    icon: "🚀",
    title: "Full Website / Full Project",
    price: "Starting from $15",
    desc: "End-to-end development solution.",
    points: [
      "Complete frontend + backend",
      "Multiple pages / full project structure",
      "Database integration & APIs",
      "Animations & performance optimization",
      "Clean, scalable codebase",
    ],
    note: "Best for business websites & custom web apps",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">
          Make it easy to hire me 🚀 Simple pricing. Clear deliverables. No confusion.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p className="service-price">{service.price}</p>
              <p className="service-desc">{service.desc}</p>

              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <p className="service-note">💡 {service.note}</p>
            </div>
          ))}
        </div>

        <div className="services-extra">
          <h4>➕ Extra Services (Optional)</h4>
          <p>
            Advanced GSAP animations • Admin panel • Performance optimization •
            API integration • UI/UX improvements
          </p>
          <small>
            ⚠️ Hosting and domain charges are not included in any plan.
          </small>
        </div>
      </div>
    </section>
  );
};

export default Services;
