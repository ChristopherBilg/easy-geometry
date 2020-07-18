import * as sphere from './sphere'

describe('3D Sphere Tests', () => {
  describe('Basic', () => {
    test('volume should be correct given 0 as input', () => expect(sphere.SphereV(0)).toBe(0))
    test('volume should be correct given -10 as input', () => expect(sphere.SphereV(-10)).toBe(-4188.790204786391))
    test('volume should be correct given 5 as input', () => expect(sphere.SphereV(5)).toBe(523.5987755982989))

    test('surface area should be correct given 0 as input', () => expect(sphere.SphereSA(0)).toBe(0))
    test('surface area should be correct given -10 as input', () => expect(sphere.SphereSA(-10)).toBe(1256.6370614359173))
    test('surface area should be correct given 5 as input', () => expect(sphere.SphereSA(5)).toBe(314.1592653589793))
  })

  describe('Sector', () => {
    test('volume should be correct given 0, 0 as input', () => expect(sphere.SphereSectorV(0, 0)).toBe(0))
    test('volume should be correct given 5, 10 as input', () => expect(sphere.SphereSectorV(5, 10)).toBe(523.5987755982989))
    test('volume should be correct given 10, 5 as input', () => expect(sphere.SphereSectorV(10, 5)).toBe(1047.1975511965977))
    test('volume should be correct given 5, -5 as input', () => expect(sphere.SphereSectorV(5, -5)).toBe(-261.79938779914943))
    test('volume should be correct given -5, 5 as input', () => expect(sphere.SphereSectorV(-5, 5)).toBe(261.79938779914943))

    test('surface area should be correct given 0, 0 as input', () => expect(sphere.SphereSectorSA(0, 0)).toBe(0))
    test('surface area should be correct given 5, 10 as input', () => expect(sphere.SphereSectorSA(5, 10)).toBe(314.1592653589793))
    test('surface area should be correct given 10, 5 as input', () => expect(sphere.SphereSectorSA(10, 5)).toBe(314.1592653589793))
    test('surface area should be correct given 5, -5 as input', () => expect(sphere.SphereSectorSA(5, -5)).toBe(-157.07963267948966))
    test('surface area should be correct given -5, 5 as input', () => expect(sphere.SphereSectorSA(-5, 5)).toBe(-157.07963267948966))
  })

  describe('Cap', () => {
    test('volume should be correct given 0, 0 as input', () => expect(sphere.SphereCapV(0, 0)).toBe(0))
    test('volume should be correct given 5, 10 as input', () => expect(sphere.SphereCapV(5, 10)).toBe(916.2978572970229))
    test('volume should be correct given 10, 5 as input', () => expect(sphere.SphereCapV(10, 5)).toBe(850.8480103472356))
    test('volume should be correct given 5, -5 as input', () => expect(sphere.SphereCapV(5, -5)).toBe(-261.79938779914943))
    test('volume should be correct given -5, 5 as input', () => expect(sphere.SphereCapV(-5, 5)).toBe(261.79938779914943))

    test('surface area should be correct given 0, 0 as input', () => expect(sphere.SphereCapSA(0, 0)).toBe(0))
    test('surface area should be correct given 5, 10 as input', () => expect(sphere.SphereCapSA(5, 10)).toBe(314.1592653589793))
    test('surface area should be correct given 10, 5 as input', () => expect(sphere.SphereCapSA(10, 5)).toBe(314.1592653589793))
    test('surface area should be correct given 5, -5 as input', () => expect(sphere.SphereCapSA(5, -5)).toBe(-157.07963267948966))
    test('surface area should be correct given -5, 5 as input', () => expect(sphere.SphereCapSA(-5, 5)).toBe(-157.07963267948966))

    test('radius should be correct given 0, 0 as input', () => expect(sphere.SphereCapR(0, 0)).toBe(0))
    test('radius should be correct given 5, 10 as input', () => expect(sphere.SphereCapR(5, 10)).toBe(6.25))
    test('radius should be correct given 10, 5 as input', () => expect(sphere.SphereCapR(10, 5)).toBe(12.5))
    test('radius should be correct given 5, -5 as input', () => expect(sphere.SphereCapR(5, -5)).toBe(-5))
    test('radius should be correct given -5, 5 as input', () => expect(sphere.SphereCapR(-5, 5)).toBe(5))
  })

  describe('Segment / Zone', () => {
    test('volume should be correct given 0, 0, 4 as input', () => expect(sphere.SphereSegmentV(0, 0, 0)).toBe(0))
    test('volume should be correct given 5, 10, 3 as input', () => expect(sphere.SphereSegmentV(5, 10, 3)).toBe(603.1857894892403))
    test('volume should be correct given 10, 5, -3 as input', () => expect(sphere.SphereSegmentV(10, 5, -3)).toBe(-603.1857894892403))
    test('volume should be correct given 5, -5, 10 as input', () => expect(sphere.SphereSegmentV(5, -5, 10)).toBe(1308.996938995747))
    test('volume should be correct given -5, 5, 6 as input', () => expect(sphere.SphereSegmentV(-5, 5, 6)).toBe(584.3362335677015))

    test('surface area should be correct given 0, 0 as input', () => expect(sphere.SphereSegmentSA(0, 0)).toBe(0))
    test('surface area should be correct given 5, 10 as input', () => expect(sphere.SphereSegmentSA(5, 10)).toBe(314.1592653589793))
    test('surface area should be correct given 10, 5 as input', () => expect(sphere.SphereSegmentSA(10, 5)).toBe(314.1592653589793))
    test('surface area should be correct given 5, -5 as input', () => expect(sphere.SphereSegmentSA(5, -5)).toBe(-157.07963267948966))
    test('surface area should be correct given -5, 5 as input', () => expect(sphere.SphereSegmentSA(-5, 5)).toBe(-157.07963267948966))
  })

  // TODO
  describe('Lune', () => {
    //
  })
})
