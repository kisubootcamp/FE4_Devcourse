console.log("a");

setTimeout(() => {
  console.log("b");
});

Promise.resolve().then(() => {
  console.log("c");
});

console.log("d");
