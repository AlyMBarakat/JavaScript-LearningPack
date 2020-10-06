// 7 data types

//bool
var flag = true;
if (flag) {
    alert('Bool: flag is true');
}
else {
    alert('Bool: flag is false');
}

//null
var num = null;
alert('null + 4 = ' + String(num + 4));

//undefined
var undif
alert('undifined var + 4 = ' + String(undif + 4));

//number
var num1 = 4;
var num2 = 5;
alert('Number: 4 + 5 = ' + String(num1 + num2));

//string
var str = 'String: Hello dataTypes';
alert(str);

//symbol
//symbols are used to identify object's properties
var a = Symbol('hello');
var b = Symbol('hello');

if (a === b) {
    alert('symbols are useless');
}
else {
    alert('symbols are diffrent than strings, and this is the string: ' + String(a));
}

//object
var car = new Object();
car.manuf = 'Seat';
car.type = 'Leon';
car.isSport = false;
car.liters = 1.6;

alert('Object: The car is from ' + car.manuf + ' its type is ' + car.type + ' and the motor has ' + car.liters + ' liters');
