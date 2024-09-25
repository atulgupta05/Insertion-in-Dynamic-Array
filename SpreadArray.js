let array = [1, 2, 3, 4, 5];
let element = 10;
let position = 2; // Insert at index 2

let newArray = [...array.slice(0, position), element, ...array.slice(position)];

console.log(newArray); // Output: [1, 2, 10, 3, 4, 5]

