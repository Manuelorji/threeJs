import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Chair from "./Chair.jsx";

const Illustration = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <OrbitControls enableZoom={false} />
        <Chair />
      </Stage>
    </Canvas>
  );
};

export default Illustration;
