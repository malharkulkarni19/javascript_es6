// // Normal Function

// // function greet(){
// //     console.log("Good Morning");
// // }

// // arrow function, same as normal function.

// const greet = () => {
//     console.log("Good Morning");
// }

// greet();  // Function called

// const addition = (a, b) => {
//     console.log(a + b);
// }

// addition(7, 6);  // Function called with parmeters

// // We can use it as one liner.

// const subtract = (c, d) => console.log(c - d);  // Only we can use it for one line.
// subtract(4, 5);  // Function called

// // For only one parameter, we can use below also

// const multiply = c => console.log(c * c);
// multiply(5);

// const shop = {
//     purchase() {  // We can also declare it as purchase : function () {}
//         console.log(this);
//     }
// };

// shop.purchase();

const myButton = document.querySelector("#myButton");

const shop = {
    price: 1000,
    buy: function () {
        // const self = this;  // we declare this as const because it causes problem when we directly get the this.price property.
        myButton.addEventListener('click',  () => {  //but if we use arrow function rather than normal function, this problem will not happen. 
            // console.log(this);
            console.log('I spent ' + this.price)   // we use this keyword because we have to call property of object.
        })
    }
}
shop.buy(); 
