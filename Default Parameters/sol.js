// If we dont specify value for key at the time of function calling, it will take default value like below.

const credits = (username, password, userimage = 'photo.png') => {
    console.log(username, password, userimage);
}
credits("johndoe1991", "password@12345", "user.png");