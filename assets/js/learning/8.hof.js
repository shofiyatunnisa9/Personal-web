let number = [1, 2, 3, 4, 5];
let doubleNumber = [];
// 1.  forEach
let result = 0;

// function showNumber(number) {
//   console.log(`sekarang nomor${number}`);

//   result += number
// }

// number.forEach(showNumber);
// console.log(result)

// number.forEach((number) => {
//   doubleNumber.push(number * 2);
// });
// console.log(doubleNumber);

// 2. MAP
const doubleNumbers = number.map((number) => {
  return number * 2;
});
console.log(doubleNumbers);

doubleNumbers.forEach((doubleNumber) => {
  result += doubleNumber;
});

console.log(result);

// 3. FILTER
// const candidates = [
//   {
//     name: "A",
//     score: 70,
//     expectedSallary: 500,
//     prefferedPosition: "Fullstack",
//   },
//   {
//     name: "B",
//     score: 40,
//     expectedSallary: 200,
//     prefferedPosition: "Fullstack",
//   },
//   {
//     name: "C",
//     score: 90,
//     expectedSallary: 1500,
//     prefferedPosition: "Backend",
//   },
//   {
//     name: "D",
//     score: 80,
//     expectedSallary: 700,
//     prefferedPosition: "Fullstack",
//   },
// ];

// const criteria = {
//   scrore: 70,
//   expectedSallary: 1000,
//   prefferedPosition: "Fullstack",
// };

// const passCandidates = candidates.filter((candidates) => {
//   if (
//     candidates.score >= criteria.scrore &&
//     candidates.expectedSallary <= criteria.expectedSallary &&
//     candidates.prefferedPosition === criteria.prefferedPosition
//   )
//     return true;

//   return false;
// });

// console.log(passCandidates);

// 4. REDUCE
const sum = number.reduce((prev, curr) => {
  console.log(prev);
  console.log(curr);
  console.log("prev + curr = ", prev + curr);

  return prev + curr;
});
console.log(sum);
