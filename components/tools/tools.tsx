"use client";

import useVisibility from "@/utils/visible";
import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaDocker, FaGit, FaGithub, FaNodeJs, FaReact, FaRust, FaUnity } from "react-icons/fa";
import { SiAzuredevops, SiCplusplus, SiCsharp, SiDotnet, SiJavascript, SiMysql, SiNeovim, SiNextdotjs, SiOpengl, SiTailwindcss, SiTypescript, SiVercel, SiVisualstudio, SiVisualstudiocode } from "react-icons/si"

import styles from "./tools.module.css"
import { JsxElement } from "typescript";

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

const MAX_DELAY = 3000;

type ToolProps = { Icon: IconType, delay: number, visible: boolean, className?: string, onClick?: MouseEventHandler<HTMLDivElement> };

const Tool = ({ Icon, delay, visible, className, onClick }: ToolProps) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(false);

    const timer = setTimeout(() => {
      setShown(true)
    }, delay)

    return () => clearTimeout(timer);
  }, [visible, delay])

  return (
    <div className={`${className} w-20 h-20 transition-colors duration-300 text-4xl md:text-6xl`} onClick={onClick}>
      <Icon className={`${shown ? animationDirection[Math.floor(Math.random() * animationDirection.length)] : styles.hide} m-auto`} />
    </div>
  )
}

const Tools = () => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>();

  const [selectedTool, setSelectedTool] = useState<number>(null);

  const handleClick = (index: number) => {
    setSelectedTool(index);
  }

  return (
    <div ref={currentElement}>
      <div className="grid grid-cols-5 gap-4 md:gap-10 justify-items-center overflow-hidden">
        {tools.map((Icon, index) => {
          return <Tool 
            Icon={Icon}
            delay={Math.random() * MAX_DELAY}
            visible={isVisible}
            key={index}
            onClick={() => handleClick(index)}
          />
        })}
      </div>
    </div>
  )
}

export default Tools;
