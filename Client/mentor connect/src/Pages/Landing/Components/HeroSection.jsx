import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import $ from "jquery";
import "./hero.css";

const HeroSection = () => {
   useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    //Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
       lenis.raf(time * 1000);
     });

    // Create ScrollTrigger animations
     const scrollTrig = () => {
       const gsapAnim = gsap.utils.toArray(".gsap__anim");
         gsapAnim.forEach((section) => {
             gsap.to(section, {
             scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: true,
                //snap: true,
             },
            yPercent: 100,
            ease: "none",
             });
         });

      const parallaxWrapp = gsap.utils.toArray(".parallax__wrapp");
      parallaxWrapp.forEach((parallax) => {
        gsap.to(parallax, {
          scrollTrigger: {
            trigger: parallax,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          yPercent: -20,
          ease: "none",
        });
      });

      // Additional animations
      gsap.to(".heroTitle", {
        scrollTrigger: {
          trigger: "header.header",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        yPercent: 0,
        opacity: 0, // Initially transparent
        scale: 0.8, // Slightly shrunk
        //filter: "blur(5px)", // Blurred appearance
        ease: "power1.out",
      });
      gsap.to(".heroSub", {
        scrollTrigger: {
          trigger: "header.header",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        yPercent: 0,
        opacity: 0, // Initially transparent
        scale: 0.8, // Slightly shrunk
        //filter: "blur(5px)", // Blurred appearance
        ease: "power1.out",
      });

      gsap.to(".title__img img", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        rotate: 360,
        ease: "none",
      });

      gsap.to(".title__t", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        xPercent: -10,
        ease: "none",
      });

      gsap.to(".serv .stroke", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        xPercent: 10,
        ease: "none",
      });

      gsap.to(".serv__item:nth-child(1)", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        xPercent: -10,
        ease: "none",
      });

      gsap.to(".serv__item:nth-child(3)", {
        scrollTrigger: {
          trigger: ".serv",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        xPercent: 10,
        ease: "none",
      });

      gsap.to(".portfolio__item-img img", {
        scrollTrigger: {
          trigger: ".portfolio",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.3,
        ease: "none",
      });

     gsap.to(".approve__star", {
        scrollTrigger: {
          trigger: ".approve",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        rotate: 360,
        ease: "none",
      });
    };

    scrollTrig();

    //Handle window resize
    // const debouncedResize = _.debounce(() => {
    //   console.log("Window resized!");
    //   window.location.reload();
    // }, 500);

    // window.addEventListener("resize", debouncedResize);

    // return () => {
    //   window.removeEventListener("resize", debouncedResize);
    //   ScrollTrigger.killAll();
    // };
   }, []);

  return (
    <div className="hero-container">
      <div className="hero-top">
        <header className="header gsap__anim">
            <div className="hero">
                <div className="heroTitle">
                    Bring Your Ideas to Production
                </div>
                <div className="heroSub">
                    Find the teams to work together
                </div>
            </div>
            
          {/* <div className="parallax__wrapp">
            <div className="header__bg">
              <img src="img/pirat1.png" alt="" />
              <img src="img/pirat1.png" alt="" />
            </div>
            <div className="content">
              <h1 className="title title-p">
                Infinite<span className="stroke">Scroll</span>
              </h1>
            </div>
          </div> */}
        </header>
      </div>
      <div className="hero-bottom">
        <main className="main">
          <section className="section gsap__anim serv">
            <div className="parallax__wrapp">
              <div className="content">
                <div className="serv__wrapp">
                  <h2 className="title">
                    <span className="title__wrapp">
                      <span className="title__img">
                        <img src="img/star.svg" alt="" />
                      </span>
                      <div className="title__txt">
                        <span className="title__t">the</span>
                        <span className="stroke">services</span>
                      </div>
                    </span>
                  </h2>
                  <ul className="serv__list">
                    <li className="serv__item">
                      Creative direction
                      <span className="serv__item-img">
                        <img src="img/pirat2.png" alt="" />
                      </span>
                    </li>
                    <li className="serv__item">
                      Brand and identity
                      <span className="serv__item-img">
                        <img src="img/pirat3.png" alt="" />
                      </span>
                    </li>
                    <li className="serv__item">
                      Visual content
                      <span className="serv__item-img">
                        <img src="img/pirat4.png" alt="" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;
