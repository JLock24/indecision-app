
class Person {
    constructor(name = 'Someone', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let desc = super.getDescription();
        if (this.hasMajor()) {
            desc += ` Their major is ${this.major}`;
        }
        return desc;
    }
}

const me = new Student('Joe Lock', 25, 'Computer Science');
const other = new Student();
console.log(me.getDescription());
console.log(other.getDescription());