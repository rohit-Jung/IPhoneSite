import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";

import * as three from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import ModelType from "../types/interfaces";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState<string>("small");
  const [model, setModel] = useState<ModelType>({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  //camera control for model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new three.Group());
  const large = useRef(new three.Group());

  //model rotation
  const [smallModelRotation, setSmallModelRotation] = useState(0);
  const [largeModelRotation, setLargeModelRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, y: 0 });
  });

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(
        tl,
        small,
        smallModelRotation,
        "#view1",
        "#view2",
        {
          transform: "translateX(-100%)",
          duration: 2,
        }
      );
    }
    if (size === "small") {
      animateWithGsapTimeline(
        tl,
        large,
        largeModelRotation,
        "#view2",
        "#view1",
        {
          transform: "translateX(0)",
          duration: 2,
        }
      );
    }
  }, [size]);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 className="section-heading" id="heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallModelRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeModelRotation}
              item={model}
              size={size}
            />

            {/* View Port is a way to render multiple views of a model in the same Canvas */}
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")!}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="w-full mx-auto">
            <p className="mb-5 text-sm font-light text-center">{model.title}</p>
            <div className="flex-center ">
              <ul className="color-container">
                {models.map((item, index) => (
                  <li
                    key={index}
                    className="mx-2 rounded-full cursor-pointer size-6"
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
