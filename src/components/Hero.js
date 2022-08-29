import React from 'react';
import Typed from "react-typed";

const Hero = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Eric Mugisha</h1>
                <p>I'm <span><Typed
                  className="typed-text"
                  strings={["Web Designer", "Software Developer", "Graphics Designer", "Tech Support Engineer"]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                /></span></p>
                <div className="social-links">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="github"><i className="bx bxl-github"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
                <div className="contact-hero">
                    <a href="#contact" className="btn contact-btn"><i className="bi bi-phone"></i>Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default Hero