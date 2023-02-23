class Person {
    name; surname;
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

const person1 = new Person();

person1.name = "John"
person1.surname = "Wich";

console.log(person1);