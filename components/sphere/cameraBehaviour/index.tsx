import { useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";

export type CameraView = {
  x: number; y: number; z: number;
}

export const cameraViews: Map<string, CameraView> = new Map([
  ['', { x: -4, y: 0, z: 0 }],
  ['web-development', { x: -1.5, y: 2, z: 1.5 }],
  ['hero', { x: -2, y: 0.5, z: 1.5 }],
  ['about', { x: 0, y: 2.5, z: 1.5 }]
]);

const CameraBehavior = ({ viewName }: { viewName: string }) => {
  const { camera, gl, scene } = useThree();
  const [view, setView] = useState<CameraView>();

  useEffect(() => {
    const initalView = cameraViews.get('');

    if (camera && initalView) {
      camera.position.set(initalView.x, initalView.y, initalView.z);
    }
  }, [camera])

  useEffect(() => {
    if (cameraViews.has(viewName)) {
      setView(cameraViews.get(viewName))
    } else {
      setView(cameraViews.get(''))
    }
  }, [viewName]);

  useFrame((_, delta) => {
    if (view) {
      camera.position.lerp(new THREE.Vector3(view.x, view.y, view.z), 0.015)
    }

    gl.render(scene, camera);
  });

  return null;
};

export default CameraBehavior;
