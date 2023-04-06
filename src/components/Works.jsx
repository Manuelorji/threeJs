import React, { useState } from "react";
import styles from "../styles/Works.module.scss";
import Development from "./Development";
import Illustration from "./Illustration";
import ProductDesign from "./ProductDesign";
import SocialMedia from "./SocialMedia";
import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Works = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <section className="h-screen snap-center">
      <div className="px-60 py-20 flex w-full items-center ">
        <div className="flex flex-1 gap-6 flex-col">
          {data.map((datum) => (
            <div
              onClick={() => setWork(datum)}
              className={
                work === datum ? `${styles.currentWork}` : `${styles.works}`
              }
              text={datum}
              // style={{ content: datum }}
              key={datum}
            >
              {datum}
            </div>
          ))}
        </div>
        <div className="flex-1 ">
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "Illustration" ? (
            <Illustration />
          ) : work === "Product Design" ? (
            <ProductDesign />
          ) : (
            <SocialMedia />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
