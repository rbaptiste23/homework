const fs = require('fs');


// readFile is an Async function calls which means that execution of the 
// function is ran on a seperate thread / Process.
fs.readFile('./data.json',{encoding: 'utf8'}, (err,data) => {
    if (err) throw err;
     console.log(data);
});


console.log("hello async");