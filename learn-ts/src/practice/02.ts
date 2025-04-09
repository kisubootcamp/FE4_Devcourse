{
  // 01
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

  // 02
  let students: { name: string; age: number; grade: string }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];

  // 03
  let numbers: number[] = [10, 20, 30, 40, 50];

  // 04
  let users: { name: string; age: number; active: boolean }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];

  // 05
  let nestedArray: [string[], number[], string[]] = [
    // = (string[] | number[])[], (string | number)[][]
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];

  // 06
  let words: string[] = ["apple", "banana", "cherry", "kiwi"];

  // 07
  let items: /*[
    { id: number; name: string; price: number },
    { id: number; name: string; price: number },
    [string, number]
  ]*/ ({ id: number; name: string; price: number } | (string | number)[])[] = [
    // 소괄호로 묶어주지 않으면 앞의 객체 모양 이거나 string | number 모양의 배열임으로 잘못 설정됨
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  // 타입 가드(Type Guard)
  // 타입을 좁혀주는 행위
  if ("name" in items[0]) {
    console.log(items[0].name);
  }
  //items[0].id; // 유니온 타입을 사용할 때에는 타입의 가짓수가 많아지기 때문에 사용할 값의 타입을 검증해주고 사용해야 함.

  // 08
  let profile: {
    user: { name: string; age: number };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };

  // 09
  let mixedData: [string, number, boolean, string, number] = [
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
