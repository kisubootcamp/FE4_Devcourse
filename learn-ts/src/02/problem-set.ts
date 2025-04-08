{
  let str: string = "Hello";
  console.log(str);

  let num: number = 42;
  console.log(num);

  let bo: boolean = true;
  console.log(bo);

  let numArr: Array<number> = [1, 2, 3];
  console.log(numArr);

  let strArr: Array<string> = ["hi", "my", "name"];
  console.log(strArr);

  let tup: [number, string] = [3, "hyeju"];
  console.log(tup);

  let nullVal: null = null;
  console.log(nullVal);

  let undefVal: undefined = undefined;
  console.log(undefVal);

  let person: { pname: string; age: number } = {
    pname: "hyeju",
    age: 25,
  };
  console.log(person);

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

  let students: {
    name: string;
    age: number;
    grade: string;
  }[] = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 24, grade: "B" },
    { name: "Charlie", age: 21, grade: "C" },
  ];

  console.log(students);

  let numbers: Array<number> = [10, 20, 30, 40, 50];
  console.log(numbers);

  let users: { name: string; age: number; active: boolean }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];
  console.log(users);

  let nestedArray: (Array<string> | Array<number>)[] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];
  console.log(nestedArray);

  let words: Array<string> = ["apple", "banana", "cherry", "kiwi"];
  console.log(words);

  let items: [
    { id: number; name: string; price: number },
    { id: number; name: string; price: number },
    [string, number]
  ] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];
  console.log(items);

  let profile: {
    user: { name: string; age: number };
    preferences: Array<string>;
    isActive: boolean;
  } = {
    user: { name: "John", age: 30 },
    preferences: ["coding", "reading", "travelling"],
    isActive: true,
  };

  console.log(profile);

  let mixedData: Array<unknown> = ["apple", 10, true, "banana", 20];
  console.log(mixedData);

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
  console.log(company);

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
      tags: Array<string>;
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

  console.log(complexData);

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

  let mixedData2: (
    | { type: string; name: string; age: number }
    | { type: string; id: number; name: string; price: number }
  )[] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];
  console.log(mixedData2);

  let dataSet: ({ name: string; price: number } | [string, number])[] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];
  console.log(dataSet);

  let complexStructure: {
    id: number;
    value: string;
    attributes: { weight: number; color: string };
  }[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
  console.log(complexStructure);

  let nestedData: { id: number; tags: Array<String>; name: string }[] = [
    { id: 1, tags: ["fruit", "sweet"], name: "apple" },
    { id: 2, tags: ["fruit", "tropical"], name: "mango" },
    { id: 3, tags: ["fruit", "berry"], name: "strawberry" },
  ];
  console.log(nestedData);

  let profile2: {
    name: string;
    age: number;
    favorites: Array<unknown>;
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
  console.log(profile2);

  let userData: { user: { name: string; age: number }; status: string }[] = [
    { user: { name: "John", age: 32 }, status: "active" },
    { user: { name: "Doe", age: 28 }, status: "inactive" },
    { user: { name: "Jane", age: 35 }, status: "active" },
  ];
  console.log(userData);

  let collection: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: "Item 1", price: 100 },
    ["Discount", 20],
    { id: 2, name: "Item 2", price: 200 },
    ["Discount", 10],
  ];
  console.log(collection);

  let mixedItems: { id: number; type: string; name: string; size: string }[] = [
    { id: 1, type: "food", name: "Pizza", size: "Large" },
    { id: 2, type: "drink", name: "Coke", size: "Medium" },
    { id: 3, type: "food", name: "Burger", size: "Small" },
  ];
  console.log(mixedItems);
}
