// Basic
export const SphereV = (radius: number): number => (4/3) * Math.PI * (radius**3) || 0
export const SphereSA = (radius: number): number => 4 * Math.PI * (radius**2) || 0

// Sector
export const SphereSectorV = (radius: number, height: number): number => (2 * (Math.PI / 3)) * (radius**2) * height || 0
export const SphereSectorSA = (radius: number, height: number): number => 2 * Math.PI * radius * height || 0

// Cap
export const SphereCapV = (radius: number, height: number): number => (Math.PI / 6) * ((3 * (radius**2)) + (height**2)) * height || 0
export const SphereCapSA = (radius: number, height: number): number => 2 * Math.PI * radius * height || 0
export const SphereCapR = (radius: number, height: number): number => ((height**2) + (radius**2)) / (2 * height) || 0

// Segment (aka Zone)
export const SphereSegmentV = (baseRadius1: number, baseRadius2: number, height: number): number => (Math.PI / 6) * ((3 * (baseRadius1**2)) + (3 * (baseRadius2**2)) + (height**2)) * height || 0
export const SphereSegmentSA = (radius: number, height: number): number => 2 * Math.PI * radius * height || 0

// Lune
export const SphereLuneVFromTheta = (radius: number, theta: number): number => (2/3) * (radius**3) * theta || 0
export const SphereLuneSAFromTheta = (radius: number, theta: number): number => 2 * (radius**2) * theta || 0
export const SphereLuneVFromAlpha = (radius: number, alpha: number): number => (Math.PI / 270) * (radius**3) * alpha || 0
export const SphereLuneSAFromAlpha = (radius: number, alpha: number): number => (Math.PI / 90) * (radius**3) * alpha || 0
