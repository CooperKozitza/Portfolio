"use client"

import React, { useEffect, useState } from "react";
import ParticleSphere from "../particleSphere";
import CameraBehavior, { CameraViewIndex } from "../cameraBehaviour";
import { Canvas } from "@react-three/fiber";
import useVisibility from "@/utils/visible";

const SphereBackground = () => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>();

  const [view, setView] = useState(CameraViewIndex.Initial);

  useEffect(() => {
    const timer = setTimeout(() => setView(CameraViewIndex.Right), 3000);

    return () => {
      clearTimeout(timer);
    }
  })

  return (
    <div ref={currentElement} className={`absolute size-full top-0 left-0`}>
      {
        isVisible ? (
          <Canvas>
            <ambientLight intensity={0.5} />
            <ParticleSphere size={0.01} color={0xff487f} radius={2} />
            <CameraBehavior view={view} />
          </Canvas>
        ) : null
      }
    </div>
  )
}

export default SphereBackground;
