// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math;

// With require
// const { readFile } = require('fs');


const circle = {
  label: 'circleX',
  radius: 2,
};

const circleArea = ({ radius }) =>
  (PI * radius * radius).toFixed(2);

console.log(
  circleArea(circle)
);

const [first, second,, fourth] = [10, 20, 30, 40];

const [first, ...restOfItems] = [10, 20, 30, 40];
// rest is a new array holding all other values after the
// first value is assigned to the var first

const newArray = [...restOfItems]; // copying an array
// the same happens for an object