"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface SectionRefs {
  [key: string]: HTMLDivElement | null;
}

export default function useSectionScroll() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const prevScroll = useRef(0);
  const scrollDirection = useRef<'down' | 'up'>('down');
  const isProgrammaticScroll = useRef(false);

  const sectionRefs = useRef<SectionRefs>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const scrollDelta = window.screenY - prevScroll.current;
    
    if (!isProgrammaticScroll) {
      scrollDirection.current = scrollDelta > 0 ? 'down' : 'up';
      prevScroll.current = window.scrollY;
    }
  }, []);

  useEffect(() => {
    prevScroll.current = window.scrollY;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target.id;

          if (entry.isIntersecting && scrollDirection.current === 'down' && entry.target.id !== activeSection) {
            setActiveSection(entry.target.id);
          } else if (entry.isIntersecting && scrollDirection.current === 'up' && entry.target.id !== activeSection) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, { threshold: [0.1, 0.9] });

    const currentObserver = observerRef.current;

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) currentObserver.observe(ref);
    });

    window.addEventListener('scroll', () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(handleScroll, 100);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref) currentObserver.unobserve(ref);
      });
      currentObserver.disconnect();

      window.removeEventListener('scroll', handleScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!activeSection) return;

    const currentRef = sectionRefs.current[activeSection];
    if (currentRef) {
      isProgrammaticScroll.current = true;

      const currentActiveSection = sectionRefs.current[activeSection];

      if (!currentActiveSection) return;

      const scrollAlign = currentActiveSection.dataset.scrollAlign || 'start';
      const sectionRect = currentActiveSection.getBoundingClientRect();

      let top = 0;
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

      window.scrollTo({
        top,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 1000);
    }
  }, [activeSection]);


  const createSectionRef = useCallback((id: string) => (el: HTMLDivElement | null) => {
    if (el) {
      sectionRefs.current[id] = el;
      observerRef.current?.observe(el);
    }
  }, []);

  return { activeSection, createSectionRef };
};
