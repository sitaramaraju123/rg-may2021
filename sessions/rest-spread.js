// works -- shallow-copy - flat
// rest =>  function-params, de,
// spread => inside (array/object)
const oldArr = [1, 2, 3];
// const newArr = oldArr.slice();
// const newArr = [0, ...oldArr, 4, ...oldArr];
// const a = oldArr[0];
// const b = oldArr[1];
// const c = oldArr[2];
const [a, ...c] = oldArr;
const { a, ...c } = oldObj;
console.log("a,b,c =-----> ", a, c);
// console.log("oldArr =-----> ", oldArr);
// console.log("newArr =-----> ", newArr);
// const innerObj = { d: { e: { f: 56464 } } };

// const oldObj = { a: 123, b: 234 };
// const newObj = Object.assign({}, oldObj);
// const newObj = { c: 111, ...oldObj, ...oldObj };

// console.log("oldObj === newObj =-----> ", oldObj === newObj);
// newObj.d = 4;
// newObj.c.f = 4;
// console.log("oldObj =-----> ", oldObj);
// console.log("newObj =-----> ", newObj);
