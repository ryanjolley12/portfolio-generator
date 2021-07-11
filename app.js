//console.log("hello node!");

// standard JS needs: 
// 1. JS code
// 2. JS engine--Google V8 engine performs JIT compiling (translating JS)
// 3. JS runtime environment--container 

// Node.js is a runtime environment built on V8
// does NOT contain browser-specific functionality
// functionality lets us interact with featurs found on our computers

// call on it from command line using command "node"

// node <filename.js>

// var message = 'Hello Node!';
// var sum = 5 + 3;
// console.log(message);
// console.log(sum);

var commandLineArgs = process.argv;
console.log(commandLineArgs);

console.log(process)

var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
