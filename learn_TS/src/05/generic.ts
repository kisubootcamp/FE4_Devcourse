{
  // 1. 제네릭 -> 타입을 간단하게 지정할 수 있다. 재사용성이 증가!
  // 타입을 변수처럼 사용하는 문법
  function getFirstElement<T>(element: T[]): T {
    return element[0];
  }
  const rl = getFirstElement<number>([1, 2, 3]);
  console.log(rl); // 1

  const r2 = getFirstElement<string>(["1", "2", "3"]);
  console.log(r2); // 1

  const r3 = getFirstElement([true, false]);
  console.log(r3); // 1
}

{
  // 함수 표현식
  const getFirstElement = <T>(element: T[]): T => {
    return element[0];
  };
  const rl = getFirstElement([1, 2, 3]);
  console.log(rl); // 1
}

{
  // 함수 표현식
  const getFirstElement: <T>(element: T[]) => T = (element) => {
    return element[0];
  };
  const rl = getFirstElement([1, 2, 3]);
  console.log(rl); // 1
}

{
  // 제네릭 타입 별칭
  // 원하는 타입을 그때 그때 정할 수 있음
  type My<T> = (element: T[]) => T;
  const getFirstElement: My<unknown> = (element) => {
    return element[0];
  };
  const rl = getFirstElement([1, 2, 3]);
  console.log(rl); // 1
  const r2 = getFirstElement(["1", "2", "3"]);
  console.log(r2); // 1
  const r3 = getFirstElement([true, false]);
  console.log(r3); // 1
}

{
  // 타입 별칭
  // 타입을 변수에 저장한 것에 불과함
  type My = <T>(element: T[]) => T;
  const getFirstElement: My = (element) => {
    return element[0];
  };
  const rl = getFirstElement([1, 2, 3]);
  console.log(rl); // 1
  const r2 = getFirstElement(["1", "2", "3"]);
  console.log(r2); // 1
  const r3 = getFirstElement([true, false]);
  console.log(r3); // 1
}

{
  // interface
  interface My<T> {
    (element: T[]): T;
  }
  const getFirstElement: My<unknown> = (element) => {
    return element[0];
  };
  const rl = getFirstElement([1, 2, 3]);
  console.log(rl); // 1
  const r2 = getFirstElement(["1", "2", "3"]);
  console.log(r2); // 1
  const r3 = getFirstElement([true, false]);
  console.log(r3); // 1

  interface Car<T> {
    name: string;
    options: T;
  }

  const car1: Car<{ color: string }> = {
    name: "BMW",
    options: {
      color: "red",
    },
  };

  const car2: Car<{ wheels: number }> = {
    name: "g90",
    options: {
      wheels: 4,
    },
  };
}

{
  // interface
  // 내가 생각할 때 더 좋은 interface
  interface My {
    <T>(element: T[]): T;
  }
  const getFirstElement: My = (element) => {
    return element[0];
  };
  const rl = getFirstElement([1, 2, 3]);
  console.log(rl); // 1
  const r2 = getFirstElement(["1", "2", "3"]);
  console.log(r2); // 1
  const r3 = getFirstElement([true, false]);
  console.log(r3); // 1
}

{
  // another type -> U  두 번째 타입
  function returnTuple<T, U>(a: T, b: U) {
    return [a, b];
  }
  const r = returnTuple(1, 2);
  const r2 = returnTuple([1, 2, 3], { name: "s" });
  console.log(r, r2);

  // 제네릭 타입 제약
  // extends
  function getLength<T extends { length: number }>(value: T) {
    return value.length;
  }
  //   getLength(657);
  const leng = getLength("MELON");
  console.log(leng);

  // K : key 객체 타입의 키
  // V : value 객체 타입의 값
  function getValue<V, K extends keyof V>(ogj: V, key: K): V[K] {
    return ogj[key];
  }
  const name = getValue({ name: "kim", age: 20 }, "name");
  const gender = getValue({ gender: "male" }, "gender");
  console.log(name);

  // E: Element -> 주로 배열 요소의 타입
  function firstElement<E>(element: E[]): E {
    return element[0];
  }
  firstElement([1, 2, 3]);
  firstElement(["a", "a"]);
  // R: Return Type -> 반환 값의 타입 (함수에서 사용)
}

{
  function returnTuple<T, U>(a: U, b: T): [U, T] {
    return [a, b];
  }
  const r1 = returnTuple(1, 2); // [1, 2] -> [number, number]
  const r2 = returnTuple(1, "a"); // [1, 'a'] -> [number, string]
}
