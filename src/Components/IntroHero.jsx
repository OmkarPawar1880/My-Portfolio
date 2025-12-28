import React, { useEffect, useRef } from "react";
import gsap from "gsap";


import introPhoto from "../assets/intro-person.png";

const Intro = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // photo entrance
      tl.from(".intro-photo", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })

        // name entrance
        .from(
          ".intro-name",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )

        // hold on screen (so total ≈ 3s)
        .to({}, { duration: 1 })

        // slide entire intro away
        .to(introRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power4.inOut",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* INTRO SECTION ONLY */}
      <section className="intro-section" ref={introRef}>
        <img
          src={introPhoto}
          alt="Intro portrait"
          className="intro-photo"
        />
        <h1 className="intro-name">Omkar Pawar</h1>
      </section>
    </>
  );
};

export default Intro;
