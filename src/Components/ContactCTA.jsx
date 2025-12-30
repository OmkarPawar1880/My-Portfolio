import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const ContactCTA = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-cta" id="contact" ref={sectionRef}>
      <div className="contact-container">
        {/* Heading */}
        <h2 ref={(el) => (itemsRef.current[0] = el)}>
          Let’s create something together.
        </h2>

        <p ref={(el) => (itemsRef.current[1] = el)}>
          Have a project in mind or just want to connect?  
          Drop a message — I’ll get back to you.
        </p>

        {/* Quick Contact Icons */}
        <div
          className="contact-links"
          ref={(el) => (itemsRef.current[2] = el)}
        >
          <a
            href="mailto:omkarpawar1880@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>

          <a
            href="https://wa.me/919172952310"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/omkar-pawar-b4a501287"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          ref={(el) => (itemsRef.current[3] = el)}
          action="https://formsubmit.co/omkarpawar1880@gmail.com"
          method="POST"
        >
          {/* Disable captcha & redirect */}
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="4"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
