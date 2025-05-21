const obj = { a: 1, b: 5, c: 3 };
const threshold = 2;
const filterByThreshold = {};
for (let key in obj) {
  if (obj[key] >= threshold) {
    filterByThreshold[key] = obj[key];
  }
}
console.log(filterByThreshold);

const obj2 = { x: 1, y: 2, z: 3 };
const threshold2 = 2;
const filterByThreshold2 = {};
for (let key in obj2) {
  if (obj2[key] >= threshold2) {
    filterByThreshold2[key] = obj2[key];
  }
}
console.log(filterByThreshold2);

const obj3 = { a: 10, b: 5, c: 1 };
const threshold3 = 6;
const filterByThreshold3 = {};
for (let key in obj3) {
  if (obj3[key] >= threshold3) {
    filterByThreshold3[key] = obj3[key];
  }
}
console.log(filterByThreshold3);

const obj4 = { m: -1, n: 0, o: 1 };
const threshold4 = 0;
const filterByThreshold4 = {};
for (let key in obj4) {
  if (obj4[key] >= threshold4) {
    filterByThreshold4[key] = obj4[key];
  }
}
console.log(filterByThreshold4);
