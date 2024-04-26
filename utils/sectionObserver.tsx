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
    if (isProgrammaticScroll.current) return;

    const scrollDelta = window.scrollY - prevScroll.current;

    scrollDirection.current = scrollDelta > 0 ? 'down' : 'up';
    prevScroll.current = window.scrollY;
  }, []);

  useEffect(() => {
    if (!sectionRefs.current) return;

    prevScroll.current = window.scrollY;
    scrollTop.current = window.scrollY;

    // Create a new IntersectionObserver
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target.id;

          if (scrollDirection.current === 'down' && target !== activeSection) {
            setActiveSection(target);
          } else if (scrollDirection.current === 'up' && target !== activeSection) {
            setActiveSection(target);
          }
        }
      });
    }, { threshold: 0.1 });

    const currentObserver = observerRef.current;
    const currentSections = sectionRefs.current;

    // Observe each section
    Object.values(currentSections).forEach((ref) => {
      if (ref) currentObserver.observe(ref);
    });

    // Scroll handling with timeout to debounce rapid scrolling
    const scrollHandler = () => {
      if (isProgrammaticScroll.current) {
        if (scrollDirection.current === 'down' && window.scrollY > scrollTop.current) {
          window.scrollTo({ top: scrollTop.current });
        } else if (scrollDirection.current === 'up' && window.scrollY < scrollTop.current) {
          window.scrollTo({ top: scrollTop.current });
        }
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(handleScroll, 100); // Adjusted timeout
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      // Clean up observers and event listeners
      Object.values(currentSections).forEach((ref) => {
        if (ref) currentObserver.unobserve(ref);
      });
      currentObserver.disconnect();

      window.removeEventListener('scroll', scrollHandler);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!activeSection || !sectionRefs.current) return;

    const currentRef = sectionRefs.current[activeSection];
    if (currentRef) {
      const sectionRect = currentRef.getBoundingClientRect();

      let top = 0;
      const scrollAlign = currentRef.dataset.scrollAlign || 'start';

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
        behavior: 'smooth',
      });

      isProgrammaticScroll.current = true;
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 500);
    }
  }, [activeSection]);

  return { activeSection, setActiveSection };
};
