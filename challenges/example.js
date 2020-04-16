// this is an example problem that takes in 2 numbers and return their sum

function example(num1, num2) {
  return num1 + num2
}

var testcases = [
  {
    input: [1,1],
    output: 2,
  },
  {
    input: [-1,1],
    output: 0,
  },
  {
    input: [12345,54321],
    output: 66666,
  },
]

require('../test')(example, testcases)