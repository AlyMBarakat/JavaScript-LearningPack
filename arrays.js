let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .push() .pop() .shift() .unshift
// add to end
array.push(10);
// remove from end
let end = array.pop();
// extract starting element
let start = array.shift();
// add to start
array.unshift();


// Iteration: .forEach()
["Ahmed", "Aly", "Mohammed", "Samy"].forEach((item, index, ar) => {
    // alert(`${item}, is at index ${index}, from array ${ar} `);
});


// Manipulation
// .sort() .reverse()
// let example = [1, 3, 2, 4, 6, 5, 9, 7, 0, 8];
// alert(example);
// alert(example.sort());//The array is now sorted
// alert(example.reverse());//The array is now reversed

// .splice() .slice() .concat()
// let thirdElement = array.splice(2, 4, 4); // .splice(startIndex,deleteX,add1,add2,add...)
// array.splice(2, 0, 3); // just inserting
// let arr = [1, 2, 5];
// // from index -1 (one step from the end)
// // delete 0 elements,
// // then insert 3 and 4
// arr.splice(-1, 0, 3, 4);
// alert(arr); // 1,2,3,4,5

// let concatArray = array.concat(arr, 4, 5, 6, 7); // concat(arg1,argN...) 


// Searching
// .find() .filter() .map()
let users = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Mohammed" },
    { id: 3, name: "Khalid" },
    { id: 4, name: "Ahmed" }
];
let firstUser = users.find(item => item.name == "Ahmed"); // .find() finds the first element
alert(`First Ahmed's ID is: ${firstUser.id}`);

let Ahmeds = users.filter(item => item.name == "Ahmed");
Ahmeds.forEach((item, index) => {
    alert(`Ahmed no ${index} is at id ${item.id}`); // .filter() finds all the elements
});

let ids = users.map(items => items.id); // .map() find
alert(ids);

let namesLength = users.map(items => items.name.length); // return string length of every name
alert(namesLength);


