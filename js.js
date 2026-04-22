// map
let a = [1, 2, 3];
console.log(a.map((a) => a * 2));

let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(b);

let filteredB = b.filter((b) => !(b % 2 === 0));
console.log(filteredB);

a.forEach((a) => a * 2);
console.log("a:", a);

console.log([1, 2, 3].reduce((acc, curr) => acc + curr));

let obj = {
  bb: 5,
  ee: 10,
};
console.log("obj: ", obj);
console.log(obj.hasOwnProperty("ee"));
