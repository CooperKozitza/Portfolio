"use client"

import React, { useEffect, useState } from "react";
import ParticleSphere from "../particleSphere";
import CameraBehavior, { CameraViewIndex } from "../cameraBehaviour";
import { Canvas } from "@react-three/fiber";
import useVisibility from "@/utils/visible";

const SphereBackground = () => {
  const [view, setView] = useState(CameraViewIndex.Right);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const updateColor = () => {
      setColor(window.matchMedia('(prefers-color-scheme: dark)').matches ? 0xffffff : 0);
    }

    updateColor();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateColor);

    return () => mediaQuery.removeEventListener('change', updateColor);
  })

  return (
    <div className="absolute size-full top-0 left-0">
      <Canvas>
        <ParticleSphere size={0.01} radius={2} color={color} />
        <CameraBehavior view={view} />
      </Canvas>
    </div>
  )
}

export default SphereBackground;
