function sum(a = 0, b = 0) {
  // if (typeof a !== "number") a = 0;
  // throw new Error(
  //   `Param 'a' must be of type 'number', but received '${typeof a}'.`
  // );

  // if (typeof b !== "number") b = 0;
  // throw new Error(
  //   `Param 'b' must be of type 'number', but received '${typeof b}'.`
  // );

  return a + b;
}

console.log("sum =-----> ", sum(2));
// undef, err,
// NaN
