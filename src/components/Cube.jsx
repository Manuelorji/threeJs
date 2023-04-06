import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

const Cube = () => {
  const textRef = useRef();

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={[""]} />
          <Text ref={textRef} fontSize={1.3} color="#555">
            ManuelDev
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
