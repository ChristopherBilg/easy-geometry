// Circular Cylinder
export const CylinderSALateral = (lateralEdgeLength: number, sectionPerimeter: number): number => lateralEdgeLength * sectionPerimeter
export const CylinderSATotal = (lateralEdgeLength: number, sectionPerimeter: number, areaOfBase: number): number => (lateralEdgeLength * sectionPerimeter) + (2 * areaOfBase)
export const CylinderVFromBaseArea = (height: number, areaOfBase: number): number => height * areaOfBase
export const CylinderVFromSectionArea = (lateralEdgeLength: number, areaOfSection: number): number => lateralEdgeLength * areaOfSection

// Right Circular Cylinder
export const RightCylinderSALateral = (radiusOfBase: number, height: number): number => 2 * Math.PI * radiusOfBase * height
export const RightCylinderSATotal = (radiusOfBase: number, height: number): number => 2 * Math.PI * (radiusOfBase * (radiusOfBase + height))
export const RightCylinderV = (radiusOfBase: number, height: number): number => Math.PI * (radiusOfBase**2) * height
