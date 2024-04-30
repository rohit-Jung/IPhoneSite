import { Dispatch, MutableRefObject, SetStateAction, Suspense } from "react";
import * as three from "three";
import ModelType from "../types/interfaces";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import { IphoneScene } from "./IphoneScene";
import Loader from "./Loader";

type Props = {
  index: number;
  groupRef: MutableRefObject<three.Group>;
  gsapType: string;
  controlRef: MutableRefObject<any>;
  setRotationState: Dispatch<SetStateAction<number>>;
  size: string;
  item: ModelType | JSX.ElementType;
};

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}: Props) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={3} />
      <Lights />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new three.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index == 2 ? "large" : "small"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IphoneScene
            scale={
              index == 1
                ? new three.Vector3(15, 15, 15)
                : new three.Vector3(17, 17, 17)
            }
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
