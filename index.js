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

// 04 - Order

const numbers = [4, 10, 8, 12, 6]
numbers.reverse()
console.log(numbers);

// 05 - Boucle

let total = 0
const limite = 10

for (let i=0; i <= limite ; i++){
    total += i
}

console.log(total);

// 06 - Reverse

const sentence = "Hello Konexio !"
const arraysentence = sentence.split("")
const sentencearray = []

for (let i = 0; i < sentence.length; i++) {

    sentencearray.unshift(arraysentence[i])
}

console.log(sentencearray.join(""));

// 07 - Fizzbuzz

for (let i = 0; i <= 100; i++){
    if (i%7 === 0){
        console.log("");
    }else if (i%3 === 0 && i%5 === 0){
        console.log("fizzbuzz");
    }else if (i%3 === 0){
        console.log("fizz");
    }else if (i%5 === 0){
        console.log("buzz");
    }else{
        console.log(i);
    }
}