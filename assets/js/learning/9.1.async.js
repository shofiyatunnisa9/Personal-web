// synchronous
// console.log("Star"); //awal proses

// function getData() {
//   constdata = "data berhasil di ambil";
//   return Data;
// }

// const result = getData()
// console.log(result);

// console.log("End"); // akhir proses

// set timeout
console.log("Star");
// function getData() {
//   const data = "data berhasil di ambil";
//   console.log(data)
// }
// function fetchDataWithTime() {
//   setTimeout(getData, 2000); //2 * 1000s ==> 2 detik
//
// }
// fetchDataWithTime();
// console.log("end");

function sayEnd() {
  setTimeout(() => {
    console.log("end");
  }, 5000); // 5-2 = 3
}

function greeting(name, callback) {
  setTimeout(() => {
    console.log("My name is", name);
  }, 2000);
  callback();
}
greeting("sho", sayEnd);

//callback problem

function proses1() {
  const succes = true;
  return new Promise((resolve, reject) => {
    if (succes) {
      setTimeout(() => {
        console.log("Proses 1 Berhasil");
        resolve();
      }, 5000);
    } else {
      console.log("proses 1 gagal");
      reject();
    }
  });
}
function proses2() {
  const succes = true;
  return new Promise((resolve, reject) => {
    if (succes) {
      setTimeout(() => {
        console.log("Proses 2 Berhasil");
        resolve();
      }, 2000);
    } else {
      console.log("proses 2 gagal");
      reject();
    }
  });
}
function proses3() {
  const succes = true;
  return new Promise((resolve, reject) => {
    if (succes) {
      setTimeout(() => {
        console.log("Proses 3 Berhasil");
        resolve();
      }, 3000);
    } else {
      console.log("proses 3 gagal");
      reject();
    }
  });
}
// callback hell
// setTimeout(() => {
//   proses1();
//   setTimeout(() => {
//     proses2();
//     setTimeout(() => {
//       proses3();
//     }, 3000);
//   }, 2000);
// }, 5000);

// asynchronous
async function multipleProcess() {
  try {
    await proses1();
    await proses2();
    await proses3();
  } catch (error) {
    console.log("ada proses yang gagal");
  }
}

multipleProcess();
