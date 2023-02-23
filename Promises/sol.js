// function login(cb) {
//     setTimeout(() => {
//         console.log("Login....");
//         cb();
//     }, 0)
// }

// login(() => {
//     console.log("Redirecting....");
// });


// As we have used setTimeout, first the statement outside the function will call and then next, function will call
// But when we use arrow for first function, then first statement will run first

// How to use promises

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login....");
            reject();
        }, 0)
    });
}

login().then(() => {
    console.log("Redirecting....");
}).catch(() => {
    console.log("Error....");
})