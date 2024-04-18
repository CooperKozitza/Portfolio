import { useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";

export type CameraView = {
  x: number; y: number; z: number;
}

export enum CameraViewIndex {
  Initial, Left, Right, Center
}

export const cameraViews: Map<CameraViewIndex, CameraView> = new Map([
  [CameraViewIndex.Initial, { x: 0, y: 0, z: 0 }],
  [CameraViewIndex.Left, { x: -1.5, y: 2, z: 1.5 }],
  [CameraViewIndex.Right, { x: -2, y: 0.5, z: 1.5 }],
  [CameraViewIndex.Center, { x: 0, y: 1, z: 1.5 }]
]);

const CameraBehavior = ({ view }: { view: CameraViewIndex | number }) => {
  const { camera, gl, scene } = useThree();

  const [viewIndex, setViewIndex] = useState<CameraViewIndex>(view);

  useEffect(() => {
    const initalView = cameraViews.get(CameraViewIndex.Initial);

    if (camera && initalView) {
      camera.position = new THREE.Vector3(initalView.x, initalView.y, initalView.z);
    }
  }, [camera])

  useEffect(() => {
    setViewIndex(view);
  }, [view]);

  useFrame((_, delta) => {
    const view = cameraViews.get(viewIndex);

    if (view) {
      camera.position.lerp(new THREE.Vector3(view.x, view.y, view.z), 0.01)
    }

    camera.updateProjectionMatrix();
    gl.render(scene, camera);
  });

  return null;
};

export default CameraBehavior;