import React from "react";
import SocialLinks from "../socialLinks";
import Image from "next/image";

import styles from "./hero.module.css"
import heroBackground from "@/public/static/images/hero-bg.svg"

const Hero = () => (
  <>
    <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: "80vh", minHeight: "500px" }}>
      <Image src={heroBackground} alt="gradient background" className={`${styles.herobg} absolute h-full`} style={{ filter: "blur(80px)", zIndex: '-1' }}/>
    </div>
    <div className="m-8 lg:mx-16" style={{ height: "60vh", minHeight: "350px" }}>
      <div className="h-full flex items-center max-w-2xl">
        <div className={`relative max-w-xl ${styles.herotext}`}>
          <h1 className="font-display text-8xl tracking-tight pb-6">
            Cooper Kozitza
          </h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectet cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  </>
)

export default Hero;
