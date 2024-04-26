"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface SectionRefs {
  [key: string]: HTMLDivElement | null;
}

export default function useSectionScroll(ref: React.RefObject<SectionRefs>) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const prevScroll = useRef(0);
  const scrollDirection = useRef<'down' | 'up'>('down');
  const isProgrammaticScroll = useRef(false);
  const scrollTop = useRef(0);

  const sectionRefs = useRef<SectionRefs>(ref.current);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const scrollDelta = window.screenY - prevScroll.current;
    
    if (isProgrammaticScroll) {
      switch (scrollDirection.current) {
        case 'up':
          if (window.scrollY < scrollTop.current) {
            window.scrollTo({top: scrollTop.current});
          }
          break;
        case 'down':
        default:
          if (window.scrollY > scrollTop.current) {
            window.scrollTo({top: scrollTop.current});
          }
          break;
      }
    } else {
      scrollDirection.current = scrollDelta > 0 ? 'down' : 'up';
      prevScroll.current = window.scrollY;
    }
  }, []);

  useEffect(() => {
    if (!sectionRefs.current) return;

    prevScroll.current = window.scrollY;
    scrollTop.current = window.scrollY;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target.id;

          if (entry.isIntersecting && scrollDirection.current === 'down' && target !== activeSection) {
            setActiveSection(entry.target.id);
          } else if (entry.isIntersecting && scrollDirection.current === 'up' && target !== activeSection) {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, { threshold: 0.1 });

    const currentObserver = observerRef.current;
    const currentSections = sectionRefs.current;

    Object.values(currentSections).forEach(ref => {
      if (ref) currentObserver.observe(ref);
    });

    window.addEventListener('scroll', () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(handleScroll, 100);
    });

    return () => {
      Object.values(currentSections).forEach(ref => {
        if (ref) currentObserver.unobserve(ref);
      });
      currentObserver.disconnect();

      window.removeEventListener('scroll', handleScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, sectionRefs.current]);

  useEffect(() => {
    if (!activeSection || !sectionRefs.current) return;

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

      scrollTop.current = top;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 1000);
    }
  }, [activeSection]);



  return { activeSection, setActiveSection };
};
