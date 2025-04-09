// Q1
{
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };

  const mergeObjects = (a, b) => {
    return { ...a, ...b };
  };

  console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }
}

// Q2
{
  const obj = { a: 1, b: 2, c: 3 };

  const objectToArray = (obj) => {
    return Object.entries(obj);
  };

  console.log(objectToArray(obj)); // [['a', 1], ['b', 2], ['c', 3]]
}

// Q3
{
  const obj = { a: 1, b: 5, c: 3 };
  const threshold = 2;

  const filterByThreshold = (obj, threshold) => {
    const result = {};
    for (let key in obj) {
      if (obj[key] >= threshold) result[key] = obj[key];
    }
    return result;
  };

  console.log(filterByThreshold(obj, threshold)); // { b: 5, c: 3 }
}

// Q4
{
  const obj = { a: 1, b: 2, c: 3 };

  const squareValues = (obj) => {
    for (let key in obj) {
      obj[key] = obj[key] ** 2;
    }
    return obj;
  };

  console.log(squareValues(obj)); // { a: 1, b: 4, c: 9 }
}

// Q5
{
  const obj = { a: 1, b: 2, c: 3 };
  const keyToDelete = "b";

  const deleteKey = (obj, keyToDelete) => {
    delete obj[keyToDelete];
    return obj;
  };
  console.log(deleteKey(obj, keyToDelete)); // { a: 1, c: 3 }
}

// Q6
{
  const obj = { a: 1, b: 2, c: 1, d: 3 };
  function removeDuplicateValues(obj) {
    const valueCount = {};
    const result = {};

    for (const key in obj) {
      const value = obj[key];
      valueCount[value] = (valueCount[value] || 0) + 1;
    }

    for (const key in obj) {
      const value = obj[key];
      if (valueCount[value] === 1) {
        result[key] = value;
      }
    }
    return result;
  }
  console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }
}

// Q7
{
  const obj = { a: 1, b: 2, c: 3 };

  const findKeyByValue = (obj, num) => {
    for (let key in obj) {
      if (obj[key] === num) return key;
    }
    return null;
  };

  console.log(findKeyByValue(obj, 2)); // 'b'
  console.log(findKeyByValue(obj, 4)); // null
  console.log(findKeyByValue(obj, 1)); // 'a'
  console.log(findKeyByValue({}, 1)); // null
}

// Q7
{
  const obj = { a: 1, b: 2, c: 3 };

  const multiplyValues = (obj) => {
    let result = 1;
    for (let key in obj) {
      result *= obj[key];
    }
    return result;
  };

  console.log(multiplyValues(obj)); // 6
}
