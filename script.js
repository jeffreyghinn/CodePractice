let username = '';
console.log(username);

let defaultName;
console.log(defaultName);

if (username) {
    console.log('Username is not empty');
    defaultName = username;
    console.log(defaultName);
} else {
    console.log('Username is empty');
    defaultName = 'Stranger';
}

console.log(defaultName);