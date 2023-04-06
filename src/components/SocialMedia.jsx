import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Tab from "./Tab.jsx";

const SocialMedia = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <OrbitControls enableZoom={false} />
        <Tab />
      </Stage>
    </Canvas>
  );
};

export default SocialMedia;
