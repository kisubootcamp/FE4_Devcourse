const colors = ["red", "orange", "banana", { special: "pink" }];
const copyColors = [...colors];
copyColors[0] = "pink";
copyColors[3].special = "grey";

console.log(colors[0]); // "red"
console.log(colors); // [ 'red', 'orange', 'banana', { special: 'grey' } ]
console.log(copyColors); // [ 'pink', 'orange', 'banana', { special: 'grey' } ]
