// Basic
export const EllipseArea = (semiAxis_a: number, semiAxis_b: number): number => Math.PI * semiAxis_a * semiAxis_b
export const EllipseCircumference = (semiAxis_a: number, semiAxis_b: number): number => {
  const innerValue = (semiAxis_a - semiAxis_b) / (semiAxis_a + semiAxis_b)
  const value = Math.PI * (semiAxis_a + semiAxis_b) * (1 + ((3 * (innerValue**2)) / (10 + Math.sqrt(4 - (3 * (innerValue**2))))))
  return value
}
export const EllipseEccentricity = (semiAxis_a: number, semiAxis_b: number): number => Math.sqrt((semiAxis_a**2) - (semiAxis_b**2)) / semiAxis_a
