"use strict";

class User{
    constructor(name, age){
        this.name = name;
        this._age = age; // _age - just fun (can be age)
    }

    #surname = 'rambo'; // setting private status !!!not released yet

    get userAge(){
        return this._age;
    }

    set userAge(age){
        if(typeof age === 'number'){
            this._age = age;
        }
    }

    say(){
        console.log(`name: ${this.name}, surname: ${this.#surname}, age: ${this._age}`);
    }
}

const alex = new User('Alex', 23);
console.log(alex.userAge = 32);

alex.name = 'not Alex';
alex.surname = 'not rambo';
console.log(alex.surname);
console.log(alex.say());

