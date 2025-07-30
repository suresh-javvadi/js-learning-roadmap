let name = "Surya";

function greet() {
  console.log(`Hello ${this.name}`); //here this is reference object of greet
}

greet();

// global scope

console.log(this); // window in browers in  node.js it is {}||global

// In reualr function

function hello() {
  console.log(this);
}

hello();

// In object

const smile = {
  name: "Suresh",
  greet: function () {
    console.log(`${this.name}`); // here this refers to the smile object
  },
};

const cry = {
  name: "Surya",
  greet: function () {
    console.log(`Hello ${this.name}`); // here this refers to the cry object
  },
};

smile.greet();
cry.greet();

const sayHi = smile.greet; // copied only function
sayHi(); // so the link b/w this and object gone

// this with arrow function

const help = {
  name: "Suersh",
  mesasge: "Help me",
  askHelp: function () {
    console.log(`${this.name} please ${this.mesasge}`);
  },
  againHelp: () => {
    console.log(`${this.name} please ${this.mesasge}`);
  },
};

help.askHelp();
help.againHelp(); //undefined please undefined, in browser " "  please undefined

// arrow function in setTimeout

const person = {
  name: "PK",

  greet() {
    {
      setTimeout(function () {
        console.log(`${this.name} from normal function`); // this undefined due to setTimeout has own this
      });
    }
    {
      setTimeout(() => {
        console.log(`${this.name} from arrow function`); // inherits this from greet() → which is bound to person
      });
    }
  },
};

person.greet();

// this with bind

const bottle = {
  color: "pink",
  cap: function () {
    console.log(`Bottle color is ${this.color}`);
  },
};

const myBottle = bottle.cap;
myBottle(); // undiefined due to this is lost

const bindBottle = bottle.cap.bind(bottle); // adding manully the this thisArg here i.e bottle

bindBottle();

function bottle1() {
  console.log(`${this.name}`);
}

const bottles = {
  name: "Bisileri",
};

bottle1.bind(bottles)();

const paper = {
  color: "White",
  pen: function () {
    setTimeout(
      function () {
        console.log(`i am writing on ${this.color} paper`);
      }.bind(this), // in setTimeOut  normal function lost the this, bind this to that function
      1000
    );
  },
};

paper.pen();

// Pre-filling Arguments (Partial Functions)

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // a is fixed to 2
const triple = multiply.bind(null, 3); // a is fix to 3

console.log(double(5));
console.log(triple(5));

// this with call

const person1 = {
  name: "Suresh",
  role: "Developer",
  greet: function deatils(greeting) {
    console.log(`${greeting}, my name is ${this.name}. I am a ${this.role}`);
  },
};

const greet1 = person1.greet;

greet1.call(person1, "Hi"); // (thisArg, greeting) and invoke function

function job() {
  console.log(`${this.name}`);
}

const jobTypes = { name: "Devloper" };

job.call(jobTypes);

// this with apply

const num = [1, 2, 436, 90, 32, 56, 3, 4];

const max = Math.max(num);

console.log(max); // NaN because Math.max does not accept arrays

const maxWithApply = Math.max.apply(null, num);

console.log(maxWithApply, "Max using apply");
