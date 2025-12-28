import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <h3 className="footer-brand">Omkar Pawar</h3>

      <p className="footer-tagline">
        Clean UI • Smooth Motion • Performance First
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/OmkarPawar1880"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/omkar-pawar-b4a501287"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:omkarpawar1880@gmail.com">Email</a>
      </div>

      <span className="footer-copy">
        © {new Date().getFullYear()} Omkar Pawar. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
