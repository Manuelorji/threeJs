import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Tablet from "./Tablet.jsx";

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Tablet />

        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default WebDesign;
