import {
  pythagoreanTheorem
} from './10-my-first-unit-test'

describe('10-my-first-unit-test', () => {
  it('should return the hypotenuse of right triangle', () => {
    expect(pythagoreanTheorem(3, 4)).toEqual(5)
  })
  it('should return the hypotenuse of right triangle', () => {
    expect(pythagoreanTheorem(16, 63)).toEqual(65)
  })
  it('should return the hypotenuse of right triangle', () => {
    expect(pythagoreanTheorem(65, 72)).toEqual(97)
  })
})