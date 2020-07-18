// Basic
export const PyramidSH = (baseEdgeLength: number, pyramidEdgeLength: number): number => (
  Math.sqrt(((pyramidEdgeLength**2) - (baseEdgeLength**2)) / 4)
)
export const PyramidHeight = (baseEdgeLength: number, pyramidEdgeLength: number): number => (
  Math.sqrt(((pyramidEdgeLength**2) - (baseEdgeLength**2)) / 2)
)
export const PyramidSALateral = (baseEdgeLength: number, slantHeight: number): number => 2 * baseEdgeLength * slantHeight
export const PyramidSATotal = (baseEdgeLength: number, slantHeight: number): number => baseEdgeLength * ((2 * slantHeight) + baseEdgeLength)
export const PyramidV = (baseEdgeLength: number, height: number): number => ((baseEdgeLength**2) * height) / 3

// Frustum
export const PyramidFrustumSALateral = (slantHeight: number, basePerimeter1: number, basePerimeter2: number): number => (
  (slantHeight * (basePerimeter1 + basePerimeter2)) / 2
)
export const PyramidFrustumV = (slantHeight: number, baseArea1: number, baseArea2: number): number => (
  (slantHeight * (baseArea1 + baseArea2 + Math.sqrt(baseArea1 * baseArea2))) / 3
)
