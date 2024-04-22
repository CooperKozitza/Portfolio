"use client";

import { useRef, useEffect } from "react"

export default function useSmoothScrollTo(id: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = () => {
      if (ref.current && location.hash === id) {
        ref.current.scrollIntoView({behavior: 'smooth'});
      }
    }

    window.addEventListener('hashchange', listener, true);

    return () => {
      window.removeEventListener('hashchange', listener);
    }
  }, [id])

  return { 'data-anchor-id': id, ref }
}

