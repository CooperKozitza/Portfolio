import useVisibility from "@/utils/visible";
import React from "react";

const Timeline = ({ children }: { children: React.ReactNode[] }) => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>();

  return (
    <div className="relative w-full h-8" ref={currentElement}>
      <div className="absolute flex items-center size-full top-0 left-0">
        <div 
          className={`w-full border-2 border-black transition-transform rounded ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
          style={{transitionDelay: '1s', transitionDuration: '2s'}}
        ></div>
      </div>
      <div className="absolute flex justify-evenly items-center size-full top-0 left-0">
        {children.map((child, index) => (
          <div className="w-6 h-6 rounded-full border-4 border-black bg-white" key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline;
