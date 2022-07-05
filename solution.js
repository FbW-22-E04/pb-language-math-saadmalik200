// ## 1. Minimum and maximum
// const lowestNumber = [-1, 0, 1, 2, 3, 4];
// console.log(lowestNumber);
// console.log(typeof lowestNumber);

// console.log(Math.min(parseInt(lowestNumber)));
console.log(Math.min(-1, 0, 1, 2, 3, 4));
console.log(Math.max(-1, 0, 1, 2, 3, 4));

// ## 2. Rounding

console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
console.log(Math.floor(43.342));

// ## 3. Dice Roll!

const randonInt = Math.ceil(Math.random() * 6);
console.log(randonInt);
