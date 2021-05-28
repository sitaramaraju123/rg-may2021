// const sum = (a, b) => {
//   const c = a + b;

//   return c;
// };
// const sum = () => true;
// const sum = (a) => 1 + a;

// function // ()=>{}
// implicit return
// step 1

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
// 1,2, 3,4

// 0 < N < 1000 --> 999

// const sumOfN = () => {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   return sum;
// };

// .bind / call / apply - you cannot control the context using bind / call / apply
// `this` - will always points to its parent function

// nice-to-have - features -- lower

// must-have - features -- highr

// arguments - its not available

// function parent() {
//   console.log("this =-----> ", this);
//   const o = {
//     a: 123,
//     b: 123,

//     oldSchool: function () {
//       return this.a + this.b;
//     },

//     newSchool: () => {
//       return this.a + this.b;
//     },
//   };

//   return o;
// }

// parent.prototype.a = 111;
// parent.prototype.b = 111;

// const ooo = new parent();

// const os = ooo.oldSchool.bind(ooo);
// const ns = ooo.newSchool;

// console.log(" =--2---> ", os());
// console.log(" =--3---> ", ns.apply(ooo));

// ... => rest/spread
// a.length ==> [].length
const sumOfN = (...a, d) => a.reduce((acc, cur) => acc + cur, 0);

console.log("sum =-----> ", sumOfN(1, 2, 3, 4, 5, 6));
