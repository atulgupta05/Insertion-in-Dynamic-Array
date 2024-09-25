let array = [1, 2, 3, 4, 5];
let element = 10;
let position = 2; // Insert at index 2 (third element)

// Insert 10 at index 2
array.splice(position, 0, element);

console.log(array); // Output: [1, 2, 10, 3, 4, 5]