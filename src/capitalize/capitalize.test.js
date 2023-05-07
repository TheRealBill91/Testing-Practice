import { capitalize } from './capitalize.js'

test('first letter in string is capitalized', () => {
  expect(capitalize('hockey')).toBe('Hockey')
})

test('throw error with empty string input', () => {
  expect(() => capitalize('')).toThrow('No word has been entered')
})

test('first letter in string is capitalized', () => {
  expect(capitalize('Hockey')).toBe('Hockey')
})

test('Uppercase letters (besides first letter) converted to lower case', () => {
  expect(capitalize('HOCKEY')).toBe('Hockey')
})

test('non alphabetic chars removed', () => {
  expect(capitalize('HOCK53E3^&Y')).toBe('Hockey')
})
