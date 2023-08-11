export const MIN_RADIUS = 80;
export const CANVAS_SIZE = 450;

export type Position = {
  x: number,
  y: number,
}

export const generatePosition = (angle: number, radius: number, offset: Position = { x: 0, y: 0 }): Position => ({
  x: offset.x + Math.cos((2 * Math.PI * angle) / 360) * radius,
  y: offset.y + Math.sin((2 * Math.PI * angle) / 360) * radius,
})
