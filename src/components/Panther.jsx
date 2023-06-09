/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 panther.gltf --transform
Author: Lil_CJ (https://sketchfab.com/lil_cj_5888)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/black-panther-e73e355bdafa4fbeae0e42fca8c34bcc
Title: Black Panther
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/panther-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.47}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={56.21}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_85.geometry}
              material={materials["27_grayenv_1_0_0.006"]}
              skeleton={nodes.Object_85.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_87.geometry}
              material={materials["27_grayenv_1_0_0.006"]}
              skeleton={nodes.Object_87.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_89.geometry}
              material={materials["27_grayenv_1_0_0.006"]}
              skeleton={nodes.Object_89.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_91.geometry}
              material={materials["25_body_0.1_0_0.002"]}
              skeleton={nodes.Object_91.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/panther-transformed.glb");
