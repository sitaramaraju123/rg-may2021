const a = 9;

function p() {
  return a;
}

module.exports = p;

// t = (function p() {
//   let a = 9;
//   return () => a;
// })();
