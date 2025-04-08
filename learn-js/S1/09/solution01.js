const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged1 = { ...obj1, ...obj2 };
console.log(merged1);

const obj3 = { x: 10 };
const obj4 = { y: 20 };
const merged2 = { ...obj3, ...obj4 };
console.log(merged2);

const obj5 = { a: 1, b: 2 };
const obj6 = { a: 3, b: 4 };
const merged3 = { ...obj5, ...obj6 };
console.log(merged3);

const obj7 = {};
const obj8 = { z: 5 };
const merged4 = { ...obj7, ...obj8 };
console.log(merged4);
