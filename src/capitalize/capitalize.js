export const capitalize = (value) => {
  if (value === '') {
    throw new Error('No word has been entered')
  }

  const lowerCase = value.toLowerCase()
  const valueArr = [...lowerCase]
  const onlyLetters = valueArr.filter((letter) => /[a-zA-Z]/.test(letter))
  const upperCase = onlyLetters.splice(0, 1).toString().toUpperCase()
  onlyLetters.splice(0, 0, upperCase)
  const finalValue = onlyLetters.join('')
  return finalValue
}

capitalize('Ho5c6ke&^y')
