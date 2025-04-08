{
  // ### 1. **문제**
  // let complexData = {
  //   id: 1,
  //   name: "Product A",
  //   details: {
  //     description: "This is a great product",
  //     dimensions: {
  //       height: 10,
  //       width: 5,
  //       depth: 2
  //     },
  //     tags: ["sale", "new", "featured"]
  //   },
  //   reviews: [
  //     { user: "Alice", rating: 4.5, comment: "Excellent!" },
  //     { user: "Bob", rating: 3.0, comment: "Decent product." }
  //   ]
  // };
  // - **이 변수의 타입을 지정하세요**.

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

  // ### 2. **문제**
  // let dataset = [
  //   [{ id: 1, value: "a" }, { id: 2, value: "b" }],
  //   [{ id: 3, value: "c" }, { id: 4, value: "d" }],
  //   [{ id: 5, value: "e" }, { id: 6, value: "f" }]
  // ];
  // - **이 변수의 타입을 지정하세요**.

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

  // ### 3. **문제**
  // let mixedData = [
  //   { type: "user", name: "Alice", age: 30 },
  //   { type: "user", name: "Bob", age: 25 },
  //   { type: "product", id: 1, name: "Laptop", price: 999 },
  //   { type: "product", id: 2, name: "Smartphone", price: 499 }
  // ];
  // - **이 변수의 타입을 지정하세요**.

  let mixedData: {
    type: string;
    name: string;
    age?: number;
    id?: number;
    price?: number;
  }[] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];

  // ### 4. **문제**
  // let dataSet = [
  //   { name: "Item A", price: 100 },
  //   [ "item1", 50 ],
  //   { name: "Item B", price: 200 },
  //   [ "item2", 75 ]
  // ];
  // - **이 변수의 타입을 지정하세요**.
  let dataSet: ({ name: string; price: number } | [string, number])[] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];

  // ### 5. **문제**
  // let complexStructure = [
  //   { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" }},
  //   { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" }},
  //   { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" }}
  // ];
  // - **이 변수의 타입을 지정하세요**.

  let complexStructure: {
    id: number;
    value: string;
    attributes: {
      weight: number;
      color: string;
    };
  }[] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];

  // ### 6. **문제**
  // let nestedData = [
  //   { id: 1, tags: ["fruit", "sweet"], name: "apple" },
  //   { id: 2, tags: ["fruit", "tropical"], name: "mango" },
  //   { id: 3, tags: ["fruit", "berry"], name: "strawberry" }
  // ];
  // - **이 변수의 타입을 지정하세요**.

  let nestedData: { id: number; tags: string[]; name: string }[] = [
    { id: 1, tags: ["fruit", "sweet"], name: "apple" },
    { id: 2, tags: ["fruit", "tropical"], name: "mango" },
    { id: 3, tags: ["fruit", "berry"], name: "strawberry" },
  ];

  // ### 7. **문제**
  // let profile = {
  //   name: "Alice",
  //   age: 28,
  //   favorites: [ "reading", 42, true, 99.9 ],
  //   address: {
  //     street: "123 Main St",
  //     city: "Metropolis"
  //   }
  // };
  // - **이 변수의 타입을 지정하세요**.

  let profile: {
    name: string;
    age: number;
    favorites: (string | number | boolean)[];
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

  // ### 8. **문제**
  // let userData = [
  //   { user: { name: "John", age: 32 }, status: "active" },
  //   { user: { name: "Doe", age: 28 }, status: "inactive" },
  //   { user: { name: "Jane", age: 35 }, status: "active" }
  // ];
  // - **이 변수의 타입을 지정하세요**.

  let userData: {
    user: {
      name: string;
      age: number;
    };
    status: string;
  }[] = [
    { user: { name: "John", age: 32 }, status: "active" },
    { user: { name: "Doe", age: 28 }, status: "inactive" },
    { user: { name: "Jane", age: 35 }, status: "active" },
  ];

  // ### 9. **문제**
  // let collection = [
  //   { id: 1, name: "Item 1", price: 100 },
  //   ["Discount", 20],
  //   { id: 2, name: "Item 2", price: 200 },
  //   ["Discount", 10]
  // ];
  // - **이 변수의 타입을 지정하세요**.

  let collection: (
    | { id: number; name: string; price: number }
    | (string | number)[]
  )[] = [
    { id: 1, name: "Item 1", price: 100 },
    ["Discount", 20],
    { id: 2, name: "Item 2", price: 200 },
    ["Discount", 10],
  ];

  // ### 10. **문제**
  // let mixedItems = [
  //   { id: 1, type: "food", name: "Pizza", size: "Large" },
  //   { id: 2, type: "drink", name: "Coke", size: "Medium" },
  //   { id: 3, type: "food", name: "Burger", size: "Small" }
  // ];
  // - **이 변수의 타입을 지정하세요**.
}

let mixedItems: { id: number; type: string; name: string; size: string }[] = [
  { id: 1, type: "food", name: "Pizza", size: "Large" },
  { id: 2, type: "drink", name: "Coke", size: "Medium" },
  { id: 3, type: "food", name: "Burger", size: "Small" },
];
