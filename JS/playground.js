// const a = 10

// NOTE : MultiLine

// var temp = "Hello";

// temp = "Google";

// let temp2 = 100;
// temp2 = 50;

// const temp3 = true;
// temp3 = false;

// var temp4;

// const a = 10;
// const b = 5;
// let c = 5;
// c = "ABC";

// const sum = a + b;
// console.log(a + b);
// console.log(a + b + c);

// const temp5 = [1, 2, 3, 4, 5, "A"];
// console.log(temp5[0]);

// temp5.forEach((item) => {
//   console.log(item);
// });

// const filterTemp = temp5.filter((item) => item >= 3);
// console.log("Filter number more than 3 is :", filterTemp);

// temp5.push(6);
// console.log("Insert 6 to aray", temp5);

// const car1 = {
//   color: "Red",
//   brand: "Honda",
//   model: { al: "Asccrod", a2: "Asssss" },
// };

// console.log(car1.model.a2);

// car1.color = "Blue";
// console.log(car1.color);

// function sayHello() {
//   console.log("Hi");
// }

// NOTE : Funtion arg.
const sayHello = (number, name) => {
  console.log(`Number is : ${number} by ${name}`);
};

const nickname = "Paper";
// sayHello(100, nickname);

// NOTE : Funtion return
const firstName = "Kanyarat";
const lastName = "Intarat";

const mergeName = (firstName, lastName) => {
  //  NOTE : 1.
  //   return firstName + " " + lastName;

  // NOTE :2.
  //   const fullName = firstName + " " + lastName;
  //   return fullName;

  //   NOTE : 3.
  return `${firstName} ${lastName}`;
};

// const fullName = mergeName(firstName, lastName);
// console.log(mergeName(firstName, lastName));

// NOTE : Conditions (if else)
// const number1 = 40;
// if (number1 > 30) {
//   console.log("number1 is more 30");
// }

// if (number1 < 30) {
//   console.log("Number1 is moer 30");
// } else {
//   console.log("Number1 is more 30");
// }

// if (Number1 < 20) {
//   console.log("Number is less 20");
// } else if (number1 < 30) {
//   console.log("Number1 is more 30");
// } else if (number1 < 30) {
//   console.log("Number1 is more 30");
// } else {
//   console.log("Number1 is more 40");
// }

// NOTE : switch case
// switch (number1) {
//   case 10:
//     console.log("Number is equal 20");
//     break;
//   case 30:
//     console.log("Number is equal 30");
//     break;
//   case 40:
//     console.log("Number is equal 40");
//     break;
//   default:
//     console.log("Number is equal 40");
//     break;
// }

// NOTE : Loop & Iterations
// const myCars = ["Ford Rapter", "Honda CRV", "Toyota Fortuner", "Lambogini"];
// for (let index = 0; index < myCars.length; index++) {
//   const car = myCars[index];
//   console.log(car);
// }

// const car1 = {
//   color: "Red",
//   brand: "Honda",
//   model: { al: "Asccrod", a2: "Asssss" },
// };
// for (const key in car1) {
//   if (Object.hasOwnProperty.call(car1, key)) {
//     const element = car1[key];
//     console.log(element);
//   }
// }
// for (const item of myCars) {
//   console.log(item);
// }

// let i = 0;
// while (i < 10) {
//   console.log("The numbre is :", i);
//   i++;
// }
