function operation() {
  console.log("Length of Arguments ", arguments.length);
  console.log("Arugments -> ", arguments);
  // return arguments[0] + arguments[1];
}

const op = () => {
  console.log("Length of Arguments ", arguments.length);
  // console.log("Arugments -> ", arguments);
  // return arguments[0] + arguments[1];
};

console.log(operation(2, 34, 44));
console.log(op(4, 4));
