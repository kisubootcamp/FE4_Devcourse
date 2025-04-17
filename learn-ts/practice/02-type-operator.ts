{
  // 1. 유니언 타입 사용하기: 값 출력하기
  const printValue = (a: string | number): void => {
    if (typeof a === 'string') {
      console.log(a); // Hello
    } else {
      console.log(a); // 42
    }
  };

  printValue('Hello');
  printValue(42);
}

{
  // 2. 유니언 타입을 사용한 조건 처리
  const doubleOrLength = (a: string | number) => {
    if (typeof a === 'string') {
      return a.length;
    } else {
      return a * 2;
    }
  };

  console.log(doubleOrLength('hello')); // 5
  console.log(doubleOrLength(10)); // 20
}

{
  // 3. 인터섹션 타입 사용하기: 객체 합치기
  type Person = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };
  type Mix = Person & Employee;

  const mergeObjects = (a: Person, b: Employee): Mix => {
    return { ...a, ...b };
  };

  const person = {
    name: 'Alice',
    age: 30,
  };

  const employee = {
    jobTitle: 'Enginner',
    salary: 5000,
  };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject); // { name: 'Alice', age: 30, jobTitle: 'Enginner', salary: 5000 }
}

{
  // 4. 유니언 타입을 사용한 배열 처리
  const getFirstElement = (value: number[] | string[] | any[]) => {
    const firstArr = value[0];

    if (typeof firstArr === 'number') {
      return firstArr;
    } else if (typeof firstArr === 'string') {
      return firstArr;
    } else {
      return undefined;
    }
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(['a', 'b', 'c'])); // a
  console.log(getFirstElement([])); // undefined
}

{
  // 5. 유니언 타입을 사용한 값 비교
  const isEqual = (a: string | number, b: string | number): boolean => {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual('hello', 'world')); // false
  console.log(isEqual(5, '5')); // false
}

{
  // 6. 인터섹션 타입을 활용한 필드 업데이트
  type Person = { name: string; age: number };

  const updateAddress = (
    person: Person,
    address?: string
  ): Person | (Person & { address: string }) => {
    return address ? { ...person, address } : person;
  };

  const updatedPerson = updateAddress(
    { name: 'Jane', age: 28 },
    '123 Maple St'
  );
  console.log(updatedPerson); // { name: 'Jane', age: 28, address: '123 Maple St' }

  const updatedPersonWithoutAddress = updateAddress({
    name: 'John',
    age: 22,
  });
  console.log(updatedPersonWithoutAddress); // { name: 'John', age: 22 }
}

{
  // 7. 유니언 타입을 사용한 함수 반환 타입
  const maxValue = (
    a: number | string,
    b: number | string
  ): number | string => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a > b ? a : b;
    } else if (typeof a === 'string' && typeof b === 'string') {
      return a.length > b.length ? a : b;
    } else {
      throw new Error('invalid parameter');
    }
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue('apple', 'banana')); // banana
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue('cat', 'dog')); // dog
}

{
  // 8. 유니언 타입으로 함수 오버로딩하기
  function getValue(value: string): string;
  function getValue(value: number): string;
  function getValue(value: string | number): string {
    if (typeof value === 'number') {
      return value.toString();
    } else {
      return value;
    }
  }

  console.log(getValue(123)); // 123
  console.log(getValue('abc')); // abc
}

{
  // 9. 인터섹션 타입을 활용한 객체 합치기 (다양한 속성 포함)
  type Person = { name: string; age: number };
  type Contact = { email: string };
  type Mix = Person & Contact;

  const createContact = (a: Person, b: Contact): Mix => {
    return { ...a, ...b };
  };

  const person = { name: 'Alice', age: 28 };
  const contact = { email: 'alice@example.com' };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact); // { name: 'Alice', age: 28, email: 'alice@example.com' }
}

{
  // 10. 유니언 타입을 사용한 나이 체크
  const getAge = (age: number | string): number => {
    if (typeof age === 'string') {
      return parseInt(age);
    } else {
      return age;
    }
  };

  console.log(getAge('25')); // 25
  console.log(getAge(30)); // 30
  console.log(getAge('abc')); // NaN
}
