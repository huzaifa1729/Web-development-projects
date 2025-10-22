// var genName = require('sillyname');
// import genName from "superheroes";
// var sillyname = genName();
// console.log(`I am ${sillyname}.!`);
import superheroes, { randomSuperhero } from "superheroes";
const name = randomSuperhero();
console.log('I am ' +name + '!');
