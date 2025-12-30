import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,

        // ✅ THIS is the key part
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when section enters viewport
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        <h2 ref={(el) => (itemsRef.current[0] = el)}>About Me</h2>

        <p ref={(el) => (itemsRef.current[1] = el)}>
         I’m a Bachelor’s degree student passionate about software development and modern web technologies. I enjoy building clean, functional applications and continuously improving my skills across frontend, backend, and problem-solving. I’m focused on learning, experimenting, and growing into a well-rounded developer.
        </p>

       
      </div>
    </section>
  );
};

export default About;
