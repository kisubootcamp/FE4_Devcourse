const obj = { a: 1, b: 2, c: 3 };

function findKeyByValue(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) return key;
  }
  return null;
}

console.log(findKeyByValue(obj, 2)); // 'b'
console.log(findKeyByValue(obj, 4)); // null
console.log(findKeyByValue(obj, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null
