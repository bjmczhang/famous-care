import React from "react";
import style from "@/style/heroBg.module.scss";

const HeroBg = () => {
  return (
    <section className={style.heroBg}>
      <video src={require("./hero-video.mp4")} autoPlay loop muted />
    </section>
  );
};

export default HeroBg;
