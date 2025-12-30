import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const valueRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 70%",     // when hero enters viewport
          toggleActions: "play none none none",
          once: true,           // animation runs only once
        },
      });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          taglineRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          valueRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      <div className="hero__inner">
        <h1 className="hero__title" ref={titleRef}>
          Omkar Pawar
        </h1>

        <h2 className="hero__tagline" ref={taglineRef}>
          I build fast, modern websites for startups & creators.
        </h2>

        <p className="hero__value" ref={valueRef}>
          Websites that feel premium, load instantly, and turn visitors into
          clients — without noise, clutter, or trends that expire.
        </p>

        <div className="hero__cta" ref={ctaRef}>
          <a href="#projects" className="btn btn--primary">
            View Work
          </a>
          <a href="#contact" className="btn btn--secondary">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
