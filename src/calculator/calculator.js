export const calculator = {
  add: (num1, num2) => {
    if (!num1 && !num2) {
      throw new Error('You have entered no numbers, please input two numbers')
    } else if (!num1 || !num2) {
      throw new Error('Please enter two input numbers')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Make sure both inputs are numbers')
    }
    return num1 + num2
  },

  subtract: (num1, num2) => {
    if (!num1 && !num2) {
      throw new Error('You have entered no numbers, please input two numbers')
    } else if (!num1 || !num2) {
      throw new Error('Please enter two input numbers')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Make sure both inputs are numbers')
    }
    return num1 - num2
  },

  divide: (num1, num2) => {
    if (!num1 && !num2) {
      throw new Error('You have entered no numbers, please input two numbers')
    } else if (!num1 || !num2) {
      throw new Error('Please enter two input numbers')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Make sure both inputs are numbers')
    }
    return num1 / num2
  },

  multiply: (num1, num2) => {
    if (!num1 && !num2) {
      throw new Error('You have entered no numbers, please input two numbers')
    } else if (!num1 || !num2) {
      throw new Error('Please enter two input numbers')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Make sure both inputs are numbers')
    }
    return num1 * num2
  }
}
