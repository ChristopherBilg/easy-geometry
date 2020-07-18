// Basic
export const CircleCircumference = (radius: number): number => 2 * Math.PI * radius
export const CircleArea = (radius: number): number => Math.PI * (radius**2)

// Arc
export const CircleArcLengthFromTheta = (radius: number, theta: number): number => radius * theta
export const CircleArcLengthFromAlpha = (radius: number, alpha: number): number => radius * alpha * (Math.PI / 180)

// Segment
// TODO

// Sector
export const CircleSectorAreaFromArcLength = (radius: number, arcLength: number): number => radius * arcLength / 2
export const CircleSectorAreaFromTheta = (radius: number, theta: number): number => (radius**2) * theta / 2
export const CircleSectorAreaFromAlpha = (radius: number, alpha: number): number => (radius**2) * alpha * (Math.PI / 360)
