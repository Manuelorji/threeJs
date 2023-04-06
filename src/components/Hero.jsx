import React from "react";
import styles from "../styles/Hero.module.scss";
import Nav from "./Nav";
import HeroImg from "../img/moonMan.png";
import line from "../img/line.png";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Sphere } from "@react-three/drei";

const Hero = () => {
  return (
    <section className="h-screen relative">
      <Nav />
      <div className="px-60 grid grid-cols-2 justify-items-center h-5/6 items-center">
        <div className="flex flex-1 gap-4 flex-col">
          <h1 className="font-bold text-5xl">
            Think. Make.
            <br /> Solve.
          </h1>
          <div>
            <div className="text-xl">
              <div className="flex items-center gap-2">
                <img src={line} alt="" width={10} />
                <span className="text-orange-300">What we Do</span>
              </div>
              we enjoy creating delightful, human-centered digital
              <br /> experiences.
            </div>
            <button className="bg-orange-300 rounded text-lg px-3 py-1 mt-4">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex-1 ">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.25}>
              <MeshDistortMaterial
                color="gray"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            className={`flex-2  ${styles.heroimg}`}
            src={HeroImg}
            alt=""
            width={370}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
