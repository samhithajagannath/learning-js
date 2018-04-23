let arr = [1, 2, 3, "sam"];
console.log(arr);

//length
console.log("Length - ", arr.length);

console.log("---------------");

for (let i = 0; i < arr.length; i++) {
  console.log(`VALUE in ${i} = ${arr[i]}`);
}

console.log("---------------");
arr.forEach((element, index) => {
  console.log(`VALUE in ${index} = ${element}`);
});
console.log("---------------");
