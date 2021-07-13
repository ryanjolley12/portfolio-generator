// LESSON 9.1 

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

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// console.log(process)



// console.log(profileDataArgs);

// slice() method returns a new array based on the process.argv), create a new array based on third index rather than manipulate process.argv

// const -- variables that can't be reassigned a value [ES6 Feature]

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//   name: 'Ryan',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';



// // const printProfileData = (profileDataArr) => {
// //     console.log(profileDataArr);
// // };

// // printProfileData(profileDataArgs);

// // FUNCTION EXPRESSION SYNTAX

// // const addNums = function(numOne, numTwo) {
// //     return numOne + numTwo;
// // };

// // ARROW FUNCTION SYNTAX

// // const addNums = (numOne, numTwo) => {
// //     return numOne + numTwo;
// // };

// // // with arrows: can omit () if there is only one parameter
// // const printProfileData = profileDataArr => {
// //     console.log(profileDataArr);
// // };

// // IMPLICIT RETURNS without {}
// // const addNums = (numOne, numTwo) => numOne + numTwo;
// // const sum = addNums(5, 3); // sum 8

// // const addNums = (numOne, numTwo) => {
// //     console.log(numOne, numTwo);
// //     return numOne + numTwo;
// // };


// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
// }

// let message = 'Hello Node!';
// message = 'Hello ES6';

// let sum = 5 + 3;
// sum += 1;

// // var is function-scoped so redeclaring it in a block with cause its value outside the block to change as well:

// var one = 'one: declared outside the block';

// if (true === true) {
//     var one = 'one: declared inside the block'; // redeclare console.log(one) = declared inside the block
    
// }

// console.log(one); // also prints 'one: declared inside the block'

// // 'LET' is block-scoped 

// let two = 'two: declared outside the block';

// if(true === true) {
//     let two = 'two: declared inside the block';
//     console.log(two); // prints two: declared inside the block
// }

// console.log(two);

// var three = 'three: declared outside the block';

// if (true === true) {
//     three = 'three: changed inside the block';
//     console.log(three); // prints 'three: changed inside the block
// }

// console.log(three); // also prints 'three: changed inside the block

// let is blocked scoped 

// let four = 'four: outside the block';

// if (true === true ) {
//     four = 'four: inside the block';
//     console.log(four);
// }

// console.log(four); // prints 'four: inside the block

// NEW LOOP METHOD 

// const printProfileData = profileDataArr => {
//     //This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('=======================');

//     // Is the same as this: 
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });
// };

// // clean up more: 
// profileDataArr.forEach(profileItem => console.log(profileItem));

// LESSON 9.2 :

// const generatePage = () => 'Name: Ryan, GitHub: ryanhub';
// console.log(generatePage());

// template literals (`s;adlfgjk`)

 //const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Ryan', 'ryanhub'));

const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;

console.log(name, github);

const pageHTML = generatePage(name, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});