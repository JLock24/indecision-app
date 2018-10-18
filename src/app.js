import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

class OldSyntax {
    constructor() {
        this.name = 'John';
    }
}

const oldSyntax = new OldSyntax();

console.log(oldSyntax);

// ----------

class NewSyntax {
    name = 'John';
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();

console.log(newSyntax.getGreeting());