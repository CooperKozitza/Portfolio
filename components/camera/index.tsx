import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";

enum AnimationPhase {
  Intro, Pause, Pan, Finished
}

const CAMERA_RADIUS = 5;

const CAMERA_SPEED = 0.1;

const CAMERA_FINAL_POSITION = { x: -0.5, y: 2, z: 1.5 }

const CameraBehavior = () => {
  const { camera, gl, scene } = useThree();

  const [stage, setStage] = useState(AnimationPhase.Intro);
  const [stageProgress, setStageProgress] = useState(0);

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const timers = [
      setTimeout(() => {
        setStageProgress(0)
        setStage(AnimationPhase.Pause);
      }, 3000),
      setTimeout(() => {
        setStageProgress(0)
        setStage(AnimationPhase.Pan);
      }, 5000),
      setTimeout(() => {
        setStage(AnimationPhase.Finished)
      }, 7000)
    ];

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      timers.forEach(clearTimeout);
    };
  }, []);

  useFrame((_, delta) => {
    setStageProgress(Math.min(stageProgress + CAMERA_SPEED * delta, 1));

    const ease = 1 - Math.exp(-10 * stageProgress);

    switch (stage) {
      case AnimationPhase.Intro:
        camera.position.z = CAMERA_RADIUS * ease;

        camera.lookAt(0, 0, 0);

        break;
      case AnimationPhase.Pause:
        camera.lookAt(0, 0, 0);

        break;
      case AnimationPhase.Pan:
        camera.position.x = CAMERA_FINAL_POSITION.x * ease;
        camera.position.y = CAMERA_FINAL_POSITION.y * ease;
        camera.position.z = CAMERA_RADIUS + (CAMERA_FINAL_POSITION.z - CAMERA_RADIUS) * ease;

        camera.lookAt(CAMERA_FINAL_POSITION.x * ease, CAMERA_FINAL_POSITION.y * ease, CAMERA_FINAL_POSITION.z * ease - 1);

        break;
      default:
        break;
    }

    camera.updateProjectionMatrix();
    gl.render(scene, camera);
  });

  return null;
};

export default CameraBehavior;
