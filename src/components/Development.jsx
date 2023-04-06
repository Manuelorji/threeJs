import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
// import Tablet from "./Tablet.jsx";
import Car from "./Car";

const Development = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <OrbitControls enableZoom={false} />
        <Car />
      </Stage>
    </Canvas>
  );
};

export default Development;
