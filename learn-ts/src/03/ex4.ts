// TS 타입 오퍼레이터 연습문제+

// 1. 유니언 타입을 사용한 함수 구현: 타입에 따라 다르게 처리하기
// 문제:
// input으로 string, number, 또는 boolean을 받을 수 있는 함수 processInput을 작성하세요.
// - string인 경우, 문자열을 대문자로 변환하여 반환합니다.
// - number인 경우, 그 숫자의 제곱을 반환합니다.
// - boolean인 경우, true이면 "YES", false이면 "NO"를 반환합니다.
{
  const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") return value.toUpperCase();
    else if (typeof value === "number") return value ** 2;
    else return value ? "YES" : "NO";
  };

  // 테스트 케이스
  console.log(processInput("hello")); // "HELLO"
  console.log(processInput(5)); // 25
  console.log(processInput(true)); // "YES"
}

// 2. 유니언 타입으로 함수 반환 타입 처리
// 문제:
// string과 number 중 하나를 받아서,
// - string인 경우 문자열의 첫 번째 글자를 반환합니다.
// - number인 경우, 그 숫자의 첫 번째 자리를 반환합니다.
{
  const getFirstCharacter = (value: string | number): string | number => {
    if (typeof value === "string") return value[0];
    else return Number(value.toString()[0]);
  };

  // 테스트 케이스
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter(12345)); // 1
}

// 3. 인터섹션 타입을 활용한 복합 객체 다루기
// 문제:
// name과 age를 가진 객체와 jobTitle과 salary를 가진 객체를 합쳐서,
// Person 객체와 Employee 객체를 합친 새로운 객체를 반환하는 함수 combinePersonAndEmployee를 작성하세요.
// 결과 객체는 name, age, jobTitle, salary를 포함해야 합니다.
{
  const combinePersonAndEmployee = (
    person: { name: string; age: number },
    employee: { jobTitle: string; salary: number }
  ): { name: string; age: number; jobTitle: string; salary: number } => {
    return { ...person, ...employee };
  };

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };
  console.log(combinePersonAndEmployee(person, employee));
}

// 4. 유니언 타입을 이용한 객체의 프로퍼티 타입 검사
// 문제:
// 주어진 객체가 number 또는 string 타입의 id 프로퍼티를 가지며,
// id의 타입에 따라 값을 반환하는 함수 getIdValue를 작성하세요.
// - id가 number일 경우, 그 숫자를 그대로 반환합니다.
// - id가 string일 경우, 그 문자열의 길이를 반환합니다.
{
  const getIdValue = (obj: { id: number | string }): number => {
    if (typeof obj.id === "number") return obj.id;
    else return obj.id.length;
  };

  console.log(getIdValue({ id: 10 }));
  console.log(getIdValue({ id: "Hello" }));
}

// 5. 유니언 타입을 이용한 날짜 포맷 변환
// 문제:
// 주어진 입력 값이 string 또는 Date일 수 있습니다.
// - string인 경우 "YYYY-MM-DD" 형식으로 날짜를 반환합니다.
// - Date인 경우, 해당 날짜를 "MM/DD/YYYY" 형식으로 반환합니다.
{
  const formatDate = (value: string | Date): string => {
    if (typeof value === "string") return value;
    else {
      const day = value.getDate();
      const month = value.getMonth();
      const year = value.getFullYear();

      return `${month < 10 ? "0" : ""}${month}/${
        day < 10 ? "0" : ""
      }${day}/${year}`;
    }
  };

  // 테스트 케이스
  console.log(formatDate("2024-11-19")); // "2024-11-19"
  console.log(formatDate(new Date(2024, 10, 19))); // "10/19/2024"
}

// 6. 유니언 타입을 사용한 숫자와 문자열 변환
// 문제:
// input으로 number 또는 string을 받아,

// - number인 경우 그 값을 문자열로 변환하여 반환합니다.
// - string인 경우 그 문자열을 숫자로 변환하여 반환합니다.
// 단, 변환할 수 없는 문자열인 경우에는 NaN을 반환해야 합니다.
{
  const convert = (input: number | string): string | number => {
    if (typeof input === "number") return input.toString();
    else return Number(input);
  };

  // 테스트 케이스
  console.log(convert(123)); // "123"
  console.log(convert("456")); // 456
  console.log(convert("abc")); // NaN
}

// 7. 인터섹션 타입을 활용한 복합 객체 반환
// 문제:
// Person 객체와 Address 객체를 합쳐서, 이름, 나이, 주소를 모두 포함하는 새로운 객체를 반환하는 함수 combinePersonAndAddress를 작성하세요.
// - Person은 name, age 속성을 가집니다.
// - Address는 street, city, zipcode 속성을 가집니다.
{
  const combinePersonAndAddress = (
    person: { name: string; age: number },
    address: { street: string; city: string; zipcode: string }
  ): {
    name: string;
    age: number;
    street: string;
    city: string;
    zipcode: string;
  } => {
    return { ...person, ...address };
  };

  // 테스트 케이스
  const person = { name: "John", age: 25 };
  const address = {
    street: "123 Elm St",
    city: "Springfield",
    zipcode: "12345",
  };
  console.log(combinePersonAndAddress(person, address));
}

// 8. 유니언 타입을 활용한 두 값 비교하기
// 문제:
// 두 값을 받아서 `string`일 경우 알파벳 순서로 비교하고, `number`일 경우 크기 비교를 하여, 첫 번째 값이 더 크면 `true`, 그렇지 않으면 `false`를 반환하는 함수 `compareValues`를 작성하세요.
{
  const compareValues = (v1: string | number, v2: string | number): boolean => {
    return v1 > v2;
  };

  // 테스트 케이스
  console.log(compareValues(10, 20)); // false
  console.log(compareValues("apple", "banana")); // false
  console.log(compareValues("grape", "apple")); // true
}

// 9. 유니언 타입으로 복합 조건 처리
// 문제:
// `input` 값이 `number`일 경우, 그 숫자가 짝수인지 홀수인지 판별하여 `Even` 또는 `Odd`를 반환하고,
// `string`일 경우, 그 문자열의 길이가 짝수이면 "Even Length", 홀수이면 "Odd Length"를 반환하는 함수 `checkEvenOdd`를 작성하세요.
{
  const checkEvenOdd = (input: number | string): string => {
    if (typeof input === "number") return input % 2 === 0 ? "Even" : "Odd";
    else return input.length % 2 === 0 ? "Even Length" : "Odd Length";
  };

  // 테스트 케이스
  console.log(checkEvenOdd(4)); // "Even"
  console.log(checkEvenOdd(7)); // "Odd"
  console.log(checkEvenOdd("hello")); // "Odd Length"
  console.log(checkEvenOdd("code")); // "Even Length"
}

// 10. 인터섹션 타입을 활용한 동적 객체 반환
// 문제:
// `name`과 `age` 속성을 가진 객체에 추가로 `email`과 `phoneNumber` 속성을 가진 객체를 합쳐서 새로운 객체를 반환하는 함수 `mergeContactInfo`를 작성하세요. 각 속성은 선택적으로 포함될 수 있습니다.
{
  const mergeContactInfo = (
    person: { name: string; age: number },
    contactInfo: {
      email?: string;
      phoneNumber?: string;
    }
  ): { name: string; age: number; email?: string; phoneNumber?: string } => ({
    ...person,
    ...contactInfo,
  });

  // 테스트 케이스
  const person = { name: "Alice", age: 30 };
  const contactInfo = {
    email: "alice@example.com",
    phoneNumber: "123-456-7890",
  };
  console.log(mergeContactInfo(person, contactInfo));

  const personWithoutContact = { name: "Bob", age: 25 };
  console.log(mergeContactInfo(personWithoutContact, {}));
}
