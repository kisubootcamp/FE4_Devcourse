//1 연습문제 string 타입을 사용하여 "Hello"라는 값을 갖는 문자열 변수를 선언하고, 이 값을 출력하세요.
{
  const hi: string = "hello";
  console.log(hi);
  //연습문제 2 number 타입을 사용하여 42라는 숫자를 갖는 변수를 선언하고, 출력하세요.
  const number1: number = 42;
  console.log(number1);
  // 연습문제 3 object 타입을 사용하여 이름과 나이를 포함하는 객체를 선언하고, 이를 출력하세요.
  const obj: { name: string; age: number } = { name: "이현우", age: 28 };
  console.log(obj);

  //연습문제++ 이 변수의 타입을 지정하시오
  /* let employee = {
  id: 123,
  name: "John Doe",
  contact: {
    email: "john.doe@example.com",
    phone: "123-456-7890"
  },
  department: "Engineering"
};*/
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
  console.log(employee);
  //연습문제++  이 변수의 타입을 지정하라
  //   let students = [
  //     { name: "Alice", age: 22, grade: "A" },
  //     { name: "Bob", age: 24, grade: "B" },
  //     { name: "Charlie", age: 21, grade: "C" }
  //   ];
  let students: { name: string; age: number; grade: string }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];
  console.log(students);
  //연습문제++  타입을 지정하시오
  //let numbers = [10, 20, 30, 40, 50];
  let numbers: number[] = [10, 20, 30, 40, 50];
  console.log(numbers);
  // 타입 지정
  //   let items = [
  //     { id: 1, name: "Item1", price: 100 },
  //     { id: 2, name: "Item2", price: 200 },
  //     ["discount", 10]
  //   ];
  let items: ({ id: number; name: string; price: number } | [string, number])[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];
  console.log(items);

  let profile: {
    user: { name: string; age: number };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };
  console.log(profile);
  //연습문제+++
  //   let dataset = [
  //     [{ id: 1, value: "a" }, { id: 2, value: "b" }],
  //     [{ id: 3, value: "c" }, { id: 4, value: "d" }],
  //     [{ id: 5, value: "e" }, { id: 6, value: "f" }]
  //   ];
  let dataset: { id: number; value: string }[][] = [
    [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
    ],
    [
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ],
    [
      { id: 5, value: "e" },
      { id: 6, value: "f" },
    ],
  ];
  console.log(dataset);
  //연습문제+++
  let complexData: {
    id: number;
    name: string;
    details: {
      description: string;
      dimensions: {
        height: number;
        width: number;
        depth: number;
      };
      tags: string[];
    };
    reviews: { user: string; rating: number; comment: string }[];
  } = {
    id: 1,
    name: "Product A",
    details: {
      description: "This is a great product",
      dimensions: {
        height: 10,
        width: 5,
        depth: 2,
      },
      tags: ["sale", "new", "featured"],
    },
    reviews: [
      { user: "Alice", rating: 4.5, comment: "Excellent!" },
      { user: "Bob", rating: 3.0, comment: "Decent product." },
    ],
  };
  //연문+++
  let mixedItems: { id: number; type: string; name: string; size: string }[] = [
    { id: 1, type: "food", name: "Pizza", size: "Large" },
    { id: 2, type: "drink", name: "Coke", size: "Medium" },
    { id: 3, type: "food", name: "Burger", size: "Small" },
  ];
  console.log(mixedItems);
}
