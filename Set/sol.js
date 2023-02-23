const uniqueNumbers = new Set();   // Created new set

uniqueNumbers.add(5);         // Adding in set
uniqueNumbers.add(8);
uniqueNumbers.add(11);
uniqueNumbers.add(15);
uniqueNumbers.add(18);


console.log(uniqueNumbers.has(11));

const newArray = [5, 6, 8, 9, 5, 7, 2, 8, 9];
const newSetArray = new Set(newArray);

console.log(Array.from(newSetArray));    // Will return above array of unique elements