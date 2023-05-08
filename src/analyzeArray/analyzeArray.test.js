import { analyzeArr } from './analyzeArray'

test('arr average, minimum, maximum, and length', () => {
  const object = analyzeArr([2, 2, 2, 2, 2])
  //   const averageResult = object.average([2, 2, 2, 2, 2])
  expect(object).toEqual({ average: 2, minimum: 2, maximum: 2, length: 5 })
})

test('arr average, minimum, maximum, and length, part 2', () => {
  const object = analyzeArr([5, 5, 5, 5, 5, 5])
  //   const averageResult = object.average([2, 2, 2, 2, 2])
  expect(object).toEqual({ average: 5, minimum: 5, maximum: 5, length: 6 })
})

test('arr average, minimum, maximum, and length, part 2', () => {
  const object = analyzeArr([5])
  //   const averageResult = object.average([2, 2, 2, 2, 2])
  expect(object).toEqual({ average: 5, minimum: 5, maximum: 5, length: 1 })
})

test('throw error with non number value in array', () => {
  expect(() => analyzeArr(['non-number'])).toThrow(
    'All values entered must be numbers'
  )
})

test('throw error with empty array', () => {
  expect(() => analyzeArr([])).toThrow('You must enter at least one number')
})
