// 01 - Fruits

const fruits = ["mango","lemon" ,"blueberry"]
console.log(fruits);
console.table(fruits)

// 02 - Access

const ingrédients = ["eff", "milk","butter"]
console.log(ingrédients[1]);
console.log(ingrédients.indexOf("butter"));

// 03 - Add and Remove

const objects = ["pen", "book","lamp"]
objects.unshift("chair")
console.log(objects);
objects.pop()
console.log(objects);
objects.push("laptop")
console.log(objects);
objects.shift();
console.log(objects);
