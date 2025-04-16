{
  // 1. 배열 합계 계산 함수 개선
  function sumArray<T>(arr: T[]): T | undefined {
    if (typeof arr[0] === "number") {
      return (arr as number[]).reduce((acc, curr) => acc + curr, 0) as T;
    } else {
      return `${arr[0]}${arr[1]}${arr[2]}` as T;
    }
  }

  console.log(sumArray<number>([1, 2, 3])); // 6
  console.log(sumArray<string>(["1", "2", "4"]));
}

{
  // 2. 객체 속성 값 추출 함수 개선
  function getName<T>(obj: { name: T; age?: number }): T {
    return obj.name;
  }

  const person = { name: "John", age: 30 };
  console.log(getName(person)); // John
}

{
  // 3. 배열 반전 함수 개선
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
  console.log(reverseArray([true, false, false]));
}

{
  // 4. 배열 타입을 이용한 중복 제거 함수 개선
  function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
  console.log(removeDuplicates([true, false, false]));
}

{
  // 5. 기본값을 설정하는 함수 개선
  //   type myType = {
  //     name: string;
  //     age?: number;
  //   };

  function setDefault<T extends { age?: number }>(obj: T): T & { age: number } {
    return { ...obj, age: obj.age || 18 };
  }

  console.log(setDefault({ name: "Alice", age: 0 })); // { name: "Alice", age: 18 }
}

{
  //6. 제네릭을 사용한 키 값 검증 함수
  type hasKeyType = {
    name: string;
    age: number;
  };
  function hasKey<T extends hasKeyType>(obj: T, key: string): boolean {
    return key in obj;
  }

  const person = { name: "Alice", age: 30 };
  console.log(hasKey(person, "name")); // true
  console.log(hasKey(person, "address")); // false
}

{
  // 7. 제네릭을 활용한 타입 변환 함수
  function convertToString<T extends { toString(): string }>(
    arr: T[]
  ): string[] {
    return arr.map((num) => num.toString());
  }

  console.log(convertToString([1, 2, 3])); // ["1", "2", "3"]
}

{
  // 8. 타입 안전한 객체 병합 함수
  type newType = {
    name?: string;
    age?: number;
  };
  function mergeObjects<T extends newType>(obj1: T, obj2: newType): newType {
    return {
      ...obj1,
      ...obj2,
    };
  }

  //   function mergeObjects<T extends newType, U extends newType>(obj1: T, obj2: U): newType {
  //     return {
  //       name: obj1.name ?? obj2.name,
  //       age: obj1.age ?? obj2.age,
  //     };
  //   }
  const obj1 = { name: "John" };
  const obj2 = { name: "John", age: 25 };
  console.log(mergeObjects(obj1, obj2)); // { name: "John", age: 25 }
}

{
  // 9. 값 검증 함수 개선
  function isPositive<T extends number>(num: T): boolean {
    return num > 0;
  }

  console.log(isPositive<number>(10)); // true
}
