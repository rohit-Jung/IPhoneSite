import gsap from "gsap";

import * as three from "three";
import { ScrollTrigger } from "gsap/all";
import { MutableRefObject } from "react";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (
  target: string,
  animationProps: GSAPTweenVars,
  scrollProps?: Object
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline: GSAPTimeline,
  rotationRef: MutableRefObject<three.Group>,
  rotationState: number,
  firstTarget: string,
  secondTarget: string,
  animationProps: GSAPTweenVars
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
