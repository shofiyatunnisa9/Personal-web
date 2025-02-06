// console
// let greetings = "selamat pagi"
// console.log(greetings);
// let warning = "Jangan lupa Makan";
// console.let(warning);

// alert("selamat pagi");

// confirm
// memberikan pilihan kepada user untuk klik ok atau cancel
if (confirm("press a button !") == true) {
  // perintah ketika ok di klik
  console.log("Button ok pressed");
} else {
  // perintah ketika cancel di klil
  console.log("Button cancel pressed");
}

//promt
// let name = prompt("Masukkan nama anda ");
// console.log(name);

// var, let dan const
var greetings = "selamat pagi";
console.log(greetings);

let food = "Ketoprak";
food = "Keteprak";
console.log(`aku pagi ini makan ${food}`);

// CONST
const kapasitasBus = 58;

// operator aritmatika +, -,

let modulo = 10 % 7; //10 dibagi 7 sisanya berapa?
console.log(modulo);

// Operator logika/pembanding ==> AND, OR
// == (EQUAL), ===(EQUAL), != (NOT EQUAL), >, <, <=, >=, &&, ||

let suhu = 27;
let suhuNormal = suhu > 20 && suhu < 30;
console.log(suhuNormal ? "susu normal" : "suhunya normal");

function greetings(name, food) {
  console.log("selamat pagi");
  console.log("Nama saya :", name);
  console.log("Saya suka makan :", food);
}

greetings("sho", "Mie");

// noted: if/else, switch, for loop, while, do while
