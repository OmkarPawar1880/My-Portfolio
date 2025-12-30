import React, { useEffect, useRef } from "react";

import gsap from "gsap";

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(headerRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          logoRef.current,
          { y: -10, opacity: 0, duration: 0.4 },
          "-=0.4"
        )
        .from(
          navRef.current.children,
          {
            y: -10,
            opacity: 0,
            stagger: 0.08,
            duration: 0.4,
          },
          "-=0.3"
        )
        .from(
          actionsRef.current.children,
          {
            y: -10,
            opacity: 0,
            stagger: 0.12,
            duration: 0.4,
          },
          "-=0.3"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* LOGO */}
        <div className="header-logo" ref={logoRef}>
          Omkar Pawar
        </div>

        {/* NAV */}
        <nav className="header-nav" ref={navRef}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* ACTIONS (TEXT LINKS) */}
        <div className="header-actions" ref={actionsRef}>
          <a
            href="https://github.com/OmkarPawar1880"
            target="_blank"
            rel="noopener noreferrer"
            className="header-action-link"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/omkar-pawar-b4a501287"
            target="_blank"
            rel="noopener noreferrer"
            className="header-action-link"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header-resume"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
