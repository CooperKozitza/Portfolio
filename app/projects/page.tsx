"use client"

import CameraBehavior from "@/components/camera"
import ParticleSphere from "@/components/sphere"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useState } from "react"

const Projects = () => {
  return (
    <div className="w-dvw h-dvh">
      <div className="absolute top-0 left-0 size-full">
        <div className="absolute top-0 left-0 size-full flex justify-center items-center">
          <h1 className="font-display tracking-tight text-8xl text-blue-200">Cooper Kozitza</h1>
        </div>
        <Canvas>
          <ambientLight intensity={0.5} />
          <ParticleSphere size={0.05} color={0x1c6ae8} radius={2} animationCallback={() => setAnimating(false)} />
          <CameraBehavior />
        </Canvas>
      </div>
    </div>
  )
}

export default Projects
