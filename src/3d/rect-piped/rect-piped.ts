// Rectangular Parallelepiped
export const RectParallelepipedDiagonal = (edge1: number, edge2: number, edge3: number): number => (
  Math.sqrt((edge1**2) + (edge2**2) + (edge3**2))
)
export const RectParallelepipedSATotal = (edge1: number, edge2: number, edge3: number): number => (
  2 * ((edge1*edge2) + (edge2*edge3) + (edge3*edge1))
)
export const RectParallelepipedV = (edge1: number, edge2: number, edge3: number): number => edge1 * edge2 * edge3
