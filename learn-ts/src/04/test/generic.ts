//1
{
  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  console.log(getFirst([1, 2, 3])); // 1
}

//2
{
  function getLength<T>(arr: T[]): number {
    return arr.length;
  }

  console.log(getLength([1, 2, 3])); // 3
}

//3
{
  function getLast<T>(arr: T[]): T {
    return arr[arr.length - 1];
  }

  console.log(getLast([1, 2, 3])); // 3
}

//4
{
  function add<T>(a: T, b: T): T {
    if (typeof a === "number" && typeof b === "number") {
      return (a + b) as T;
    } else if (typeof a === "string" && typeof b === "string") {
      return (a + b) as T;
    }
  }
  console.log(add(2, 3)); // 5
}

//5
{
  function getValue<T>(obj: { name: T }): T {
    return obj.name;
  }

  console.log(getValue({ name: "Alice" })); // "Alice"
}

//6
{
  function isEqual<T>(a: T, b: T): boolean {
    return a === b;
  }

  console.log(isEqual(2, 2)); // true
}

//7 내일풀어야지
{
  function square<T>(arr: T[]): T[] {
    return arr.map((num) => num * num);
  }

  console.log(square([1, 2, 3])); // [1, 4, 9]
}

//8
{
  function getFirstAndLast<T>(arr: T[]): T[] {
    return [arr[0], arr[arr.length - 1]];
  }

  console.log(getFirstAndLast([1, 2, 3])); // [1, 3]
}

//9
{
  function mergeObjects<T, U>(obj1: { name: T }, obj2: { age: U }) {
    return { ...obj1, ...obj2 };
  }

  console.log(mergeObjects({ name: "Alice" }, { age: 25 })); // { name: "Alice", age: 25 }
}

//10
{
  function getUnique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }

  console.log(getUnique([1, 2, 2, 3])); // [1, 2, 3]
}
