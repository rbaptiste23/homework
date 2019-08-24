const _  = require('lodash')
const moment = require('moment')
const dataTwo = require('./data.json');


const data = [{name: "Zach"}, {name: "Bob"}, {name: "Susan"}];
 
const value = _.find(data,(e)=> e.name="Zach",0);
console.log(value);
console.log("***************************");

const value2 = _.find(dataTwo,(e)=> e.name="Zach",0);
console.log(value2);
console.log("***************************");

const value3 = _.find(dataTwo,(e)=> e.age>20,0);
console.log(value3);
console.log("***************************");

const now = moment();
console.log(now);
console.log(now.format("MM/DD/YY"));
console.log("***************************");

console.log(now.subtract(7,'days').format("MM/DD/YY"));