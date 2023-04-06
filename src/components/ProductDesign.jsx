import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./Shoe.jsx";

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <OrbitControls enableZoom={false} />
        <Shoe />
      </Stage>
    </Canvas>
  );
};

export default ProductDesign;
