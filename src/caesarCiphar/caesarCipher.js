export const caesarCiphar = (string, shift) => {
  let newString
  if (shift < 0) {
    newString = negativeShift(string, shift)
    return newString
  } else if (shift > 0) {
    newString = positiveShift(string, shift)
    return newString
  } else if (shift === 0 || string === null) {
    return string
  }
}

const positiveShift = (string, shift) => {
  const stringArr = [...string]
  const joined = stringArr.join('')
  const newStringArr = []
  const lettersArr = Object.entries(alphabetMap).map((arr) => arr[0])
  const numberArr = Object.entries(alphabetMap).map((arr) => arr[1])
  stringArr.forEach((character) => {
    let char = character
    const nonAlphabetic = handleNonAlphabetic(char)
    if (char === ' ') {
      return newStringArr.push(char)
    } else if (!nonAlphabetic) {
      return newStringArr.push(char)
    }
    const upperCase = isUpperCase(char)

    // eslint-disable-next-line no-unused-expressions
    if (upperCase === true) {
      char = char.toLowerCase()
    }
    const targetLetterIndex = alphabetMap[char]
    let newCharNumber = targetLetterIndex + shift
    // handles wrapping from z to a (1 to 26)
    if (newCharNumber > 26) {
      const leftOver = newCharNumber - 26
      newCharNumber = leftOver
    } else if (newCharNumber < 1) {
      const leftOver = 1 - newCharNumber
      newCharNumber = 26 - leftOver
    }
    let newChar = lettersArr[newCharNumber - 1]
    if (upperCase) {
      newChar = newChar.toUpperCase()
    }
    newStringArr.push(newChar)
  })
  return newStringArr.join('')
}

const negativeShift = (string, shift) => {
  const stringArr = [...string]
  const joined = stringArr.join('')
  const newStringArr = []
  const lettersArr = Object.entries(alphabetMap).map((arr) => arr[0])
  const numberArr = Object.entries(alphabetMap).map((arr) => arr[1])
  stringArr.forEach((character) => {
    let char = character
    const nonAlphabetic = handleNonAlphabetic(char)
    if (char === ' ') {
      return newStringArr.push(char)
    } else if (!nonAlphabetic) {
      return newStringArr.push(char)
    }
    const upperCase = isUpperCase(char)

    // eslint-disable-next-line no-unused-expressions
    if (upperCase === true) {
      char = char.toLowerCase()
    }
    const targetLetterIndex = alphabetMap[char]
    let newCharNumber = targetLetterIndex + shift
    // handles wrapping from z to a (1 to 26)
    if (newCharNumber > 26) {
      const leftOver = newCharNumber - 26 - 1
      newCharNumber = leftOver
    } else if (newCharNumber < 1) {
      // minus 1 to align new char number to alphabet
      // map index
      const leftOver = newCharNumber
      newCharNumber = 26 + leftOver
    }
    let newChar = lettersArr[newCharNumber - 1]
    if (upperCase) {
      newChar = newChar.toUpperCase()
    }
    newStringArr.push(newChar)
  })
  return newStringArr.join('')
}

const isUpperCase = (char) => {
  return char === char.toUpperCase()
}

const handleNonAlphabetic = (char) => {
  const result = /[a-zA-Z]/.test(char)
  return result
}

const alphabetMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

caesarCiphar('Yoyo!', 24)
