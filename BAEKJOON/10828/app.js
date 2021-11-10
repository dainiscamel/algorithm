let arr = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let len = arr.shift();
let stack = [];
let answer = [];
for (let i = 0; i < len; i++) {
  switch (arr[i]) {
    case "pop":
      answer.push(stack.pop() || -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      answer.push(stack[stack.length - 1] || -1);
      break;
    default:
      stack.push(arr[i].split(" ")[1]);
      break;
  }
}

console.log(answer.join("\n"));
