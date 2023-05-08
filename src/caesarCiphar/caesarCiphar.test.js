import { caesarCiphar } from './caesarCipher'

test('positive shift', () => {
  expect(caesarCiphar('Yoyo!', 24)).toBe('Wmwm!')
})

test('negative shift', () => {
  expect(caesarCiphar('Hey', -10)).toBe('Xuo')
})

test('Punctuation and spaces', () => {
  expect(caesarCiphar('AI is cool!!!', 12)).toBe('MU ue oaax!!!')
})

test('Wrapping (z to a)', () => {
  expect(caesarCiphar('xtra cool', 12)).toBe('jfdm oaax')
})

test('shift of 0', () => {
  expect(caesarCiphar('The same thing', 0)).toBe('The same thing')
})

test('no string is entered, return empty string', () => {
  expect(caesarCiphar('', 0)).toBe('')
})

test('non alphabetic characters', () => {
  expect(caesarCiphar('7&6^$34k', -5)).toBe('7&6^$34f')
})
