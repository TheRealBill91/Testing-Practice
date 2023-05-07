import { calculator } from './calculator'

// addition tests

test('adds two numbers', () => {
  const result = calculator.add(2, 2)

  expect(result).toBe(4)
})

test('throw error with missing number', () => {
  expect(() => calculator.add(1)).toThrow('Please enter two input numbers')
})

test('throw error with no numbers', () => {
  expect(() => calculator.add()).toThrow(
    'You have entered no numbers, please input two numbers'
  )
})

test('throw error with non number input', () => {
  expect(() => calculator.add(1, 'test')).toThrow(
    'Make sure both inputs are numbers'
  )
})

// subtraction tests

test('subtracts two numbers', () => {
  const result = calculator.subtract(4, 2)

  expect(result).toBe(2)
})

test('throw error with missing number', () => {
  expect(() => calculator.subtract(1)).toThrow('Please enter two input numbers')
})

test('throw error with no numbers', () => {
  expect(() => calculator.subtract()).toThrow(
    'You have entered no numbers, please input two numbers'
  )
})

test('throw error with non number input', () => {
  expect(() => calculator.subtract(1, 'test')).toThrow(
    'Make sure both inputs are numbers'
  )
})

// division tests

test('divides two numbers', () => {
  const result = calculator.divide(4, 2)

  expect(result).toBe(2)
})

test('throw error with missing number', () => {
  expect(() => calculator.divide(1)).toThrow('Please enter two input numbers')
})

test('throw error with no numbers', () => {
  expect(() => calculator.divide()).toThrow(
    'You have entered no numbers, please input two numbers'
  )
})

test('throw error with non number input', () => {
  expect(() => calculator.divide(1, 'test')).toThrow(
    'Make sure both inputs are numbers'
  )
})

// multiplication tests

test('divides two numbers', () => {
  const result = calculator.multiply(4, 2)

  expect(result).toBe(8)
})

test('throw error with missing number', () => {
  expect(() => calculator.multiply(1)).toThrow('Please enter two input numbers')
})

test('throw error with no numbers', () => {
  expect(() => calculator.multiply()).toThrow(
    'You have entered no numbers, please input two numbers'
  )
})

test('throw error with non number input', () => {
  expect(() => calculator.multiply(1, 'test')).toThrow(
    'Make sure both inputs are numbers'
  )
})
