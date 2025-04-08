// 연습문제 +
// 1. 문제: 중첩된 객체
// 이 변수의 타입을 지정하세요
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

// 2. 문제: 객체 배열에서 특정 값 찾기
// 이 변수의 타입을 지정하세요
let students: { name: string; age: number; grade: string }[] = [
  { name: "Alice", age: 22, grade: "A" },
  { name: "Bob", age: 24, grade: "B" },
  { name: "Charlie", age: 21, grade: "C" },
];

// 3. 문제: 숫자 배열에서 최댓값 구하기
// 이 변수의 타입을 지정하세요
let numbers: number[] = [10, 20, 30, 40, 50];

// 4. 문제: 객체 배열에서 특정 조건 만족하는 객체 찾기
// 이 변수의 타입을 지정하세요
let users: {
  name: string;
  age: number;
  active: boolean;
}[] = [
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 25, active: false },
  { name: "Charlie", age: 35, active: true },
];

// 5. 문제: 중첩된 배열
// 이 변수의 타입을 지정하세요
let nestedArray: [string[], number[], string[]] = [
  ["apple", "banana"],
  [1, 2, 3],
  ["cherry"],
];

// 6. 문제: 문자열 배열에서 길이가 5 이상인 문자열 찾기
// 이 변수의 타입을 지정하세요
let words: string[] = ["apple", "banana", "cherry", "kiwi"];

// 7. 문제: 여러 객체가 섞인 배열
// 이 변수의 타입을 지정하세요
let items: (
  | {
      id: number;
      name: string;
      price: number;
    }
  | (string | number)[]
)[] = [
  { id: 1, name: "Item1", price: 100 },
  { id: 2, name: "Item2", price: 200 },
  ["discount", 10],
];

// 8. 문제: 복합적인 객체
// 이 변수의 타입을 지정하세요
let profile: {
  user: {
    name: string;
    age: number;
  };
  preferences: string[];
  isActive: boolean;
} = {
  user: { name: "John", age: 30 },
  preferences: ["coding", "reading", "travelling"],
  isActive: true,
};

// 9. 문제: 여러 타입을 가진 배열
// 이 변수의 타입을 지정하세요
let mixedData: (string | number | boolean)[] = [
  "apple",
  10,
  true,
  "banana",
  20,
];

// 10. 문제: 중첩된 객체에서 키 접근하기
// 이 변수의 타입을 지정하세요
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
