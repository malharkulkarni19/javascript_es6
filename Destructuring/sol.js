const fullInformation = {
    firstName: "John",
    lastName: "Doe",
    age: 45
}

const {firstName, lastName, age: fullAge} = fullInformation;   //We have changed name of age to fullAge

console.log(firstName  + ' has surname ' + lastName + ' and has age -> ' + fullAge);

// We can do similar with arrays

const array1 = ["Rakesh", 32, "Kumar"];
const [nameOfPerson, ageOfPerson, surnameOfPerson] = array1;

console.log(nameOfPerson);

// Example of this is it is used in useState in React.