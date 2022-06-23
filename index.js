// 01 - Fruits

const fruits = ["mango","lemon" ,"blueberry"]
console.log(fruits);
console.table(fruits)

// 02 - Access

const ingrédients = ["eff", "milk","butter"]
console.log(ingrédients[1]);
console.log(ingrédients.indexOf("butter"));

// 03 - Add and Remove

const things = ["pen", "book","lamp"]
things.unshift("chair")
console.log(things);
things.pop()
console.log(things);
things.push("laptop")
console.log(things);
things.shift();
console.log(things);

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

// 08 - While

total = 0
let sup = 0

while (sup <= limite){
    total += sup
    sup++   
    
}

console.log(total);

//  09 - Sans boucle

const camarade = ["Mago", "Walid 1", "Walid 2", "Adrien", "Wade", "Danh"]

const random = Math.floor(Math.random()*camarade.length)

console.log(camarade[random]);

// 10 - Random and max

const array = []

for (let i = 0; i < 20; i++){
    let random100 = Math.floor(Math.random()*101)
    array.push(random100)
}

console.log(array);
let max = array[0]

for (let i=0; i<20; i++){
    if (array[i] > max){
        max = array[i]
    }
}

console.log(max);

// const array = []
// let max = 0

// for (let i = 0; i < 20; i++){

//     let random100 = Math.floor(Math.random()*101)
//     array[i]=random100

//     if (array[i] > max){
//         max = array[i]
//     }
// }

// console.log(array);
// console.log(max);

