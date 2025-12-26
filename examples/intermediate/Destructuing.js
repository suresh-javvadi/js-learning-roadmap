// Object destructing

const person = {
  name: "Suresh",
  role: "Developer",
  city: "Hyd",
};

const { name, role } = person;

console.log(name);
console.log(role);

// rename during destruction
const { name: username } = person;
console.log(username); //Suresh only

console.log(person); // does nit change the original key

person.name = "Surya";
console.log(username); // user name wont change even original object changes
console.log(person);

const { country = "India", city = "vizag" } = person;
console.log(country); // if country is not there india will print
console.log(city); // city is there so hyd will be print

// array destruction
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [first, second, third] = array;

console.log(first, second, third);

// to skip values
const [, , , some] = array;

console.log(some);

// with the default values

const [x = 10, y = 20, z = 30] = [100]; // if value there is value that value will print or
console.log(x, y, z); // 100,20,30

// in the functions parameters
const printUser = ({ name = "suryya", role }) => {
  console.log(`Hello my name is ${name}, i am s ${role}`);
};

printUser({ role: "Developer" });
