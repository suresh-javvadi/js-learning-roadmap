// before es6

function user(name) {
  name = name || "Guest";
  console.log(name);
}
user();
user("Suresh");

// After es6

function person(name = "Guest") {
  // default parameter
  console.log(name);
}
person();
person("Surya");

// also use experssion as defaault

function add(a = 5, b = 20) {
  console.log(`Addition is ${a + b}`);
}
add();
add(123, 877);
add(555);

// arrow functions
const greet = (name = "Stranger") => {
  console.log(`Hi, i am ${name}`);
};

greet();
greet("Spyder Man");
