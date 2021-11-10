let arr = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";
let len = arr.shift();

for (let i = 0; i < len; i++) {
  let words = arr[i].split(" ");
  let answer = words.map((word) => word.split("").reverse().join("")).join(" ");
  console.log(answer);
}
