// Basic
export const ConeV = (radius: number, height: number): number => Math.PI * (radius**2) * (height / 3)
export const ConeSH = (radius: number, height: number): number => Math.sqrt((radius**2) + (height**2))
export const ConeBaseArea = (radius: number): number => Math.PI * (radius**2)
export const ConeSALateral = (radius: number, slantHeight: number): number => Math.PI * radius * slantHeight
export const ConeSATotal = (radius: number, slantHeight: number): number => Math.PI * (radius * (radius + slantHeight))

// Frustum
export const ConeFrustumV = (radius1: number, radius2: number, height: number): number => Math.PI * ((radius1**2) + (radius1 * radius2) + (radius2**2)) * (height / 3)
export const ConeFrustumSH = (radius1: number, radius2: number, height: number): number => Math.sqrt(((radius1 - radius2)**2) + (height**2))
export const ConeFrustumSALateral = (radius1: number, radius2: number, slantHeight: number): number => Math.PI * (radius1 + radius2) * slantHeight
export const ConeFrustumSATotal = (radius1: number, radius2: number, slantHeight: number): number => Math.PI * ((radius1 * (radius1 + slantHeight)) + (radius2 * (radius2 + slantHeight)))
