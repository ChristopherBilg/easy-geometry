// Basic
export const EllipsoidV = (semiAxis_1: number,semiAxis_2: number, semiAxis_3: number): number => (
  (4 * Math.PI / 3) * semiAxis_1 * semiAxis_2 * semiAxis_3
)

// Ring Torus
export const RingTorusSA = (majorRadius: number, minorRadius: number): number => (
  4 * (Math.PI**2) * majorRadius * minorRadius
)
export const RingTorusV = (majorRadius: number, minorRadius: number): number => (
  2 * (Math.PI**2) * majorRadius * (minorRadius**2)
)

// Spherical Polygon
export const SphericalPolygonSAFromTheta = (radius: number, numSides: number, theta: number): number => (
  (theta - ((numSides - 2) * Math.PI)) * (radius**2)
)
export const SphericalPolygonSAFromAlpha = (radius: number, numSides: number, alpha: number): number => (
  (alpha - (180 * (numSides - 2))) * Math.PI * (radius**2) / 180
)
