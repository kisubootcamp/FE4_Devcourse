{
  //연습문제

  //1
  const hello: string = "hello";
  console.log(hello);

  //2
  const num42: number = 42;
  console.log(num42);

  //3
  const bol3: boolean = true;
  console.log(bol3);

  //4
  const numArr4: number[] = [1, 2, 3, 4, 5];
  console.log(numArr4);

  //5
  const strArr5: string[] = ["ㄱ", "ㄴ", "ㄷ"];
  console.log(strArr5);

  //6
  const mixArr6: [number, string] = [1, "ㄱ"];
  console.log(mixArr6);

  //7
  const null7: null = null;
  console.log(null7);

  //8
  const undefined8: undefined = undefined;
  console.log(undefined8);

  //9
  const obj9: {
    name: string;
    age: number;
  } = {
    name: "이준호",
    age: 28,
  };
  console.log(obj9);

  // 연습문제+

  //1
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

  //2
  let students: { name: string; age: number; grade: string }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];

  //3
  let numbers: Array<number> = [10, 20, 30, 40, 50];

  //4
  let users: { name: string; age: number; active: boolean }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];

  //5
  let nestedArray: (number[] | string[])[] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];

  //6
  let words: Array<string> = ["apple", "banana", "cherry", "kiwi"];

  //7
  let items: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  //8
  let profile: {
    user: { name: string; age: number };
    preferences: string[];
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };

  //9
  let mixedData: (string | number | boolean)[] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];

  //10
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

  // 연습문제++

  //1
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

  //2
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

  //3
  type User = {
    type: string;
    name: string;
    age: number;
  };

  type Product = {
    type: string;
    id: number;
    name: string;
    price: number;
  };

  let mixedData3: (User | Product)[] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];

  //4
  type Product4 = {
    name: string;
    price: number;
  };

  type Arr4 = (string | number)[];

  let dataSet: (Product4 | Arr4)[] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];

  //5
  type fruit5 = {
    id: number;
    value: string;
    attributes: { weight: number; color: string };
  };
  let complexStructure: fruit5[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];

  //6
  let nestedData: { id: number; tags: string[]; name: string };
  [] = [
    { id: 1, tags: ["fruit", "sweet"], name: "apple" },
    { id: 2, tags: ["fruit", "tropical"], name: "mango" },
    { id: 3, tags: ["fruit", "berry"], name: "strawberry" },
  ];

  //7
  let profile7: {
    name: string;
    age: number;
    favorites: [string, number, boolean, number];
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Alice",
    age: 28,
    favorites: ["reading", 42, true, 99.9],
    address: {
      street: "123 Main St",
      city: "Metropolis",
    },
  };

  //8
  let userData: { user: { name: string; age: number }; status: string }[] = [
    { user: { name: "John", age: 32 }, status: "active" },
    { user: { name: "Doe", age: 28 }, status: "inactive" },
    { user: { name: "Jane", age: 35 }, status: "active" },
  ];

  //9
  type Arr8 = [string, number];
  type obj8 = { id: number; name: string; price: number };
  let collection: (Arr8 | obj8)[] = [
    { id: 1, name: "Item 1", price: 100 },
    ["Discount", 20],
    { id: 2, name: "Item 2", price: 200 },
    ["Discount", 10],
  ];

  //10
  let mixedItems: { id: number; type: string; name: string; size: string }[] = [
    { id: 1, type: "food", name: "Pizza", size: "Large" },
    { id: 2, type: "drink", name: "Coke", size: "Medium" },
    { id: 3, type: "food", name: "Burger", size: "Small" },
  ];
}
