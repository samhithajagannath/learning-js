let fruits = ["banana", "apple", "mango", "jackfruit", "watermelon"];

console.log("ORIGINAL -> ", fruits);

//TO FIND IF AN ELEMENT EXISTS
let index = fruits.indexOf("watermelon");
console.log("INDEX | watermelon -> ", index);

index = fruits.indexOf("melon");
console.log("INDEX | melon -> ", index);

if (fruits.indexOf("melon") > -1) {
  console.log("FOUND THE FRUIT -> melon");
} else {
  console.log("melon NOT FOUND");
}
console.log("--------------------");
let findFruits = ["melon", "apple", "BANANA", "berry", "mango"];
findFruits.forEach(element => {
  if (fruits.indexOf(element) > -1) console.log(`Fruit ${element} found`);
  else console.log(`Fruit ${element} not found`);
});
