// main.js
// import { pi , square, cube } from './math.js';

// console.log("The value of pi is:", );         // Output: 3.14159
// console.log("Square of 2 is:", square(2));      // Output: 4
// console.log("Cube of 3 is:", cube(3));          // Output: 27



// import { obj } from "./math.js";
// console.log(obj.salary);
// console.log(obj.employedName);
// console.log(obj.married);

// import { myName as maraName,  cls} from "./math.js";
// console.log(maraName , cls);

// import add from './math.js'; 
// console.log(add(2, 3)); // Output: 5

// function checkRain() {
//     return new Promise((resolve, reject) => {
//         const isRaining = false;

//         setTimeout(() => {
//             if (isRaining) {
//                 resolve("barish ho rahi ha");
//             } else {
//                 reject("barish nh horhi");
//             }
//         }, 2000);
//     });
// }
// checkRain()
//     .then((message) => {
//         console.log(message); // یہ بارش ہونے کی صورت میں چلے گا
//     })
//     .catch((error) => {
//         console.log(error); // یہ بارش نہ ہونے کی صورت میں چلے گا
//     });

// function checkRain() {
//     return new Promise((resolve, reject) => {
//         const isRaining = false;

//         setTimeout(() => {
//             if (isRaining) {
//                 resolve("Brish ho rahi ha ");
//             } else {
//                 // Error بنانا
//                 const error = new Error("barish nh ho rahi ۔");
//                 reject(error); // Error کو reject کیا جا رہا ہے
//             }
//         }, 2000); // 2 سیکنڈ کی تاخیر
//     });
// }

// checkRain()
//     .then((message) => {
//         console.log(message); // اگر بارش ہو رہی ہو تو یہ چلے گا
//     })
//     .catch((error) => {
//         console.error(error.message); // اگر بارش نہ ہو تو یہ چلے گا
//     });

// Ek function jo 2 second ke baad data return karega
// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 2000); // 2 second ka intezar
//   });
// }

// // Async function jo await ka intezar karega
// async function displayData() {
//   console.log("Fetching data...");

//   // Await ka use - hum is promise ka intezar karenge
//   let data = await fetchData();

//   // Jab data mil jaye ga to yeh line execute hogi
//   console.log(data);
// }

// // Function call karte hain
// displayData();


// class
// class Student {
//     // Constructor to initialize the Student object
//     constructor(name, rollNumber,cls) {
//         this.name = name;
//         this.rollNumber = rollNumber;
//         this.cls =cls;
//     }

//     // Method to display student details
//     displayInfo() {
//         console.log("Name: " + this.name);
//         console.log("Roll Number: " + this.rollNumber);
        
//         console.log("Roll Number: " + this.cls);
//     }
// }

// // Creating an object of Student class
// let student1 = new Student("Ali", 101,11);

// // Accessing the object's method
// student1.displayInfo();
// classes or objects reh gaya ha 