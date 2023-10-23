// concatenating arrays

// concat method
const primeNumbers = [1,2,3,5]
const evenNumbers = [4,6,8,10]

const numbers = primeNumbers.concat(evenNumbers);

// spread operator

const numbers2 = [...primeNumbers, ...evenNumbers, ...[7, 11, 13]]