import React from "react";
import SocialLinks from "../socialLinks/socialLinks";
import Image from "next/image";

import styles from "./hero.module.css"
import heroBackground from "@/public/static/images/hero-bg.svg"

const Hero = () => (
  <>
    <div className={styles.background}>
      <Image src={heroBackground} fill alt="gradient background" className={styles.gradient}/>
    </div>
    <div className={styles.hero}>
      <div className={styles.text}>
        <div className="max-w-2xl">
          <div className="max-w-xl">
            <h1 className="font-display text-8xl tracking-tight pb-6">
              Cooper Kozitza
            </h1>
            <div className="relative">
              <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectet cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hero;
