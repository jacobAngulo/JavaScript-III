/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding describes a trait of this where if you dont say where you want this to 
go it will automtically revert to  the window or the global scope depending on whether or
not it is pointing at anything

* 2. implicit binding deals with objects and allows this to reach into it's parent object to
find the vale of what it's referencing.

* 3. explicit binding is similar to implicit in that it is grabbing something within itself
except that it is grabbing paramaters passed into the function it exists in instead og keys in 
its object

* 4.  new binding refers to using the this keyword in object constructors and it's used to 
create key value pairs within the function that can be assigned to new objects based on the 
parameters passed into the function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const name = {
    firstName: 'Jacob',
    lastName: 'Angulo'
}

console.log(name.firstName + ' ' + name.lastName)

// Principle 2

// code example for Implicit Binding

const me = {
    firstName: 'Jacob',
    lastName: 'Angulo',
    speak: function() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}

me.speak();

// Principle 3

// code example for New Binding

const NameConstuctor = function(param) {
    this.firstName = param.firstName;
    this.lastName = param.lastName
}

NameConstuctor.prototype.consoleFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`)
}

const miNombre = new NameConstuctor({
    firstName: 'Jacob',
    lastName: 'Angulo'
});

miNombre.consoleFullName();

// Principle 4

// code example for Explicit Binding

function sayName() {
    console.log(this.firstName + ' ' + this.lastName)
}

const mePt2 = {
    firstName: 'Jacob',
    lastName: 'Angulo'
};

const myNameAgain = sayName.bind(mePt2);

myNameAgain();
