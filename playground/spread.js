// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Joey', 'Nick'];
// var groupB = ['Herb'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Joey', 25];
var person2 = ['Ryan', 37];

function greeting (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greeting(...person);
greeting(...person2);

var names = ['Joey', 'Ryan'];
var final = ['Levi', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
