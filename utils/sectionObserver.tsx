"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface SectionRefs {
  [key: string]: HTMLDivElement | null;
}

export default function useSectionObserver() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionRefs = useRef<SectionRefs>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!sectionRefs.current) return;

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

    Object.values(currentSections).forEach((ref) => {
      if (ref) currentObserver.observe(ref);
    });
    
    return () => {
      Object.values(currentSections).forEach((ref) => {
        if (ref) currentObserver.unobserve(ref);
      });
      currentObserver.disconnect();
    };
  }, []);

  const createSectionRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[id] = el;
    }
  }, []);

  return { activeSection, createSectionRef };
};
