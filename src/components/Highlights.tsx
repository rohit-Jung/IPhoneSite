import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      duration: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full overflow-hidden bg-zinc common-padding"
    >
      <div className="screen-max-width">
        <div className="items-end justify-between w-full mb-12 md:flex">
          <h1 id="title" className="section-heading">
            Get the Highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the flim
              <img src={watchImg} alt="WatchImage" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="WatchImage" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;

