const users = [{name: 'Rakesh'}, {name: 'John'}];

const user = users.findIndex((user) => {
    return user.name === 'John';
});

console.log(user); 