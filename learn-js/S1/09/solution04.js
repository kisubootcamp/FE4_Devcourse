const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach((key, value) => {
  obj[key] = obj[key] ** 2;
});
console.log(obj);

const obj2 = { x: 2, y: 3 };
Object.keys(obj2).forEach((key, value) => {
  obj2[key] = obj2[key] ** 2;
});
console.log(obj2);

const obj3 = { p: 0, q: -2 };
Object.keys(obj3).forEach((key, value) => {
  obj3[key] = obj3[key] ** 2;
});
console.log(obj3);

const obj4 = {};
Object.keys(obj4).forEach((key, value) => {
  obj4[key] = obj4[key] ** 2;
});
console.log(obj4);
