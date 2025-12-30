import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Header = () => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const actionsRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(headerRef.current, { y: -40, opacity: 0, duration: 0.7 })
        .from(logoRef.current, { y: -10, opacity: 0, duration: 0.4 }, "-=0.4")
        .from(
          navRef.current?.children || [],
          { y: -10, opacity: 0, stagger: 0.08, duration: 0.4 },
          "-=0.3"
        )
        .from(
          actionsRef.current?.children || [],
          { y: -10, opacity: 0, stagger: 0.12, duration: 0.4 },
          "-=0.3"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* Mobile menu animation */
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [open]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* LOGO */}
        <div className="header-logo" ref={logoRef}>
          Omkar<span>Pawar</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="header-nav" ref={navRef}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="header-actions" ref={actionsRef}>
          <a className="header-action-link" href="https://github.com/OmkarPawar1880" target="_blank">
            GitHub
          </a>
          <a className="header-action-link" href="https://www.linkedin.com/in/omkar-pawar-b4a501287" target="_blank">
            LinkedIn
          </a>
          <a className="header-resume" href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className="mobile-menu" ref={mobileMenuRef}>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        <div className="mobile-actions">
          <a href="https://github.com/OmkarPawar1880" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/omkar-pawar-b4a501287" target="_blank">LinkedIn</a>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
