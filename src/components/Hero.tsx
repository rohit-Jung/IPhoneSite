import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils"

const Hero = () => {
  const isClient = typeof window === "object";

  const [videoSrc, setVideoSrc] = useState(
    isClient && window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleWindowResize = () => {
    if (isClient && window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    if (isClient) {
      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, [isClient]);

  useGSAP(() => {
    gsap.to("#heroTitle", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: -70,
    });
  }, []);

  return (
    <section className="relative w-full bg-black nav-height">
      <div className="flex-col w-full h-5/6 flex-center">
        <p id="heroTitle" className="hero-title">
          iPhone 15 Pro
        </p>

        <div className="w-9/12 md:1-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center translate-y-20 opacity-0"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="text-xl font-normal">From $199/Month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
