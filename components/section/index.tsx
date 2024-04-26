"use client";

import React, { useCallback, useEffect } from "react";

import styles from "./section.module.css"
import useVisibility from "@/utils/visible";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
  className?: string;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ children, id, className }, ref) => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>();

  const assignAnimationDelays = useCallback((element: HTMLElement, depth = 0) => {
    Array.from(element.children).forEach((child, index) => {
      if (child instanceof HTMLDivElement) {
        child.style.setProperty('--depth', depth.toString());
        child.style.setProperty('--order', index.toString());

        assignAnimationDelays(child, depth + 1);
      }
    });
  }, []);

  useEffect(() => {
    if (currentElement.current) {
      assignAnimationDelays(currentElement.current);
    }
  }, [assignAnimationDelays, currentElement]);

  return (
    <div className={`${styles.section} ${className || ''}`} id={id || undefined} ref={ref} data-scroll-align="center">
      <div className={`${styles.sectionInner} ${isVisible ? styles.fadeIn : ''}`} ref={currentElement}>
        {children}
      </div>
    </div>
  );
})

Section.displayName = "Section";

export default Section;
