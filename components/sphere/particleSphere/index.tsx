"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { useFrame, useThree } from '@react-three/fiber';

import * as THREE from 'three';

import alpha from "@/public/static/images/alpha.png"

const POINT_COUNT = 8000;

interface Particle {
  x: number;
  y: number;
  z: number;
}

interface ParticleSphereProps {
  radius: number;
  size: number;
  color: number;
}

const ParticleSphere = ({ radius, size, color }: ParticleSphereProps) => {
  const mesh = useRef<THREE.Points>(null);
  const [scroll, setScroll] = useState(0);

  const { viewport } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }

    document.addEventListener('scroll', handleScroll, true);
    return () => document.removeEventListener('scroll', handleScroll, true);
  })

  const particlesGeometry = useMemo(() => {
    const points: Particle[] = [];

    for (var i = 0; i < POINT_COUNT; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      points.push({ x, y, z });
    }

    const particlesGeometry = new THREE.BufferGeometry();

    const positions = new Float32Array(points.flatMap((p: Particle) => 
      [p.x, p.y, p.z]
    ));

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));


    return particlesGeometry;
  }, [radius]);

  const particlesMaterial = useMemo(() => {
    const texture = new THREE.TextureLoader().load(alpha.src);

    return new THREE.PointsMaterial({
      color: color,
      size: size,
      map: texture,
      alphaTest: 0.5,
      transparent: true,
    });
  }, [size, color])

  useFrame(() => {
    if (mesh.current) {
      const deltaScroll = window.scrollY - scroll;

      mesh.current.rotation.y -= 0.001 + deltaScroll * 0.001;
      mesh.current.rotation.x += 0.001 + deltaScroll * 0.001;
    }
  });

  return (
    <points 
      ref={mesh} 
      geometry={particlesGeometry} 
      material={particlesMaterial}
    />
  )
}

export default ParticleSphere;
