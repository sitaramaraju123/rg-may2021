// scope global/window /function / block

// let - its value can be RE_ASSIGNMENT
// const - its value can not be RE_ASSIGNMENT

// TypeError: Assignment to constant variable.

// Fails
// const a = 11;
// console.log("a1 =-----> ", a);
// a = 345;
// console.log("a2 =-----> ", a);

// works -- shallow-copy - flat
// const innerObj = { d: { e: { f: 56464 } } };

// const oldObj = { a: 123, b: 234, c: innerObj };
// const newObj = Object.assign({}, oldObj);
// newObj.d = 4;
// newObj.c.f = 4;
// console.log("oldObj =-----> ", oldObj);
// console.log("newObj =-----> ", newObj);

// const a = { a: 123, b: 234 };
// console.log("a1 =-----> ", a);
// a.c = 345;
// console.log("a2 =-----> ", a);

// works
// const a;// = [123, 234];
// console.log("a1 =-----> ", a);
// // a.push(345);
// a = [123, 234, 345];
// console.log("a2 =-----> ", a);

const func = function () {
  return "Im king...you cannont change me.";
};

console.log("func =-----> ", func);
func = function () {
  return "Im bad king...i'll  change you.";
};
