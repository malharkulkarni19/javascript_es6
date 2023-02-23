var a = 18;

if(a >= 18){
    var driving = true;
    // let driving  = true; --> Error because cant be accessed outside block. 
}

console.log(driving);

function register(){
    var username = 'Malhar';
    var surname = "Kulkarni"
}

// console.log(username);  // Error because cant accessed outside function.

//var product = 'Suzuki';
//let product = 'Ford';

var product = 'Mercedez';
var product = 'BMW';

console.log(product);

let sign = 'Signed';
sign = 'Not signed';  // By use of let, we can re-assign a variable.

console.log(sign);

console.log(html);  // undefined, this concept is called **Hoisting**.
var html = 'html';

const age = {
    years : 25
};
age.years = 22;

console.log(age);  // It is object, so we can change value of age.