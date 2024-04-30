"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { abs } from "three/examples/jsm/nodes/Nodes.js";

export interface SectionRefs {
  [key: string]: HTMLDivElement | null;
}

export default function useSectionScroll(ref: React.RefObject<SectionRefs>, scrollSnap = false) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionRefs = useRef<SectionRefs>(ref.current);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const activeSectionTopRef = useRef(0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const debounceRef = useRef<boolean>(false);

  const handleScroll = useCallback(() => {
      const previousScroll = window.scrollY;

      debounceRef.current = true;
      setTimeout(() => {
        debounceRef.current = false;

        const vel = window.scrollY - previousScroll;
        const dist = Math.abs(activeSectionTopRef.current - window.scrollY);

        if (Math.abs(vel) < 10 && dist > 1) {
          //window.scrollTo({ top: activeSectionTopRef.current, behavior: 'smooth' });
        }
      }, 1000)
  }, [])

  useEffect(() => {
    if (!sectionRefs.current) return;

    activeSectionTopRef.current = window.scrollY;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target.id;
          setActiveSection(target);
        }
      });
    }, { threshold: 0.25 });

    const currentObserver = observerRef.current;
    const currentSections = sectionRefs.current;
    const currentTimeout = timeoutRef.current

    Object.values(currentSections).forEach((ref) => {
      if (ref) currentObserver.observe(ref);
    });
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      Object.values(currentSections).forEach((ref) => {
        if (ref) currentObserver.unobserve(ref);
      });
      currentObserver.disconnect();

      window.removeEventListener('scroll', handleScroll);

      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!activeSection || !sectionRefs.current) return;

    const currentRef = sectionRefs.current[activeSection];
    if (currentRef) {
      const sectionRect = currentRef.getBoundingClientRect();

      const scrollAlign = currentRef.dataset.scrollAlign || 'start';

      let top: number;
      switch (scrollAlign) {
        case 'start':
          top = window.scrollY + sectionRect.top - parseFloat(getComputedStyle(document.documentElement).fontSize) * 5.5;
          break;
        case 'end':
          top = window.scrollY + sectionRect.bottom - window.innerHeight;
          break;
        case 'center':
        default:
          top = window.scrollY + sectionRect.top - (window.innerHeight / 2) + (sectionRect.height / 2);
          break;
      }

      activeSectionTopRef.current = top;

      timeoutRef.current = setTimeout(() => {
        //window.scrollTo({ top, behavior: 'smooth' })
      }, 500);
    }
  }, [activeSection]);

  return { activeSection, setActiveSection };
};
