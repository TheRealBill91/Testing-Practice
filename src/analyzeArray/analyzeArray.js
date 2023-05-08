export const analyzeArr = (arr) => {
  const nonNumbers = arr.filter((value) => typeof value !== 'number')
  if (nonNumbers.length) {
    throw new Error('All values entered must be numbers')
  } else if (arr.length === 0) {
    throw new Error('You must enter at least one number')
  }
  return {
    average: arrAverage(arr),
    minimum: arrMin(arr),
    maximum: arrMax(arr),
    length: arrLength(arr)
  }
}

const arrAverage = (arr) => {
  const sumValues = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  const arrLength = arr.length
  const average = sumValues / arrLength
  return average
}

const arrMin = (arr) => {
  const sortedArr = arr.sort(compareNumbers)
  const minNumber = sortedArr.at(0)
  return minNumber
}

const arrMax = (arr) => {
  const sortedArr = arr.sort(compareNumbers)
  const maxNumber = sortedArr.at(-1)
  return maxNumber
}

const arrLength = (arr) => {
  return arr.length
}

function compareNumbers(a, b) {
  return a - b
}

// analyzeArr([2, 2, 2, 2, 2])

// const object =  analyzeArr([2, 2, 2, 2, 2,])
// console.log(object.average([2,2,2,2,2]))
