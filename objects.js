// create an object using both bracket and dot notation that represents characters found in clue game

const { allowedNodeEnvironmentFlags } = require("process");

var game = {}; //or []

game.murderer = "??";

// array of weapons inside object: game
game['weapons'] = [
    { type: "laser", location: "lab" },
    { type: "driller", location: "closet" },
    { type: "slipper", location: "kitchen" }
];

game.name = [];
game.name[0] = "Mrs. Walter";
game.name.push("Mr. Green");




// Destructuring
var { a, b, c } = { a: 4, b: 5, c: 6 };

let charachter = {}
charachter = {
    "name": "rusty",
    "room": "kitchen",
    "weapon": "slipper"
};

let [charName, charWeapon] = [charachter.name, charachter.weapon];
// alert(charName + " " + charWeapon);

// alert("Before swap: " + a + " " + b);
[a, b] = [b, a];
// alert("After swap(destructing): " + a + " " + b);

// funtions in objects
sayHi = function () {
    // alert(`Hello, my name is ${this.name}`); // use this for inner scope
}

charachter.sayHi = sayHi;
charachter.sayHi();

// Property flags
// writable, enumerable, configarable

let discriptor = Object.getOwnPropertyDescriptor(charachter, 'name');
alert(JSON.stringify(discriptor, null, 2));

// to edit desicriptors
Object.defineProperty(charachter, 'user', {
    writable: true, // can be edited
    enumerable: true, // can be iterated upon (seen in loops)
    configurable: true // if false: can't be deleted and can't be reset
});

let obj = {
    'name': 'Ahmed',
    'id': 16100337
}

//seal forbids adding/removing properties
Object.seal(obj) // set all properties configurable: false
obj.name = 'Khalid';
obj.sawsan = 'sawsan'; // error on sawsan, can't add it
alert(JSON.stringify(Object.getOwnPropertyDescriptors(obj)));

// freeze forbids adding/removing/editing properties
Object.freeze(obj) // set all properties configurable: false, writable: false
alert(JSON.stringify(Object.getOwnPropertyDescriptors(obj)));