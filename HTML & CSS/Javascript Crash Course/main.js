// console.log("Hello World");

// // let, const.
// let age = 20
// // console.log(age);
// firstName = "Shourav";

// console.log(`I am ${age} years old.`);

// console.log(firstName.length);
// console.log(firstName.split(''));

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(7);
// numbers.pop();
// console.log(numbers);

// const person = {
//     "fname": "John",
//     "lname": "Smith",
//     "age": 30,
//     "hobbies": ["music", "movies", "sport"],
//     "address": {
//         "street": 1169,
//         "postal_code": "T2L 0C5",
//         "city": "Calgary"
//     }

// }

// console.log(person["fname"]);
// console.log(person["address"]["street"]);

// person["passion"] = "coding";
// console.log(person);

class Car {
  // constructor(name, year) {
  //   this.name = name;
  //   this.year = year;

  // }

  getFullName(action) {
    return action;
  }
}

// let myCar = new Car("Ford", 2014);
// console.log(myCar.getFullName("Bolod"));

// // console.log(window);
// // SIngle Element
// let form = document.getElementById("my-form");
// console.log(form);

// let select = document.querySelector(".btn")
// console.log(select);

// let list = document.querySelectorAll('.items');

// // for (let index = 0; index < list.length; index++) {
// //     console.log(list[index]);
// // }

// list.forEach((element) => console.log(element));

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = "Hello Moto!";
// ul.children[0].textContent = "What's up";
// ul.children[1].textContent = "Yo "

for (let index = 0; index < 3; index++) {
  ul.children[index].textContent = "Hello Moto";
}

let button = document.querySelector(".btn");
button.style.background = "DarkRed";

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Click");
});

const link = document.querySelector("a");
// console.log(link);

link.addEventListener("click", changeLink)

function changeLink() {
  console.log("The link is working!");
  link.style.color = "black";
}
