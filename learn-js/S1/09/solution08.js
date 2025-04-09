{
  const obj = { a: 1, b: 2, c: 3 };
  function multiplyValues(obj) {
    let a = 1;
    Object.keys(obj).forEach((key) => {
      a *= obj[key];
    });
    return a;
  }

  console.log(multiplyValues(obj));
} // 6

{
  const obj2 = { x: 2, y: 3, z: 4 };
  function multiplyValues(obj2) {
    let a = 1;
    Object.keys(obj2).forEach((key) => {
      a *= obj2[key];
    });
    return a;
  }

  console.log(multiplyValues(obj2));
} // 24

{
  const obj3 = { a: 1, b: 0, c: 3 };
  function multiplyValues(obj3) {
    let a = 1;
    Object.keys(obj3).forEach((key) => {
      a *= obj3[key];
    });
    return a;
  }
  console.log(multiplyValues(obj3));
} // 0

{
  const obj4 = {};
  function multiplyValues(obj4) {
    let a = 1;
    Object.keys(obj4).forEach((key) => {
      a *= obj4[key];
    });
    return a;
  }
  console.log(multiplyValues(obj4));
} // 1 (곱셈의 항등원)
