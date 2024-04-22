import React from "react";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
  className?: string;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({ children, id, className }, ref) => (
  <div 
    className={`relative py-40 w-full h-dvh min-h-fit ${className}`}
    id={id ? id : undefined}
    ref={ref}
  >
    {children}
  </div>
))

Section.displayName = "Section";

export default Section;
