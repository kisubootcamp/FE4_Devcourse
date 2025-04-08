{
  // 기본타입 연습문제1
  // 1. 문제 문자열 변수 선언
  // string 타입을 사용하여 "Hello" 라는 값을 갖는 문자열 변수를 선언하고, 이 값을 출력하세요
  let str1: string = "Hello";
  console.log(str1); // Hello

  // 2. 문제 숫자 변수 선언
  // number 타입을 사용하여 42라는 숫자를 갖는 변수를 선언하고, 출력하세요.
  let num1: number = 42;
  console.log(num1); // 42

  // 3. 문제 불리언 변수 선언
  // boolean 타입을 사용하여 true 값을 갖는 변수를 선언하고, 출력하세요.
  let bool1: boolean = true;
  console.log(bool1); // true;

  // 4. 문제 숫자 배열 선언
  // Array<number> 또는 number[] 타입을 사용하여 숫자 배열을 선언하고, 배열의 요소들을 출력하세요.
  let numArr1: number[] = [10, 20, 30, 40];
  console.log(numArr1); // [10,20,30,40];

  // 5. 문제 문자열 배열 선언
  // Array<string> 또는 string[] 타입을 사용하여 문자열 배열을 선언하고, 배열의 요소들을 출력하세요.
  let strArr1: string[] = ["송", "지", "은"];
  console.log(strArr1); // [ '송', '지', '은' ];

  // 6. 문제 튜플 변수 선언
  // tuple 타입을 사용하여 숫자와 문자열이 섞인 튜플을 선언하고, 이 값을 출력하세요.
  let tup1: (number | string)[] = [20, "지은", 111];
  console.log(tup1); // [ 20, '지은', 111 ]

  // 7. 문제 null 값 할당
  // null 타입을 사용하여 null 값을 갖는 변수를 선언하고, 이를 출력하세요.
  let nul1: null = null;
  console.log(nul1); // null

  // 8. 문제 undefined 값 할당
  // undefined 타입을 사용하여 undefined 값을 갖는 변수를 선언하고, 이를 출력하세요.
  let und1: undefined = undefined;
  console.log(und1); // undefined

  // 9. 문제 객체 선언
  // object 타입을 사용하여 이름과 나이를 포함하는 객체를 선언하고, 이를 출력하세요.
  let obj1: { name: string; age: number } = { name: "송지은", age: 20 };
  console.log(obj1); // { name: '송지은', age: 20 }

  // ---------------------------------------------------------------- //
  // 기본타입 연습문제2
  // 1. 변수 타입 지정하는 문제
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
  // {
  //   id: 123,
  //   name: 'John Doe',
  //   contact: { email: 'john.doe@example.com', phone: '123-456-7890' },
  //   department: 'Engineering'
  // }

  // 2. 변수 타입 지정 문제
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
  //   [
  //     { name: 'Alice', age: 22, grade: 'A' },
  //     { name: 'Bob', age: 24, grade: 'B' },
  //     { name: 'Charlie', age: 21, grade: 'C' }
  //   ]

  //   3. 문제 변수 타입 지정
  let numbers: number[] = [10, 20, 30, 40, 50];
  console.log(numbers); // [ 10, 20, 30, 40, 50 ]

  // 4. 문제 변수 타입 지정
  let users: {
    name: string;
    age: number;
    active: boolean;
  }[] = [
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
  ];
  console.log(users);
  //   [
  //     { name: 'Alice', age: 30, active: true },
  //     { name: 'Bob', age: 25, active: false },
  //     { name: 'Charlie', age: 35, active: true }
  //   ]

  // 5. 중첩된 배열 변수 타입 지정
  let nestedArray: [string[], number[], string[]] = [
    ["apple", "banana"],
    [1, 2, 3],
    ["cherry"],
  ];
  console.log(nestedArray); // [ [ 'apple', 'banana' ], [ 1, 2, 3 ], [ 'cherry' ] ]

  // 6. 문제 변수 타입 지정
  let words: string[] = ["apple", "banana", "cherry", "kiwi"];
  console.log(words); // [ 'apple', 'banana', 'cherry', 'kiwi' ]

  // 7. 문제 변수 타입 선언
  let items: (
    | { id: number; name: string; price: number }
    | [string, number]
  )[] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];
  console.log(items);
  //   [
  //     { id: 1, name: 'Item1', price: 100 },
  //     { id: 2, name: 'Item2', price: 200 },
  //     [ 'discount', 10 ]
  //   ]
  // 강사님ver
  let items1: [
    { id: number; name: string; price: number },
    { id: number; name: string; price: number },
    [string, number]
  ] = [
    { id: 1, name: "Item1", price: 100 },
    { id: 2, name: "Item2", price: 200 },
    ["discount", 10],
  ];

  // 8 문제 변수의 타입을 지정
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
  //   {
  //     user: { name: 'John', age: 30 },
  //     preferences: [ 'coding', 'reading', 'travelling' ],
  //     isActive: true
  //   }

  // 9 문제 변수의 타입을 지정
  let mixedData: (string | number | boolean)[] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];
  console.log(mixedData); // [ 'apple', 10, true, 'banana', 20 ]
  // 강사님 ver
  let mix1: [string, number, boolean, string, number] = [
    "apple",
    10,
    true,
    "banana",
    20,
  ];

  // 10 문제 변수의 타입을 지정
  let company: {
    name: string;
    address: { street: string; city: string; country: string };
  } = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Tech City",
      country: "Techland",
    },
  };
  console.log(company);
  //   {
  //     name: 'Tech Corp',
  //     address: { street: '123 Main St', city: 'Tech City', country: 'Techland' }
  //   }

  // ---------------------------------------------------------------- //
  // 기본타입 연습문제3
  // 1 문제 변수의 타입을 지정
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
  console.log(complexData);
  //   {
  //     id: 1,
  //     name: 'Product A',
  //     details: {
  //       description: 'This is a great product',
  //       dimensions: { height: 10, width: 5, depth: 2 },
  //       tags: [ 'sale', 'new', 'featured' ]
  //     },
  //     reviews: [
  //       { user: 'Alice', rating: 4.5, comment: 'Excellent!' },
  //       { user: 'Bob', rating: 3, comment: 'Decent product.' }
  //     ]
  //   }

  // 2 문제 변수의 타입 지정
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
  //   [
  //     [ { id: 1, value: 'a' }, { id: 2, value: 'b' } ],
  //     [ { id: 3, value: 'c' }, { id: 4, value: 'd' } ],
  //     [ { id: 5, value: 'e' }, { id: 6, value: 'f' } ]
  //   ]

  // 3 문제  변수의 타입을 지정
  let mixedData1: (
    | { type: string; name: string; age: number }
    | { type: string; id: number; name: string; price: number }
  )[] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];
  console.log(mixedData1);
  //   [
  //     { type: 'user', name: 'Alice', age: 30 },
  //     { type: 'user', name: 'Bob', age: 25 },
  //     { type: 'product', id: 1, name: 'Laptop', price: 999 },
  //     { type: 'product', id: 2, name: 'Smartphone', price: 499 }
  //   ]
  // 강사님ver
  let mix2: [
    { type: string; name: string; age: number },
    { type: string; name: string; age: number },
    { type: string; id: number; name: string; price: number },
    { type: string; id: number; name: string; price: number }
  ] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];

  // 4 문제 변수의 타입을 지정
  let dataSet: ({ name: string; price: number } | [string, number])[] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];
  console.log(dataSet);
  //   [
  //     { name: 'Item A', price: 100 },
  //     [ 'item1', 50 ],
  //     { name: 'Item B', price: 200 },
  //     [ 'item2', 75 ]
  //   ]
  // 강사님ver
  let data2: [
    { name: string; price: number },
    [string, number],
    { name: string; price: number },
    [string, number]
  ] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];

  // 5 문제 변수의 타입을 지정
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
  //   [
  //     {
  //       id: 1,
  //       value: 'apple',
  //       attributes: { weight: 1.2, color: 'green' }
  //     },
  //     {
  //       id: 2,
  //       value: 'banana',
  //       attributes: { weight: 0.5, color: 'yellow' }
  //     },
  //     { id: 3, value: 'cherry', attributes: { weight: 0.2, color: 'red' } }
  //   ]

  // 6 문제 변수의 타입을 지정
  let nestedData: { id: number; tags: string[]; name: string }[] = [
    { id: 1, tags: ["fruit", "sweet"], name: "apple" },
    { id: 2, tags: ["fruit", "tropical"], name: "mango" },
    { id: 3, tags: ["fruit", "berry"], name: "strawberry" },
  ];
  console.log(nestedData);
  //   [
  //     { id: 1, tags: [ 'fruit', 'sweet' ], name: 'apple' },
  //     { id: 2, tags: [ 'fruit', 'tropical' ], name: 'mango' },
  //     { id: 3, tags: [ 'fruit', 'berry' ], name: 'strawberry' }
  //   ]

  // 7 문제 변수의 타입을 지정
  let profile1: {
    name: string;
    age: number;
    favorites: (string | number | boolean)[];
    address: { street: string; city: string };
  } = {
    name: "Alice",
    age: 28,
    favorites: ["reading", 42, true, 99.9],
    address: {
      street: "123 Main St",
      city: "Metropolis",
    },
  };
  console.log(profile1);
  //   {
  //     name: 'Alice',
  //     age: 28,
  //     favorites: [ 'reading', 42, true, 99.9 ],
  //     address: { street: '123 Main St', city: 'Metropolis' }
  //   }

  // 8 문제 변수 타입 지정
  let userData: { user: { name: string; age: number }; status: string }[] = [
    { user: { name: "John", age: 32 }, status: "active" },
    { user: { name: "Doe", age: 28 }, status: "inactive" },
    { user: { name: "Jane", age: 35 }, status: "active" },
  ];
  console.log(userData);
  //   [
  //     { user: { name: 'John', age: 32 }, status: 'active' },
  //     { user: { name: 'Doe', age: 28 }, status: 'inactive' },
  //     { user: { name: 'Jane', age: 35 }, status: 'active' }
  //   ]

  // 9 문제 변수 타입 지정
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
  //   [
  //     { id: 1, name: 'Item 1', price: 100 },
  //     [ 'Discount', 20 ],
  //     { id: 2, name: 'Item 2', price: 200 },
  //     [ 'Discount', 10 ]
  //   ]
  // 강사님 ver
  let collection1: [
    { id: number; name: string; price: number },
    [string, number],
    { id: number; name: string; price: number },
    [string, number]
  ] = [
    { id: 1, name: "Item 1", price: 100 },
    ["Discount", 20],
    { id: 2, name: "Item 2", price: 200 },
    ["Discount", 10],
  ];

  // 10. 문제 변수 타입 지정
  let mixedItems: { id: number; type: string; name: string; size: string }[] = [
    { id: 1, type: "food", name: "Pizza", size: "Large" },
    { id: 2, type: "drink", name: "Coke", size: "Medium" },
    { id: 3, type: "food", name: "Burger", size: "Small" },
  ];
  console.log(mixedItems);
  //   [
  //     { id: 1, type: 'food', name: 'Pizza', size: 'Large' },
  //     { id: 2, type: 'drink', name: 'Coke', size: 'Medium' },
  //     { id: 3, type: 'food', name: 'Burger', size: 'Small' }
  //   ]
}
