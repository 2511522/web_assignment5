//task 1

/* let a = +prompt("Enter first number: ");
let b = +prompt("Enter second number: ");
let c = +prompt("Enter third number: ");
let largest = 0;
let smallest = 100;
if(a > largest){
    largest = a;
}
if(b > largest){
    largest = b;
}
if(c > largest){
    largest = c;
}
if(a < smallest){
    smallest = a;
}
if(b < smallest){
    smallest = b;
}
if(c < smallest){
    smallest = c;
}
alert(`The nearest number to 100 is ${largest}, the farthest ${smallest}`);
 */


//task 2

/* let s = prompt("enter string:");
let str = s.split(" ");
let str_sorted = [];

for(let i = 0; i < str.length; i++){
    let temp = str[i].split("").sort();

    str_sorted.push(temp.join(""));
}

alert(str_sorted.join(" "));
 */


let s = prompt("enter  string");
let str = s.split(" ");
let str_sorted =[];
for(let i=0; i< str.length;i++){
    let temp = str[i].split("")
}






//task3
/* let str = prompt("enter string:");
str = str.split("");
let repeatedChar = "";

for(let i = 0; i < str.length; i++){
    let count = 0;
    for(let j = 0; j < str.length; j++){
        if(str[i] == str[j]){
            count++;
        }
    }
    if (count === 1) {
        alert(non-repeating char is: ${str[i]});
    }
} */


//task4
/* let s = prompt("enter string:");
let str = "";

for(let i = 0; i < s.length; i++) {
    str += String.fromCharCode(s.charCodeAt(i) + 1);
}

alert(str); */




//task 5

/* let a = prompt("enter string:");
a = a.split(" ");

let longest = a[0].length > a[1].length ? a[0] : a[1];
longest = longest.length > a[2].length ? longest : a[2];

let shortest = a[0].length < a[1].length ? a[0] : a[1];
shorteset = shortest.length < a[2].length ? shortest : a[2];

alert("The longest is: ${'longest'}, the shortest is ${'shortest'}"); */



//task 6
/* let p = document.querySelector("p");
let str = p.textContent.split(" ");
let newStr = "";

for(let word of str){
    if (word.length > 7) {
        newStr += <span style="background-color: blue;">${word}</span> ;
    } else if (word.length < 3) {
        newStr += <span style="font-weight: bold;">${word}</span> ;
    } else {
        newStr += ${word} ;
    }
}
p.innerHTML = newStr.trim();
 */


//task 7

/* let task7txt = document.querySelector("#task7");
task7txt.innerHTML = task7txt.innerHTML.replace("?" , "*");
task7txt.innerHTML = task7txt.innerHTML.replace("!" , "@");
 */


//task 8

/* let div_ex8 = document.getElementById("ex8");
let text_ex8 = div_ex8.textContent;
let newText_ex8 = "";

for (char of text_ex8) {
    if (char == "?"  char == "!"  char == ".") {
        newText_ex8 += char;
        newText_ex8 += "<br>";
    } else {
        newText_ex8 += char;
    }
}
div_ex8.innerHTML = newText_ex8;

//exercise 9
// let div_ex9 = document.getElementById("ex9");
// let text_ex9 = div_ex9.textContent.split(" ");
// let numberOfWords = 0;

// for (word of text_ex9) {
//     numberOfWords++;
// }
// alert(numberOfWords);
 */

//task 10
/* 
const task10txt = document.querySelector("#task10");
task10txt.innerHTML = task10txt.innerHTML.split(" ").map((word) => {
    if (word[0] == "a") {
    return `<i>${word}</i>`;
    }
    else if (word[word.length - 1] == "y") {
        return `<u>${word}</u>`;
    }
    else {
        return word;
    }
}).join(" "); */


//task13
function calculate(){
    let r = document.getElementById("radius").value;
    let h = document.getElementById("height").value;
    let volume = 1/3*Math.PI*h*Math.pow(r,2);
    document.getElementById("result").textContent=volume;
}

//task11
function calculate1(){
    let r = document.getElementById("radius1").value;
    let volume = 4/3*Math.PI*Math.pow(r,3);
    document.getElementById("result2").textContent=volume;
}

//task12
function calculate2(){
    let r = document.getElementById("radius2").value;
    let h = document.getElementById("height2").value;
    let volume =Math.PI*h*Math.pow(r,2);
    document.getElementById("result3").textContent=volume;
}

//task14
function calculate3(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let h = document.getElementById("height3").value;
    let B = a*b;
    let volume = B*h
    document.getElementById("result4").textContent=volume;
}


//task15
function calculate4(){
    let b = document.getElementById("b2").value;
    let h = document.getElementById("h4").value;
    let volume = 1/2*b*h
    document.getElementById("result5").textContent=volume;
}


// Task 16. Create a sliding push sidebar in JS:

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("bod").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("bod").style.marginLeft = "0";
}




// task 17 calendar

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
    "November", "December"];
let dayName = days[date.getDay()];

document.getElementById("Mon").innerHTML = months[month - 1];
document.getElementById("Day").innerHTML = day + "(" + dayName + ")";
document.getElementById("Year").innerHTML = year;


//task 18

let lists = document.getElementsByClassName("list");
let right = document.getElementById("right-box");
let left = document.getElementById("left-box");

for (let x of lists) {
    x.addEventListener("dragstart", function(e) {
        let sel = e.target;
        right.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        right.addEventListener("drop", function(e) {
            e.preventDefault();
            this.appendChild(sel);
            sel = null;
        });

        left.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        left.addEventListener("drop", function(e) {
            e.preventDefault();
            this.appendChild(sel);
            sel = null;
        });
    });
}

//task 19

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('user-choice').innerText = `Your choice: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer's choice: ${computerChoice}`;
    document.getElementById('game-result').innerText = `Result: ${result}`;
}



//task 20 clock
let dateClock = new Date();
let hours = dateClock.getHours();
let minutes = dateClock.getMinutes();
let seconds = dateClock.getSeconds();
document.getElementById("hours").innerHTML = hours;
document.getElementById("mins").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
