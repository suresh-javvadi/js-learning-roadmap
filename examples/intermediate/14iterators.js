// const arr = [10, 20, 35, 44, 59];

// const iterator = arr[Symbol.iterator]();

// console.log(iterator);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// custom iterator

const myNumbers = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const num of myNumbers) {
  console.log(num);
}

const myIterable = {
  data: ["apple", "banana", "cherry"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      },
    };
  },
};

for (let fruit of myIterable) {
  console.log(fruit);
}
