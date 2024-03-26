const lodash = require("lodash");

let users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
let sorted_users = lodash.sortBy(users, 'age');
console.log(sorted_users);