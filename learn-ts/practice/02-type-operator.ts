{
  // 1. 유니언 타입 사용하기: 값 출력하기
  const printValue = (a: string | number) => {
    console.log(a);
  };
  printValue('Hello');
  printValue(42);
}

{
  // 2. 유니언 타입을 사용한 조건 처리
  const doubleOrLength = (num: string | number) => {
    if (typeof num === 'string') {
      return num.length;
    } else {
      return num * 2;
    }
  };

  console.log(doubleOrLength('hello'));
  console.log(doubleOrLength(10));
}

{
  // 3. 인터섹션 타입 사용하기: 객체 합치기
  type Pperson = { name: string; age: number };
  type Eemployee = { jobTitle: string; salary: number };
  type Pe = Pperson & Eemployee;

  const mergeObjects = (value1: Pperson, value2: Eemployee): Pe => {
    return { ...value1, ...value2 };
  };

  const person = { name: 'Alice', age: 30 };
  const employee = { jobTitle: 'Engineer', salary: 5000 };
  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
}

{
  // 4. 유니언 타입을 사용한 배열 처리
  const getFirstElement = (a: (number | string | any)[]) => {
    const arr1 = a[0];
    if (typeof arr1 === 'number') {
      return arr1;
    } else if (typeof arr1 === 'string') {
      return arr1;
    } else {
      return undefined;
    }
  };

  console.log(getFirstElement([1, 2, 3]));
  console.log(getFirstElement(['a', 'b', 'c']));
  console.log(getFirstElement([]));
}

{
  // 5. 유니언 타입을 사용한 값 비교
  const isEqual = (value1: number | string, value2: number | string) => {
    if (value1 === value2) {
      return true;
    }
    return false;
  };

  console.log(isEqual(10, 10));
  console.log(isEqual('hello', 'world'));
  console.log(isEqual(5, '5'));
}

{
  // 6. 인터섹션 타입을 활용한 필드 업데이트
}

{
  // 7. 유니언 타입을 사용한 함수 반환 타입
  const maxValue = (a1: number | string, a2: number | string) => {
    if (typeof a1 == 'number' && typeof a2 == 'number') {
      return a1 > a2 ? a1 : a2;
    } else if (typeof a1 == 'string' && typeof a2 == 'string') {
      return a1.length > a2.length ? a1 : a2;
    }
  };
  console.log(maxValue(10, 20));
  console.log(maxValue('apple', 'banana'));
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue('cat', 'dog'));
}

{
  // 8. 유니언 타입으로 함수 오버로딩하기
  function getValue(value: string): string;
  function getValue(value: number): string;
  function getValue(value: string | number): string {
    if (typeof value === 'number') {
      return value.toString();
    }
    return value;
  }
  console.log(getValue(123));
  console.log(getValue('abc'));
}

// 9. 인터섹션 타입을 활용한 객체 합치기 (다양한 속성 포함)
