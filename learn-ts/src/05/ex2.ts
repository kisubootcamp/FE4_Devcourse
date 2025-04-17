// TS 제네릭 연습문제+

/**
 * ### 1. **배열 합계 계산 함수 개선**

### 문제:

다음은 숫자 배열의 합을 구하는 함수입니다. 이 함수를 제네릭을 활용해 배열 타입에 상관없이 재사용 가능한 함수로 개선해보세요.
 */
{
  function sumArray(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sumArray([1, 2, 3])); // 6
}
{
  function sumArray<T extends number | string>(arr: T[]): T {
    const initial = (typeof arr[0] === "string" ? "" : 0) as T;
    return arr.reduce((acc, curr) => (acc as any) + (curr as any), initial);
  }

  console.log(sumArray([1, 2, 3])); // 6
}

/**
 *### 2. **객체 속성 값 추출 함수 개선**

### 문제:

다음은 객체에서 특정 속성의 값을 추출하는 함수입니다. 이 함수를 제네릭을 사용하여 여러 객체 타입에서 재사용할 수 있도록 개선해보세요.
 */
{
  function getName(obj: { name: string }): string {
    return obj.name;
  }

  const person = { name: "John", age: 30 };
  console.log(getName(person)); // John
}
{
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const person = { name: "John", age: 30 };
  console.log(getValue(person, "name")); // John
}

/**
 * ### 3. **배열 반전 함수 개선**

### 문제:

다음 코드는 배열을 반전하는 함수입니다. 제네릭을 활용하여 배열뿐만 아니라 다른 자료형에도 적용할 수 있는 함수로 개선해보세요.
 */
{
  function reverseArray(arr: number[]): number[] {
    return arr.reverse();
  }

  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
}
{
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
}

/**
 * ### 4. **배열 타입을 이용한 중복 제거 함수 개선**

### 문제:

다음 코드는 배열에서 중복된 값을 제거하는 함수입니다. 제네릭을 사용하여 다양한 타입의 배열에 대해서 중복을 제거할 수 있도록 개선해보세요.
 */
{
  function removeDuplicates(arr: number[]): number[] {
    return [...new Set(arr)];
  }

  console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
}
{
  function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }

  console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
  console.log(removeDuplicates(["a", "b", "b", "c"])); // [1, 2, 3]
  console.log(removeDuplicates([true, true, false, false])); // [1, 2, 3]
}

/**
 * ### 5. **기본값을 설정하는 함수 개선**

### 문제:

다음 코드는 객체의 기본값을 설정하는 함수입니다. 이 함수를 제네릭을 사용하여 객체의 타입에 맞게 기본값을 설정하도록 개선해보세요.
 */
{
  function setDefault(obj: { name: string; age: number }): {
    name: string;
    age: number;
  } {
    return { ...obj, age: obj.age || 18 };
  }

  console.log(setDefault({ name: "Alice", age: 0 })); // { name: "Alice", age: 18 }
}
{
  function setDefault<T, K extends keyof T>(
    obj: T,
    key: K,
    defaultValue: T[K]
  ): T {
    return {
      ...obj,
      [key]: obj[key] || defaultValue,
    };
  }

  console.log(setDefault({ name: "Alice", age: 0 }, "age", 18)); // { name: "Alice", age: 18 }
}

/**
 * ### 6. **제네릭을 사용한 키 값 검증 함수**

### 문제:

다음 코드는 객체에서 특정 키가 존재하는지 확인하는 함수입니다. 이 함수를 제네릭을 사용하여 객체 타입에 맞게 검사할 수 있도록 개선해보세요.
 */
{
  function hasKey(obj: { name: string; age: number }, key: string): boolean {
    return key in obj;
  }

  const person = { name: "Alice", age: 30 };
  console.log(hasKey(person, "name")); // true
  console.log(hasKey(person, "address")); // false
}
{
  function hasKey<T extends object>(obj: T, key: keyof T): boolean {
    return key in obj;
  }

  const person = { name: "Alice", age: 30 };
  console.log(hasKey(person, "name")); // true
  //   console.log(hasKey(person, "address")); // false
}

/**
 * ### 7. **제네릭을 활용한 타입 변환 함수**

### 문제:

다음은 숫자 배열을 문자열로 변환하는 함수입니다. 이 함수를 제네릭을 사용하여 배열의 타입에 맞게 동작하도록 개선해보세요.
 */
{
  function convertToString(arr: number[]): string[] {
    return arr.map((num) => num.toString());
  }

  console.log(convertToString([1, 2, 3])); // ["1", "2", "3"]
}
{
  function convertToString<T extends { toString(): string }>(
    arr: T[]
  ): string[] {
    return arr.map((num) => num.toString());
  }

  console.log(convertToString([1, 2, 3])); // ["1", "2", "3"]
}

/**
 * ### 8. **타입 안전한 객체 병합 함수**

### 문제:

두 개의 객체를 병합하는 함수입니다. 제네릭을 사용하여 객체 타입에 안전한 병합을 할 수 있도록 개선해보세요.
 */
{
  function mergeObjects(
    obj1: { name: string },
    obj2: { age: number }
  ): { name: string; age: number } {
    return { ...obj1, ...obj2 };
  }

  const obj1 = { name: "John" };
  const obj2 = { age: 25 };
  console.log(mergeObjects(obj1, obj2)); // { name: "John", age: 25 }
}
{
  function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  const obj1 = { name: "John" };
  const obj2 = { age: 25 };
  console.log(mergeObjects(obj1, obj2)); // { name: "John", age: 25 }
}

/**
 * ### 9. **값 검증 함수 개선**

### 문제:

주어진 값이 특정 조건을 만족하는지 확인하는 함수입니다. 제네릭을 사용하여 타입을 더욱 일반화하고 조건을 확장할 수 있도록 개선하세요.
 */
{
  function isPositive(num: number): boolean {
    return num > 0;
  }

  console.log(isPositive(10)); // true
}
{
  function isValid<T>(value: T, rule: (val: T) => boolean): boolean {
    return rule(value);
  }

  console.log(isValid(10, (n) => n > 0)); // true
  console.log(isValid("hello", (s) => s.length > 0)); // true
  console.log(isValid([1, 2, 3], (arr) => arr.length === 3)); // true
}
