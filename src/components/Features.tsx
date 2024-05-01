import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useRef } from "react";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current!.play();
      },
    });

    animateWithGsap("#featuresTitle", { y: 0, opacity: 1 });

    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      {
        scrub: 5.5,
      }
    );

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="relative h-full overflow-hidden common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="w-full mb-12">
          <h1 id="featuresTitle" className="section-heading">
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="pl-24 mt-32 mb-24">
            <h2 className="text-5xl font-semibold lg:text-7xl">iPhone.</h2>
            <h2 className="text-5xl font-semibold lg:text-7xl">
              Forged in Titanium.
            </h2>
          </div>

          <div className="flex flex-col flex-center sm:px-10">
            <div className="relative h-[50vh] w-full items-center flex">
              <video
                playsInline
                className="object-cover object-center w-full h-full"
                preload="none"
                id="exploreVideo"
                autoPlay
                muted
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="relative flex flex-col w-full">
              <div className="feature-video-container">
                <div className="flex-1 overflow-hidden h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="flex-1 overflow-hidden h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                {" "}
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is {""}
                    <span className="text-white">
                      {" "}
                      the first iphone to feature an aero-space grade titanium
                      design
                    </span>
                    using the same alloy that space crafts use for missons to
                    march.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal making these our {""}
                    <span className="text-white">
                      {" "}
                      lightest Pro model ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
