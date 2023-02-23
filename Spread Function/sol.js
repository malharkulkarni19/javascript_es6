// This function is used to copy or clone an array.

const languages = ["c", "c++", "java"];
const newLanguages = ["c#", [...languages]];
const anotherNewLanguages = ["python", "javascript", [...newLanguages]];

console.log(anotherNewLanguages);

// We can also use it for objects

const object = {
    contrast: 50,
    brightness: 80.50
}

const newObject = {...object, size: 75};
console.log(newObject);