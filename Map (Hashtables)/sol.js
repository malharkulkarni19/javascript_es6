const fruits = new Map();
 
fruits.set('apples', 5000);
fruits.set('mango', 2000);
fruits.set('banana', 10000)

console.log(Array.from(fruits));       // Return whole fruits map in Array format
console.log(fruits.get('apples'));     // Get value of apples
console.log(fruits.size);