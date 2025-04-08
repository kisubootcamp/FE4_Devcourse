const obj1 = { a: 1, b: 2, c: 3 };
let ob1 = [];
Object.keys(obj1).forEach((key) => {
  ob1.push([key, obj1[key]]);
});
console.log(ob1);

const obj2 = { x: 5, y: 10 };
let ob2 = [];
for (let key in obj2) {
  ob2.push([key, obj2[key]]);
}
console.log(ob2);

const obj3 = { p: 3 };
let ob3 = [];
Object.entries(obj3).forEach(([key, value]) => {
  ob3.push([key, value]);
});
console.log(ob3);

const obj4 = {};
let ob4 = [];
Object.values(obj4).forEach((value) => {
  ob4.push(value);
});
console.log(ob4);
