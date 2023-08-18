"use client";

import useVisibility from "@/utils/visible";
import { ReactNode, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaDocker, FaGit, FaGithub, FaNodeJs, FaReact, FaRust, FaUnity } from "react-icons/fa";
import { SiAzuredevops, SiCplusplus, SiCsharp, SiDotnet, SiJavascript, SiMysql, SiNeovim, SiNextdotjs, SiOpengl, SiTailwindcss, SiTypescript, SiVercel, SiVisualstudio, SiVisualstudiocode } from "react-icons/si"

import styles from "./tools.module.css"

const tools: IconType[] = [
  SiNeovim,
  FaNodeJs,
  SiVisualstudio,
  FaGithub,
  SiVercel,
  SiOpengl,
  FaRust,
  SiAzuredevops,
  SiCplusplus,
  SiDotnet,
  SiTypescript,
  FaGit,
  FaReact,
  FaUnity,
  SiJavascript,
  SiCsharp,
  FaDocker,
  SiTailwindcss,
  SiVisualstudiocode,
  SiNextdotjs,
]

const animationDirection: string[] = [
  styles.showFromTop,
  styles.showFromLeft,
  styles.showFromBottom,
  styles.showFromRight
]

const Tool = ({ Icon, delay, visible }: { Icon: IconType, delay: number, visible: boolean }) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(false);

    const timer = setTimeout(() => {
      setShown(true)
    }, delay)

    return () => clearTimeout(timer);
  }, [visible, delay])

  return (
    <div className="w-20 h-20 transition-colors duration-300 text-4xl md:text-6xl">
      <Icon className={`${shown ? animationDirection[Math.floor(Math.random() * animationDirection.length)] : styles.hide} m-auto`} />
    </div>
  )
}

const Tools = () => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>();
  
  return (
    <div ref={currentElement}>
      <div className="grid grid-cols-5 gap-4 justify-items-center overflow-hidden">
        {tools.map((Icon, index) => (
          <Tool Icon={Icon} delay={Math.random() * 4000} visible={isVisible} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Tools;
