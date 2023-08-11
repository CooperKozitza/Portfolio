import React from "react";
import GlowBackground from "./glow/glowBackground";
import SocialLinks from "./socialLinks";



const Hero = () => (
  <>
    <GlowBackground />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4" style={{ height: '70vh' }}>
      <div className="h-full flex items-end md:items-center max-w-2xl">
        <div>
          <h1 className="font-display text-8xl tracking-tighter pb-6">
            Cooper Kozitza
          </h1>
          <div className="relative" style={{ zIndex: '100' }}>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectet cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Hero;
