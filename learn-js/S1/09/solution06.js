{
  const obj = { a: 1, b: 2, c: 1, d: 3 };
  function removeDuplicateValues(obj) {
    const result = {};
    const count = {};
    Object.values(obj).forEach((key, value) => {
      if (value[result] !== value[obj]) {
        console.log(obj[key]);
        result[key] = obj[key];
        console.log(result[key]);
      }
    });
    console.log(result);
  }
  console.log(removeDuplicateValues(obj));
} // { b: 2, d: 3 }
{
  const obj2 = { x: 5, y: 5, z: 10 };
  console.log(removeDuplicateValues(obj2));
} // { z: 10 }
{
  const obj3 = { p: 1, q: 1, r: 1 };
  console.log(removeDuplicateValues(obj3));
} // {}

{
  const obj4 = { m: 3, n: 4, o: 3 };
  console.log(removeDuplicateValues(obj4));
} // { n: 4 }
