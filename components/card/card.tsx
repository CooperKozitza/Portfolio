import React from "react"

import styles from "./card.module.css"

type CardProps = {
  children: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
};

const Card = ({children, className, style}: CardProps) => (
  <div className={`${styles.card} ${className}`} style={style}>
    {children}
  </div>
)

export default Card;
