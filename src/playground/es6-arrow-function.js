const square = function(x) {
    return x * x;
};

// Functions can be named (i.e. const removed, can still reference)
function squareNamed(x) {
    return x * x;
};

// Arrow functions cannot be named

// return value is implicit
const cubed = (x) => x * x * x;

// Can also be more than one line if necessary (just like scala)
// const cubed = (x) => {
//     return x * x * x;
// };

console.log(square(5));
console.log(squareNamed(6));
console.log(cubed(7));

// Lecture 14 challenge
// User arrow functions
// getFirstName from es6-let-const.js as arrow function

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log('Joe Lock\'s first name is', getFirstName('Joe Lock'));