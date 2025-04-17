{
  // 1. 유니언 타입을 사용한 함수 구현: 타입에 따라 다르게 처리하기
  const processInput = (input: string | number | boolean) => {
    if (typeof input === 'string') {
      return input.toUpperCase();
    } else if (typeof input === 'number') {
      return input * input;
    } else {
      return input ? 'YES' : 'NO';
    }
  };

  console.log(processInput('hello')); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // YES
}

{
  // 2. 유니언 타입으로 함수 반환 타입 처리
  const getFirstCharacter = (value: string | number) => {
    if (typeof value === 'string') return value[0];
    else return Number(value.toString()[0]);
  };

  console.log(getFirstCharacter('hello')); // h
  console.log(getFirstCharacter(12345)); // 1
}

{
  // 3. 인터섹션 타입을 활용한 복합 객체 다루기
  type Person = { name: string; age: number };
  type Employee = { jobTitle: string; salary: number };

  const combinePersonAndEmployee = (
    a: Person,
    b: Employee
  ): Person & Employee => {
    return { ...a, ...b };
  };

  const person = { name: 'Alice', age: 30 };
  const employee = { jobTitle: 'Engineer', salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee)); // { name: 'Alice', age: 30, jobTitle: 'Engineer', salary: 5000 }
}

{
  // 4. 유니언 타입을 이용한 객체의 프로퍼티 타입 검사
  const getIdValue = (value: { id: number | string }): number => {
    if (typeof value.id === 'number') return value.id;
    else return value.id.length;
  };

  console.log(getIdValue({ id: 10 })); // 10
  console.log(getIdValue({ id: 'Hello' })); // 5
}

{
  // 5. 유니언 타입을 이용한 날짜 포맷 변환
  const formatDate = (value: string | Date): string => {
    if (typeof value === 'string') return value;
    else {
      const day = value.getDate();
      const year = value.getFullYear();
      const month = value.getMonth() + 1;

      return `${month < 10 ? '0' : ''}${month}/${
        day < 10 ? '0' : ''
      }${day}/${year}`;
    }
  };

  console.log(formatDate('2024-11-19')); // 2024-11-19
  console.log(formatDate(new Date(2024, 10, 19))); // 11/19/2024
}

{
  // 6. 유니언 타입을 사용한 숫자와 문자열 반환
  const convert = (input: number | string): number | string => {
    if (typeof input === 'number') {
      return input.toString();
    } else {
      return Number(input);
    }
  };

  console.log(convert(123)); // 123
  console.log(convert('456')); // 456
  console.log(convert('abc')); // NaN
}

{
  // 7. 인터섹션 타입을 활용한 복합 객체 반환
  type Person = { name: string; age: number };
  type Address = { street: string; city: string; zipcode: string };
  type Mix = Person & Address;

  const combinePersonAndAddress = (a: Person, b: Address): Mix => {
    return { ...a, ...b };
  };

  const person = { name: 'John', age: 25 };
  const address = {
    street: '123 Elm St',
    city: 'Springfield',
    zipcode: '12345',
  };
  console.log(combinePersonAndAddress(person, address)); // { name: 'John', age: 25, street: '123 Elm St', city: 'Springfield', zipcode: '12345' }
}

{
  // 8. 유니언 타입을 활용한 두 값 비교하기
  const compareValues = (a: number | string, b: number | string): boolean => {
    return a > b ? true : false;
  };

  console.log(compareValues(10, 20)); // false
  console.log(compareValues('apple', 'banana')); // false
  console.log(compareValues('grape', 'apple')); // true
}

{
  // 9. 유니언 타입으로 복합 조건 처리
  const checkEvenOdd = (input: number | string): string => {
    if (typeof input === 'number') return input % 2 === 0 ? 'Even' : 'Odd';
    else return input.length % 2 === 0 ? 'Even Length' : 'Odd Length';
  };

  console.log(checkEvenOdd(4)); // Even
  console.log(checkEvenOdd(7)); // Odd
  console.log(checkEvenOdd('hello')); // Odd Length
  console.log(checkEvenOdd('code')); // Even Length
}

{
  // 10. 인터섹션 타입을 활용한 동적 객체 변환
  type Person = { name: string; age: number };
  type Info = { email?: string; phoneNumber?: string };

  const mergeContactInfo = (a: Person, b: Info): Person & Info => {
    return { ...a, ...b };
  };

  const person = { name: 'Alice', age: 30 };
  const contactInfo = {
    email: 'alice@example.com',
    phoneNumber: '123-456-7890',
  };
  console.log(mergeContactInfo(person, contactInfo)); // { name: 'Alice', age: 30, email: 'alice@example.com', phoneNumber: '123-456-7890' }

  const personWithoutContact = { name: 'Bob', age: 25 };
  console.log(mergeContactInfo(personWithoutContact, {})); // { name: 'Bob', age: 25 }
}
