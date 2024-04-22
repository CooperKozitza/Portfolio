"use client";

import React, { useEffect } from "react";

import styles from "./section.module.css"
import useVisibility from "@/utils/visible";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
  className?: string;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ children, id, className }, ref) => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>();

  const assignAnimationDelays = (element: HTMLElement, depth = 0) => {
    Array.from(element.children).forEach((child, index) => {
      if (child instanceof HTMLDivElement) {
        child.style.setProperty('--depth', depth.toString());
        child.style.setProperty('--order', index.toString());

        assignAnimationDelays(child, depth + 1);
      }
    });
  };

  useEffect(() => {
    if (currentElement.current) {
      assignAnimationDelays(currentElement.current);
    }
  }, []);

  return (
    <div className={`${styles.section} ${className}`} id={id ? id : undefined} ref={ref}>
      <div className={`${styles.sectionInner} ${isVisible ? styles.fadeIn : ''}`} ref={currentElement}>
        {children}
      </div>
    </div>
  );
})

Section.displayName = "Section";

export default Section;
