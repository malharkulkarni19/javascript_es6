const users = [{name: 'Rakesh'}, {name: 'John'}];

const user = users.find((user) => {
    return user.name === 'John';
})

console.log(user);