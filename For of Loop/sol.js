// For number arrays

const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for (const nums of numbers) {
    console.log(nums);
}


// For strings

const languages = ["C", "C++", "Java", "Python", "Javascript"];

for (const langs of languages){
    console.log(langs);
}

// For characters

const names = "JohnDoe";

for (const chars of names){
    console.log(chars)
}

// For objects we have to use a method, like below

const information = {
    name: "Maruti",
    brand: "Suzuki",
    brandName: 800,
    prize: 400000
}

// for (const carInfo of Object.entries(information)){  // we have to use object.entries() for objects.
//     console.log(carInfo);
// }

for (const [key, value] of Object.entries(information)){  // we have to use object.entries() for objects.
    console.log(key, value);
}