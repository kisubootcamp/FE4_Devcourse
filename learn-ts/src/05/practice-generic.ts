// Q1
{
  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  console.log(getFirst([1, 2, 3])); // 1
}

// Q2
{
  function getLength<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getLength([1, 2, 3])); // 3
}

// Q3
{
  function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1];
  }

  console.log(getLast([1, 2, 3])); // 3
}

// // Q4 ??
// {
//   function add<T extends number | string>(a: T, b: T): T {
//     return a + b;
//   }

//   console.log(add(2, 3)); // 5
// }

// // Q5 ??
// {
//   function getValue<T, K extends keyof T>(obj: T): T[K] {
//     return obj[K];
//   }

//   console.log(getValue({ name: "Alice" })); // "Alice"
// }

// Q6
{
  function isEqual<T>(a: T, b: T): boolean {
    return a === b;
  }

  console.log(isEqual(2, 2)); // true
}

// Q7
{
  function square<T>(arr: T[]): number[] {
    return arr.map((num) => {
      if (typeof num === "number") return num * num;
      else throw new Error("error");
    });
  }

  console.log(square([1, 2, 3])); // [1, 4, 9]
}

// Q8
{
  function getFirstAndLast<T>(arr: T[]): T[] {
    return [arr[0], arr[arr.length - 1]];
  }

  console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
}

// Q9
{
  function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  console.log(mergeObjects({ name: "Alice" }, { age: 25 })); // { name: "Alice", age: 25 }
}

// Q10
{
  function getUnique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]
}
