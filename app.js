const events = require('events').EventEmitter;
const util = require('util');

const Person = (name) => {
    this.name = name;
}

// util.inherits(Person, events);

const james = new Person('james');
const mary = new Person('mary');
const ryu = new Person('ryu');
const people = [james, mary, ryu];

people.forEach((person) => {
    person.on('speak', (mssg) => {
        console.log(person.name + 'said: ' + mssg);
    });
});

james.emit('speak', 'hey dude !');
ryu.emit('speak', 'are you sure ...');