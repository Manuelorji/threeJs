import React from "react";
import line from "../img/line.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const About = () => {
  return (
    <section className="h-screen snap-center">
      <div className="px-60 h-full flex w-full  justify-center ">
        <div className="flex-2">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
        <div className="flex flex-2 gap-4 pt-60 flex-col">
          <h1 className="font-bold text-5xl">
            Think outside the <br />
            square space.
          </h1>
          <div>
            <div className="text-xl">
              <div className="flex items-center gap-2">
                <img src={line} alt="" width={10} />
                <span className="text-orange-300">Who we Are</span>
              </div>
              a creative group of designers and developers with a passion for
              the arts.
              <br /> experiences.
            </div>
            <button className="bg-orange-300 rounded text-lg px-3 py-1 mt-4">
              See our works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
