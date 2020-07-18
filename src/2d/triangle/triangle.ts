// All triangles ( generic )
export const TrianglePerim = (side1: number, side2: number, side3: number): number => side1 + side2 + side3
export const TriangleSemiPerim = (side1: number, side2: number, side3: number): number => (side1 + side2 + side3) / 2
export const TriangleArea = (side1: number, side2: number, side3: number): number => {
  const semi = (side1 + side2 + side3) / 2
  const value = Math.sqrt(semi * (semi - side1) * (semi - side2) * (semi - side3))
  return value
}
export const TriangleRadiusOutside = (side1: number, side2: number, side3: number): number => (side1 * side2 * side3) / (4 * TriangleArea(side1, side2, side3))
export const TriangleRadiusInside = (side1: number, side2: number, side3: number): number => (2 * TriangleArea(side1, side2, side3)) / (side1 + side2 + side3)
