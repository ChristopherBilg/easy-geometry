// All triangles ( generic )
export const QuadrilateralPerim = (side1: number, side2: number, side3: number, side4: number): number => side1 + side2 + side3 + side4
export const QuadrilateralSemiPerim = (side1: number, side2: number, side3: number, side4: number): number => (side1 + side2 + side3 + side4) / 2
export const QuadrilateralArea = (side1: number, side2: number, side3: number, side4: number): number => {
  const diagonal_p = side2 * side4
  const diagonal_q = side1 * side3
  const innerValue = (4 * ((diagonal_p**2) * (diagonal_q**2))) - (((side2**2) + (side4**2) - (side1**2) - (side3**2))**2)
  const value = Math.sqrt(innerValue) / 4
  return value
}
