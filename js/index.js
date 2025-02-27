console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Jelizaveta"

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "John"

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const driverLength = hacker1.length
const navigatorLength = hacker2.length

if (driverLength > navigatorLength) {
    console.log(`The driver has the longest name, it has ${driverLength} characters.`)
} else if (driverLength < navigatorLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}

// Iteration 3: Loops

//3.1

// console.log(hacker1.toUpperCase().split("").join(" "))

let str = '';

for (let i = 0; i < hacker1.length; i++) {
    str += hacker1[i].toUpperCase() + " ";
}
console.log(str);

//3.2

// console.log(hacker2.split("").reverse().join(""))

let reversedStr = '';  

for(i = hacker2.length - 1; i >= 0; i--){
  reversedStr += hacker2[i];
}

console.log(reversedStr);

//3.3 

if (hacker1 < hacker2) {
    console.log("The driver's name goes first")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.")
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
}


