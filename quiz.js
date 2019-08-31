//1. on the first pass when node is running a javascript file, what does it do with functions, and what does it do with vars? What does it do with the rest of the code?

   // On the first pass nodes stores the variables in slots and define the function names and ignores the rest of the code.
   // JavaScript code is run in two passes, the first pass 
   // does all the function declarations and determines the 
   // variables. The second pass actually executes your code.



//2. what are some differences between the fat arrow function and the default function syntax?
     // You do not have to name the function. 
     // You do not have to specify the return key word. 
     // Concise syntax
     // Must use return if you are using multiline with the fat arrow function...


//3. name a method available in lodash?
      //_.after(n, func) - The opposite of _.before; this method creates a function that invokes func once it's called n or more times.


// 4. if you want to read a file on your computer in node, what module must you require?

     // require ('fs')


// 5. name a use case for each of the below:
//    map -  If I wanted to multiply each element in the array by two I would use a map.
//    filter - If I wanted to see the ages of all males in an object array 
//    reduce - If I wanted to sum all elements in the array.


// 6.implement the filter higher order function
   // function filter(array, callback) {
    // const newArray = []
    //  for (let i=0; i<array.length; i++){
     //     if (callback(array[i])) {
      //       newArray.push() = array[i];
     //     }
    //}
      //
      // return newArray

   //   
   //}

// 7.what are the commands you need to run in order to create a new project and add lodash to it?
   // npm init  - creates node_modules
   // npm install lodash 
   // require loadash in your .js file.

// 8.how do you list the contents of a directory?
   // ls 

// 9.if you want to import from another file, what must that file do? (e.g you want to share a function)
    // main file
  //const mailer = require('./mailer.js');

  // function file 
  // module.exports = { printerLiter: printerLetter}
