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

    const box = currentElement.current.getBoundingClientRect()

    const topVisible = box.top + offset <= window.innerHeight && box.top >= 0;
    const bottomVisible = box.bottom - offset >= 0 && box.bottom <= window.innerHeight;
    const middleVisible = (box.top + box.height / 2 + offset <= window.innerHeight) && (box.top + box.height / 2 >= 0);

    setIsVisible(topVisible || bottomVisible || middleVisible);
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true)
    return () => document.removeEventListener('scroll', onScroll, true)
  })

  return [isVisible, currentElement]
}
