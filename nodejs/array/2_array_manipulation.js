let fruits = ["banana", "apple", "mango", "jackfruit", "watermelon"];

//PUSH
console.log("PUSH");
console.log("ORIGINAL ", fruits);
fruits.push("chicoo");
console.log("NEW ", fruits);

//POP
console.log("------------");
console.log("POP");
console.log("ORIGINAL ", fruits);
console.log("POPPED -> ", fruits.pop());
let val = fruits.pop();
console.log("POPPED -> ", val);
console.log("NEW ", fruits);
console.log("------------");

//SHIFT
console.log("SHIFT");
console.log("ORIGINAL ", fruits);
val = fruits.shift();
console.log("SHIFTED -> ", val);
console.log("NEW ", fruits);

//UNSHIFT
console.log("------------");
console.log("UNSHIFT");
console.log("ORIGINAL ", fruits);
val = fruits.unshift("grapes", "green grapes", "berry", "blueberry");
console.log("NEW ", fruits);
console.log("------------");

//SPLICE
console.log("------------");
console.log("SPLICE");
console.log("ORIGINAL ", fruits);
val = fruits.splice(2, 4);
console.log("SPLICED -> ", val);
console.log("NEW ", fruits);
console.log("------------");
