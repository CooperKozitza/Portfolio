"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { useFrame } from '@react-three/fiber';

import * as THREE from 'three';

import alpha from "@/public/static/images/alpha.png"

const pointCount = 10000;
const themeColors: Color[] = [{ r: 1, g: 0.3, b: 0.5  }, { r: 1, g: 0.5, b: 0  }];

type Particle = { x: number, y: number, z: number }
type Color = { r: number, g: number, b: number }

interface ParticleSphereProps {
  radius: number;
  size: number;
  color: number;
}

const ParticleSphere = ({ radius, size, color }: ParticleSphereProps) => {
  const mesh = useRef<THREE.Points>(null);
  const [scroll, setScroll] = useState(0);

  const texture = useMemo(() => {
    const textureLoader = new THREE.TextureLoader()
    return textureLoader.load(alpha.src)
  }, []);

  const material = useMemo(() => {
    const material = new THREE.PointsMaterial({
      size: size,
      color: color,
      map: texture,
      opacity: 1,
      alphaTest: 0.1,
      transparent: true,
    });

    material.color.convertSRGBToLinear();

    return material;
  }, [size, color, texture]);

  const geometry = useMemo(() => {
    const points: Particle[] = [];
    const colors: Color[] = [];

    for (var i = 0; i < pointCount; i++) {
      const color = themeColors[i % themeColors.length];

      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      points.push({ x, y, z });
      colors.push(color);
    }

    const geometry = new THREE.BufferGeometry();

    const positionBuffer = points.flatMap(p => [p.x, p.y, p.z]);
    const colorBuffer = colors.flatMap(c => [c.r, c.g, c.b]);

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positionBuffer, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colorBuffer, 3));

    return geometry;
  }, [radius]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }

    handleScroll();

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  })

  useEffect(() => {
    return () => {
      texture.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [texture, geometry, material]);

  useFrame(() => {
    if (mesh.current) {
      const ds = window.scrollY - scroll;

      mesh.current.rotation.y -= 0.001 + ds * 0.001;
      mesh.current.rotation.x += 0.001 + ds * 0.001;
    }

  });

  return (
    <points ref={mesh} geometry={geometry} material={material} />
  )
}

export default ParticleSphere;
