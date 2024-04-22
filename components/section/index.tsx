import React from "react";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
  className?: string;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ children, id, className }, ref) => (
  <div 
    className={`relative w-full h-dvh min-h-fit flex justify-center items-center ${className}`}
    id={id ? id : undefined}
    ref={ref}
  >
    {children}
  </div>
))

Section.displayName = "Section";

export default Section;
