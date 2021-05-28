const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question("Say something...", (...a) => {
//   console.log(" =-----> ", a);
// });

rl.addListener("line", (l) => console.log(l));
rl.prompt("Prompt");
