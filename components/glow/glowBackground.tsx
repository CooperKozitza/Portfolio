import Glow from "./glow";
import { Position } from "./glowUtils"

import styles from "./glow.module.css"

const generatePositions = (count: number, max: number = 100): Position[] => {
  const positions: Position[] = [];
  for (let y = 0; y < 100; y += 100 / count) {
    for (let x = 0; x < 100; x += 100 / count) {
      if (x + y < max) {
        positions.push({
          x: x - 30,
          y: y - 30,
        });
      }
    }
  }
  return positions;
}

const colors: string[] = [
  "#ff006e",
  "#8338ec",
  "#3a86ff",
  "#fb5607",
];

const GlowBackground = () => {
  const backgroundPositions = generatePositions(10, 120);
  const foregroundPositions = generatePositions(4, 60);

  return (
    <>
      <div className="w-screen overflow-hidden absolute top-0 right-0" style={{ height: 'calc(70vh + 6rem)', zIndex: '-1' }}>
        {backgroundPositions.map((pos, index) => (
          <Glow key={index} color={colors[index % colors.length]} opacity={1} className={`absolute ${styles.rotate}`} style={{
            top: `${pos.y}%`,
            left: `${pos.x}%`,
          }} />
        ))}
      </div>
      <div className="w-screen overflow-hidden absolute top-0 right-0" style={{ height: 'calc(70vh + 6rem)', zIndex: '1' }}>
        {foregroundPositions.map((pos, index) => (
          <Glow key={index} color={colors[index % colors.length]} opacity={0.5} className={`absolute bg-opacity-30 ${styles.rotate}`} style={{
            top: `${pos.y}%`,
            left: `${pos.x}%`,
          }} />
        ))}
      </div>
    </>
  )
}

export default GlowBackground;
