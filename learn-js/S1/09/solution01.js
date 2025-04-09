{
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  function mergeObjects(a, b) {
    return { ...a, ...b };
  }
  console.log(mergeObjects(obj1, obj2));
} // { a: 1, b: 3, c: 4 }

{
  const obj3 = { x: 10 };
  const obj4 = { y: 20 };
  function mergeObjects(a, b) {
    return { ...a, ...b };
  }

  console.log(mergeObjects(obj3, obj4));
} // { x: 10, y: 20 }

{
  const obj5 = { a: 1, b: 2 };
  const obj6 = { a: 3, b: 4 };
  function mergeObjects(a, b) {
    return { ...a, ...b };
  }

  console.log(mergeObjects(obj5, obj6));
} // { a: 3, b: 4 }

{
  const obj7 = {};
  const obj8 = { z: 5 };
  function mergeObjects(a, b) {
    return { ...a, ...b };
  }
  console.log(mergeObjects(obj7, obj8));
} // { z: 5 }
