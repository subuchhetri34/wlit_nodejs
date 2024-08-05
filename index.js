// const {sum,mul} = require('./examples');
// import sum from './es-module.js';
// import { mul } from './es-module.js';

// // combining line 2 and 3
// import sub, {mul,sum} from './es-module.js';   // default lai bahira bata call garni

// console.log('Hello World !');

// //window and document

// //console.log(window)
// // console.log(document);

// //console.log(global);

// console.log("sum",sum(3,5));
// console.log("product",mul(3,5));
// console.log("difference",sub(4,2));

import {convert_usd_npr,convert_npr_usd } from './currency.js';

console.log("in NPR",convert_usd_npr(30));
console.log("in USD",convert_npr_usd(3400));