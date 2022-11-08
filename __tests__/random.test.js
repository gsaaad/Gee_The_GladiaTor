const {
  checkIfEqual,
  randomNumber,
  random1000Number,
} = require("../lib/random");

const Potion = require("../lib/Potion");

// test("check if 10 is equal to 10", () => {
//   expect(checkIfEqual(10, 10)).toBe(true);
// });

// test("Get random number", () => {
//   const value = randomNumber();
//   expect(value).toBeGreaterThan(0);
//   expect(value).toBeLessThan(102);
// });

// test("Get 1000 random numbers, 0-100", () => {
//   const numArray = random1000Number();

//   var initialTime = Date.now();
//   for (let i = 0; i < numArray.length; i++) {
//     var value = numArray[i];
//     expect(value).toBeGreaterThanOrEqual(0);
//     expect(value).toBeLessThan(102);
//   }
//   var finalTime = Date.now();
//   var totalTime = finalTime - initialTime;
//   console.log(totalTime, "milliseconds");
// });

// // using this method you can be 10x faster in using your resources!
// test("Sort 1000 numbers, get top 2.5% and bottom 2.5% and check their values", () => {
//   const numArray = random1000Number();
//   var sortedArray = numArray.sort();

//   // grab length of array, divide by 100 (get 1%), multiply by 2.5, so get bottom 2.5 percent of sorted values
//   var TwoHalfPercent = Math.floor((sortedArray.length / 100) * 2.5);
//   var bottomPercent = sortedArray.splice(0, TwoHalfPercent);
//   var topPercent = sortedArray.splice(-TwoHalfPercent);
//   var initalTime = Date.now();

//   for (let i = 0; i < bottomPercent.length; i++) {
//     var bottomValue = bottomPercent[i];
//     var topValue = topPercent[i];
//     expect(bottomValue).toBeGreaterThanOrEqual(0);
//     expect(topValue).toBeGreaterThanOrEqual(0);
//     expect(bottomValue).toBeLessThan(102);
//     expect(topValue).toBeLessThan(102);
//   }
//   var finalTime = Date.now();
//   var totalTime = finalTime - initalTime;
//   console.log(totalTime, "milliseconds");
// });

test("Creates a Health potion", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  expect(potion.value).toEqual(expect.any(Number));
});

test("Creates an ability Potion", () => {
  const potion = new Potion("ability");

  expect(potion.name).toBe("ability");
  expect(potion.value).toEqual(expect.any(Number));
});

test("Creates a random potion object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(4);
  expect(potion.value).toEqual(expect.any(Number));
});
