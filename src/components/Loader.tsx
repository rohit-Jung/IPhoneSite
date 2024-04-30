import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex items-center justify-center w-full h-full text-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    </Html>
  );
};

export default Loader;
