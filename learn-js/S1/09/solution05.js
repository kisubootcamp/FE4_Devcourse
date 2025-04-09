{
  const obj = { a: 1, b: 2, c: 3 };
  const keyToDelete = "b";

  function deleteKey(obj, keyToDelete) {
    const result = {};
    for (key in obj) {
      if (key !== keyToDelete) result[key] = obj[key];
    }
    return result;
  }
  console.log(deleteKey(obj, keyToDelete));
}

{
  const obj2 = { x: 10, y: 20, z: 30 };
  const keyToDelete2 = "y";
  function deleteKey2(obj2, keyToDelete2) {
    const result2 = {};
    for (key in obj2) {
      if (key !== keyToDelete2) result2[key] = obj2[key];
    }
    return result2;
  }
  console.log(deleteKey(obj2, keyToDelete2));
} // { x: 10, z: 30 }

{
  const obj3 = { a: 5 };
  const keyToDelete3 = "a";
  function deleteKey(obj3, keyToDelete3) {
    const result = {};
    for (key in obj3) {
      if (key !== keyToDelete3) result[key] = obj3[key];
    }
    return result;
  }
  console.log(deleteKey(obj3, keyToDelete3));
} // {}

{
  const obj4 = { m: 1, n: 2, o: 3 };
  const keyToDelete4 = "p";
  function deleteKey(obj4, keyToDelete4) {
    const result = {};
    for (key in obj4) {
      if (key !== keyToDelete4) result[key] = obj4[key];
    }
    return result;
  }
  console.log(deleteKey(obj4, keyToDelete4));
} // { m: 1, n: 2, o: 3 }
