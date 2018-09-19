// arguments object - no longer bound with arrow functions

// arguments object normall accessible in old school functions
const add = function(a, b) {
    console.log(arguments); // These can contain things other than named 'a' and 'b'
    return a + b;
}

console.log(add(55, 1));
console.log(add(55, 1, 1000, 124523)) // arguments contains 1000 and 124523 as well as 'a' and 'b'

// No longer have access to arguments in arrow functions
const addArrow = (a, b) => {
    // console.log(arguments); // Causes reference error
    return a + b;
}

// "this" keyword - no longer bound with arrow functions

const user = {
    name: 'Joe',
    cities: ['Bristol', 'London'],
    // Cannot change this to arrow function as lose access to 'this.cities'
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        
        const that = this; // What an ugly hack
        // reference error, this.name not defined, fixed with above line
        this.cities.forEach(function (city) {
            console.log(that.name, 'has lived in', city);
        });

        // Alternative that works without this that hack
        this.cities.forEach((city) => {
            console.log(this.name, 'has lived in', city, 'no hack');
        });

        // Map example
        return this.cities.map((city) => this.name + ' has lived in ' + city);

    },
    // This is a way to convert it still giving access to 'this'
    alternativeMethod() {
        this.cities.forEach((city) => {
            console.log(this.name, 'has lived in', city, 'no hack');
        });
    }
}
console.log(user.printPlacesLived());

// Lecture 15 challenge

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())






