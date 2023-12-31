import { useEffect, useState, useRef } from "react";

export default function useVisibility<T extends HTMLElement>(
  offset = 0,
): [boolean, React.RefObject<T>] {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = useRef<T>(null)

  const onScroll = () => {
    if (!currentElement.current) {
      setIsVisible(false)
      return
    }
    const top = currentElement.current.getBoundingClientRect().top
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight)
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true)
    return () => document.removeEventListener('scroll', onScroll, true)
  })

  return [isVisible, currentElement]
}
