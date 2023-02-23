// Enchanced template literals are used where get the property at runtime.

// these are called computed property keys
const firstName = 'name';
const modelName = 'model';
const getPrize = 'prize';

const info = {
    [firstName]: "Redmi Note 10 Pro Max",
    [modelName]: "Pro max",
    [getPrize]: 50000
}

console.log(info.name + ' name has model ' + info.model + ' has prize ' + info.prize);

// Method defination shorthand
// this is non other but enhanced function syntax.

const buy = {
    mobile() {
        console.log("Redmi Note 11 Pro is very good model");
    }
}

buy.mobile();

// Property Shorthand

const accessToken = "abcdefghi";
const refreshToken = "iodfijbdsa";

const user = {
    accessToken,
    refreshToken,
}
console.log(user);