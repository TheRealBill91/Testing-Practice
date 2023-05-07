import { reverseString } from './reverseString'

test('String is reversed', () => {
  expect(reverseString('hockey')).toBe('yekcoh')
})

test('reverses multiple words', () => {
  expect(reverseString('hello there')).toEqual('ereht olleh')
})

test('String is reversed, first letter is capitalized', () => {
  expect(reverseString('Hockey')).toBe('yekcoH')
})

test('works with blank strings', () => {
  expect(reverseString('')).toEqual('')
})

test('String is reversed, contains ', () => {
  expect(reverseString('Hockey')).toBe('yekcoH')
})

test('works with numbers and punctuation', () => {
  expect(reverseString('123! abc!')).toEqual('!cba !321')
})
