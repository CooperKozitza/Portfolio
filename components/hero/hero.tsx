import React from "react";
import SocialLinks from "../socialLinks/socialLinks";

import styles from "./hero.module.css"

const Hero = () => (
  <div className={styles.text}>
    <div className="max-w-2xl">
      <div className="max-w-xl">
        <h1 className="font-display text-8xl tracking-tight pb-6">
          Cooper Kozitza
        </h1>
        <div className="relative">
          <p>
            Blending a passion for problem-solving with a versatile skill set, I thrive on using computer science to unlock solutions to complex challenges, demonstrating the boundless potential of programming in every project I undertake.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  </div>
)

export default Hero;
