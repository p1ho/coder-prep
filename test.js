module.exports = (func, testcases) => {
  for (let [index, testcase] of testcases.entries()) {
    console.log('--------------------------------------')
    let input = testcase.input.map(arg => JSON.stringify(arg)).join(', ')
    let result = JSON.stringify(func(...testcase.input))
    let expectedOutput = JSON.stringify(testcase.output)
    if (result === expectedOutput) {
      console.log(`Passed Testcase ${index+1}:`)
      console.log(`\tInput:`)
      console.log(`\t${input}`)
      console.log(`\tOutput:`)
      console.log(`\t${result}`)
    } else {
      console.error(`Failed Testcase ${index+1}:`)
      console.error(`\tInput:`)
      console.error(`\t${input}`)
      console.error(`\tExpected:`)
      console.error(`\t${expectedOutput}`)
      console.error(`\tActual:`)
      console.error(`\t${result}`)
    }
  }
  console.log('--------------------------------------')
};
