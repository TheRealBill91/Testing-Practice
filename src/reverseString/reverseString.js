export const reverseString = (string) => {
  const reverseArr = [...string].reverse()
  const reversedString = reverseArr.join('')
  return reversedString
}
