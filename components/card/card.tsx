import React from "react"

import style from "./card.module.css"

const Card = ({
  className,
  children,
}: {
  className?: string,
  children: React.ReactNode,
}) => (
  <div className={`p-10 ${style.glass} ${className}`}>
      {children}
  </div>
)

export default Card;
