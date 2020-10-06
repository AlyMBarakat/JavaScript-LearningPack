//create an object using both bracket and dot notation that represents characters found in clue game

var game = {}; //or []

game.murderer = "??";

//array of weapons inside object: game
game['weapons'] = [
    { type: "laser", location: "lab" },
    { type: "driller", location: "closet" },
    { type: "slipper", location: "kitchen" }
];

game.name = [];
game.name[0] = "Mrs. Walter";
game.name.push("Mr. Green");




//Destructuring
var { a, b, c } = { a: 4, b: 5, c: 6 };

let charachter = {}
charachter = {
    "name": "rusty",
    "room": "kitchen",
    "weapon": "slipper"
};

let [charName, charWeapon] = [charachter.name, charachter.weapon];
alert(charName + " " + charWeapon);

alert("Before swap: " + a + " " + b);
[a, b] = [b, a];
alert("After swap(destructing): " + a + " " + b);


