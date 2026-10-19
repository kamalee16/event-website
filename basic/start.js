
// sort
let strong = [40, 10, 20, 5, 30];

let ascending = strong.sort((a, b) => a - b);
console.log(ascending);
// ascending = [5, 10, 20, 30, 40]

// for descending (a, b) => b - a
let descending = strong.sort((a, b) => b - a);
console.log(descending);


// splice
let res = strong.splice(2, 1, 100);
console.log(strong);
// output: [40, 10, 100, 5, 30]

// splice(index, number of elements to remove from that index,
// the number to add instead)


// reduce
let number = [10, 20, 30, 40];

let resreduces = number.reduce((total, num) => {
  return total + num;
}, 20); // 20 initial value of total

console.log(resreduces);
// with initial value the total = initial value, num = first element
// output: 120

let resreduce = number.reduce((total, num) => {
  return total + num;
});

console.log(resreduce);
// without initial value the total = first element, num = second element
// output: 100


// some
let numbers = [10, 20, 15, 15];

let ressome = numbers.some((n) => {
  return n > 20;
});

console.log(ressome);
// it returns true if any element satisfies the condition
// output: false


// every
let numbers2 = [10, 20, 15, 15];

let ress = numbers2.every((n) => {
  return n < 30;
});

console.log(ress);
// returns true if every element satisfies the condition
// output: true


// spread with Array
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

const combin = [...first, ...second];
console.log(combin);
// output: [1, 2, 3, 4, 5, 6, 7, 8]


// Hoisting
var a;
console.log(a);
a = 10;
// output: undefined
great();
function great(){
  console.log("print");
} // op:print

//closure
function account(){
  let balance=1000;
  function deposit(amount){
    balance=balance+amount
    console.log("balanceaccount "+balance);
    
  }
  return deposit;
}
const myaccount=account();
myaccount(500);
myaccount(700);//op: 1500, 2200