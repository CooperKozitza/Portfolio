"use client"

import React, { useEffect, useState } from "react";
import ParticleSphere from "../particleSphere";
import CameraBehavior from "../cameraBehaviour";
import { Canvas } from "@react-three/fiber";

const SphereBackground = ({ viewName }: { viewName?: string | null }) => {
  const [color, setColor] = useState(0);

  useEffect(() => {
    const updateColor = () => {
      setColor(window.matchMedia('(prefers-color-scheme: dark)').matches ? 0xffffff : 0);
    }

    updateColor();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateColor);

    return () => mediaQuery.removeEventListener('change', updateColor);
  }, [])

  return (
    <div className="absolute size-full top-0 left-0">
      <Canvas>
        <ParticleSphere size={0.01} radius={2} color={0x000} />
        <CameraBehavior viewName={viewName || ''} />
      </Canvas>
    </div>
  )
}

export default SphereBackground;
