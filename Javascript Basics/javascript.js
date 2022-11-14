// https://www.theodinproject.com/lessons/foundations-fundamentals-part-1
console.log("\n\n====== Foundations Part 1 ======\n")
console.log("Hello world!");
let name = "John";
let admin = name;
console.log(admin);

let ourPlanetName = "Earth";
let currentUserName = "John";

const num1 = 10;
const num2 = 50;
console.log(9 * num1);
console.log(num1 ** 3);
console.log(num2 / num1);
console.log(23+97);
console.log(23+97+1+1+1+1);

console.log("Exercises");
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // Error nope: -1
    // "" - 1 = 0 since the - operator only works with numbers, so it converts an empty string "" to 0
    // Therefore 0 - 1 + 0 = -1
console.log(true + false) // false nope: 1
    // True == 1
    // False == 0
    // Therefore, 1 + 0 = 1
console.log(6 / "3"); // Error nope: 2
    // I guess javascript will cast strings into integers if possible/when convenient.
console.log("2" * "3"); // Error nope: 6
    // Same as above
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); //"$45"
console.log("4" - 2); // Error nope: 2
    // Same as above
console.log("4px" - 2); // Error nope: NaN
    // Can't treat 4px as a number when subtracting
console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // Error nope: -14
    // Same as above, but also ignores whitespace
console.log(null + 1) // Error nope: 1
    // null does not equal 0, but when numeric conversion is applied, it is 0
console.log(undefined + 1) // Error nope: NaN
console.log(" \t \n" - 2) // Error nope: -2
    // Space characters are trimmed off string start and end when 
    // a string is converted to a number. 
    // Here the whole string consists of space characters, 
    // such as \t, \n and a “regular” space between them.
    // So, similarly to an empty string, it becomes 0.


console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9*a);
let b = 7 * a;
console.log(b);
const max = 57;
actual = max - 13;
percentage = actual/max;
console.log(percentage);

// https://www.theodinproject.com/lessons/foundations-fundamentals-part-2

console.log("\n\n====== Foundations Part 2 ======\n")

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1
console.log( true == 1 ); // true
console.log( false == 0 ); // true

// https://www.theodinproject.com/lessons/foundations-fundamentals-part-3
console.log("\n\n====== Foundations Part 3 ======\n")
function add7(x) {
    return x+7;
};

function multiply(x, y) {
    return x*y;
};

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function lastLetter(word) {
    return word.slice(-1);
}

console.log("Adding 7 to 10 is: " + add7(10));
console.log("5 x 3 is: " + multiply(5, 3));
console.log("tHiS capitalized is: " + capitalize("tHiS"));
console.log("The last letter of alphabet is: " + lastLetter("alphabet"));

// https://www.theodinproject.com/lessons/foundations-fundamentals-part-4
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

console.log("\n\n====== Foundations Part 4 ======\n")
for (let i = 10; i >= 0; i--) {
    const output = document.querySelector('.output');
    const para = document.createElement('p');
    if (i == 10) {
        para.textContent = `Countdown ${i}`;
    } else if (i == 0) {
        para.textContent = "Blast off!";
    } else {
        para.textContent = i;
    }   
    output.appendChild(para);
}

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (p of people) {
    if (p == "Phil" || p == "Lola") {
        refused.textContent += `${p}, `;
    } else {
        admitted.textContent += `${p}, `;
    }
}

if (refused.textContent.slice(-2) == ", ") {
    refused.textContent = refused.textContent.slice(0, -2) + ".";
}
if (admitted.textContent.slice(-2) == ", ") {
    admitted.textContent = admitted.textContent.slice(0, -2) + ".";
}

console.log(refused)
console.log(admitted)