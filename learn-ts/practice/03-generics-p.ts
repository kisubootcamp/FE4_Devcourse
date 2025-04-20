{
  // 1. 배열 합계 계산 함수 개선
  function sumArray<T>(arr: T[], initial: T, combiner: (a: T, b: T) => T): T {
    return arr.reduce(combiner, initial);
  }

  console.log(sumArray([1, 2, 3], 0, (a, b) => a + b)); // 6
}

{
  // 2. 배열 반전 함수 개선
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
}

{
  // 3. 배열 타입을 이용한 중복 제거 함수 개선
  function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
}

{
  // 4. 기본값을 설정하는 함수 개선
  function setDefault<T extends object>(obj: T): T {
    return { ...obj, age: (obj as any).age || 18 };
  }

  console.log(setDefault({ name: 'Alice', age: 0 })); // { name: "Alice", age: 18 }
}

{
  // 5. 제네릭을 사용한 키 값 검증 함수
  function hasKey<T extends object>(obj: T, key: PropertyKey): boolean {
    return key in obj;
  }

  const person = { name: 'Alice', age: 30 };
  console.log(hasKey(person, 'name')); // true
  console.log(hasKey(person, 'address')); // false
}

{
  // 6. 제네릭을 활용한 타입 변환 함수
  function convertToString<T>(arr: T[]): string[] {
    return arr.map((num) => String(num));
  }

  console.log(convertToString([1, 2, 3])); // ["1", "2", "3"]
}

{
  // 7. 타입 안전한 객체 병합 함수
  function mergeObjectss<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  const obj1 = { name: 'John' };
  const obj2 = { age: 25 };
  console.log(mergeObjectss(obj1, obj2)); // { name: "John", age: 25 }
}

{
  // 8. 값 검증 함수 개선
  function isPositive<T>(num: T, numm: (n: T) => boolean): boolean {
    return numm(num);
  }

  console.log(isPositive(10, (n) => n > 0)); // true
}
