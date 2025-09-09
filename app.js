console.log("Halo Whirled!");

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = false;
let i = 0;
while (keepLooping === false) {
  console.log("Iteration", i);
  // set keepLooping (from "strictly come looping")
  // to false with 10% chance: Math.random() returns
  // a random value between 0 and 1
  keepLooping = Math.random() < 0.1;
  i++;
}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// or alt loop over array items #1
for (let food of foods) {
  console.log(food);
}

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}

// or alt loop over array items #2

foods.forEach(function (food, index) {
  console.log(index, food);
});
