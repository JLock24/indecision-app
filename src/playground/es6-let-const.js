// vars
var nameVar = 'Joe';
var nameVar = 'Other';
console.log('nameVar', nameVar);

// let
let nameLet = 'Joe';
// let nameLet = 'Other'; Errors in console with duplicate error
console.log('nameLet', nameLet);

// const
const nameConst = 'Joe';
// const nameConst = 'Other'; // Errors in console with read-only
// nameConst = 'Other'; // Errors in console with duplicate error
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Dog';
    // const petName = 'Dog';
    // let petName = 'Dog';
    return petName;
}

// console.log(petName); // var/let/const petName is function scoped

//======================================
// Block level scoping
//======================================
// Bound to the scope of the block
// Get round restrictions by bringing it out of if block
// and reassigning in the if block

var fullName = 'Joe Lock';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log('if statement ar', firstName)
}

console.log('fistName var', firstName);

if (fullName) {
    const firstNameConst = fullName.split(' ')[0];
    console.log('if statement const', firstNameConst)
}

// console.log('firstName const', firstNameConst); // Not defined

if (fullName) {
    let firstNameLet = fullName.split(' ')[0];
    console.log('if statement let', firstNameLet)
}

// console.log('firstName let', firstNameLet); // Not defined