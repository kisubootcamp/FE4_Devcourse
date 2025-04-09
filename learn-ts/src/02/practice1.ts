{
  // 1
  let employee: {
    id: number;
    name: string;
    contact: {
      email: string;
      phone: string;
    };
    department: string;
  } = {
    id: 123,
    name: "John Doe",
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    department: "Engineering",
  };

  // 2
  let students: {
    name: string;
    age: number;
    grade: string;
  }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];

  // 3
  let numbers: number[] = [10, 20, 30, 40, 50];

  // 4
  let users: {
    name: string;
    age: number;
    active: boolean;
  }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];

  // 5
  let nestedArray: [string[], number[], string[]] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];

  // (string | number)[][]도 가능하지만 가독성이 떨어짐.
  // 유니온 타입을 아래와 같이 사용하는 게 가장 정석적인 방법.
  let nestedArray_: (string[] | number[])[] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];

  // 6
  let words: string[] = ["apple", "banana", "cherry", "kiwi"];

  // 7
  let items: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  // 유니온 타입
  let items_: (
    | { id: number; name: string; price: number }
    | (string | number)[]
  )[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  // console.log(items_[0].name); // 에러가 남
  // -> 유니온 타입이기 때문에 사전에 타입 검증을 해줘야 에러가 나지 않음
  // 타입 가드(Type Guard) -> 타입을 좁혀주는 행위
  if ("name" in items_[0]) {
    console.log(items_[0].name);
  }

  // 이 경우에는 타입 추론을 해줌
  let value: number | string = 10.12;
  console.log(value.toFixed(0));

  // 현재 우리가 배운 tuple 방식 풀이
  let items__: [
    { id: number; name: string; price: number },
    { id: number; name: string; price: number },
    [string, number]
  ] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  // 8
  let profile: {
    user: { name: string; age: number };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };

  // 9
  let mixedData: (string | number | boolean)[] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];

  // 현재 우리가 배운 tuple 방식 풀이
  let mixedData_: [string, number, boolean, string, number] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];

  // 10
  let company: {
    name: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  } = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Tech City",
      country: "Techland",
    },
  };
}
