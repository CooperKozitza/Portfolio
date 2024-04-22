"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SectionRefs {
  [key: string]: HTMLDivElement | null;
}

export default function useSectionObserver() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<SectionRefs>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.25 });

    const currentObserver = observerRef.current;

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) currentObserver.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref) currentObserver.unobserve(ref);
      });
      currentObserver.disconnect();
    };
  }, []);

  const createSectionRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[id] = el;
      observerRef.current?.observe(el);
    }
  }, []);

  return { activeSection, createSectionRef };
};
