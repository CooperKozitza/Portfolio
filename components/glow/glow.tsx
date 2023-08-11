import { CSSProperties } from "react";
import { CANVAS_SIZE, MIN_RADIUS, Position, generatePosition } from "./glowUtils"; 

const center: Position = {
  x: CANVAS_SIZE / 2,
  y: CANVAS_SIZE / 2,
}

const generatePath = (steps: number): string => {
  let lastRadius = MIN_RADIUS + Math.random() * (CANVAS_SIZE / 2 - MIN_RADIUS);
  const start = generatePosition(0, lastRadius, center);
  let path = `M ${start.x} ${start.y} `;

  for (let i = 1; i < steps + 1; i++) {
    let radius = lastRadius;
    let angle = (i * 360) / steps;

    const pos = generatePosition(angle, radius, center);
    const midPos = generatePosition((((i - 1) * 360 / steps) + angle) / 2, (radius + lastRadius) / 2, center);

    lastRadius = MIN_RADIUS + Math.random() * (CANVAS_SIZE / 2 - MIN_RADIUS);
    path += `Q ${midPos.x} ${midPos.y}, ${pos.x} ${pos.y} `;
  }

  path += "Z";
  return path;
}

const Glow = ({
  color,
  className,
  style,
  opacity = 1,
}: {
  color: string,
  className?: string,
  style?: CSSProperties 
  opacity?: number
}) => {
  const path = generatePath(6);

  return (
    <svg width={CANVAS_SIZE} height={CANVAS_SIZE} className={`filter blur-lg ${className}`} style={style}>
      <path d={path} fill={color} opacity={opacity} />
    </svg>
  )
}

export default Glow;
