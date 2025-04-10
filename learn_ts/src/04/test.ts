//인터페이스

//연습문제
{
  // 1
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "이준호",
    age: 28,
  };
}

{
  // 2
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: "현대",
    model: "제네시스 G80",
    start() {
      console.log("부릉부릉");
    },
  };
}

{
  // 3
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  const employee: Employee = {
    name: "x",
    position: "center",
  };
}

{
  // 4
  interface Team {
    name: string;
    members: string[];
  }
  const team: Team = {
    name: "7조",
    members: ["아무개", "홍길동", "김씨"],
  };
}

{
  // 5
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }
}

{
  // 6
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }
  const person = {
    name: "이준호",
    age: 28,
    greet() {
      console.log(`Hello,my name is ${this.name}`);
    },
  };
}

{
  // 7
  interface Shape {
    area(): void;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }
}

{
  // 8
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }
  interface Contact {
    person: Person;
    address: Address;
  }
}

{
  // 9
  interface Dictionary {
    [key: string]: string;
  }
}

{
  // 10
  interface Operation {
    (n1: number, n2: number): number;
  }
  const sum: Operation = (n1, n2) => {
    return n1 + n2;
  };
  const subtract: Operation = (n1, n2) => {
    return n2 - n1;
  };
}

// 타입별칭

{
  // 1
  type Person = {
    name: string;
    age: number;
  };
  function getPersonInfo(value: Person): Person {
    return value;
  }
  getPersonInfo({ name: "김땅땅", age: 30 });
}

{
  // 2
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };
  function createConfig(str: string, num: number, boo: boolean): Config {
    return { host: str, port: num, ssl: boo };
  }
}

{
  // 3
  type Rectangle = {
    width: number;
    height: number;
  };
  function calculateArea(obj: Rectangle): number {
    return (obj.width * obj.height) / 2;
  }
  calculateArea({
    width: 30,
    height: 50,
  });
}

{
  // 4
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };

  function calculateAverageGrade(obj: Student): number {
    let temp;
    temp = obj.grades.reduce((acc, num) => acc + num, 0);
    return temp / obj.grades.length;
  }

  const obj = {
    name: "jun",
    age: 13,
    grades: [21, 42, 53],
  };

  calculateAverageGrade(obj);
}

{
  // 5
  type Response = {
    [key: string]: string;
  };

  const john = {
    status: "success",
    data: "John",
    message: "fetch success",
  };
  function createResponse(obj: Response) {
    return obj;
  }
  createResponse(john);
}

{
  // 6
  //code
  type Employee = {
    [key: string]: string;
  };
  function getEmployeeInfo(obj: Employee): Employee {
    return obj;
  }

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  );
}

{
  // 7
  type Circle = {
    radius: number;
  };

  function calculateCircumference(obj: Circle): number {
    return 2 * Math.PI * obj.radius;
  }
  //code

  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  // 8
  //code
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };
  function getDiscountedPrice(obj: Product, num: number): number {
    num = 1 - num / 100;

    return obj.price * num;
  }
  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

{
  // 9
  //code..
  type Book = { title: string; author: string; publishedYear: number };
  function getBookSummary({ title, author, publishedYear }: Book): string {
    return `${title} by ${author}, published in ${publishedYear}.`;
  }
  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  // 10
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };
  function isValidTransaction({ id, amount, timestamp }: Transaction): boolean {
    return amount > 0;
  }
  console.log(
    isValidTransaction({ id: "성수", amount: 2, timestamp: "14:00 - 17:00" })
  );
}

// enum 연습 문제
{
  // 1
  enum weeks {
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  function getDayName(day: number): string {
    if (day === weeks.MONDAY) return "Monday";
    if (day === weeks.TUESDAY) return "Tuesday";
    if (day === weeks.WEDNESDAY) return "Wednesday";
    if (day === weeks.THURSDAY) return "Thursday";
    if (day === weeks.FRIDAY) return "Friday";
    if (day === weeks.SATURDAY) return "Saturday";
    if (day === weeks.SUNDAY) return "Sunday";
    return "Invalid day";
  }
  getDayName(weeks["TUESDAY"]);
}

{
  // 2
  enum Status {
    SUCCESS = 200,
    NOT_FOUND = 404,
    INTERNAL_ERROR = 500,
  }

  function getStatusMessage(status: number): string {
    if (status === Status.SUCCESS) return "Success";
    if (status === Status.NOT_FOUND) return "Not Found";
    if (status === Status.INTERNAL_ERROR) return "Internal Server Error";
    return "Unknown Status";
  }
  getStatusMessage(200);
}

{
  // 3
  enum City {
    SEOUL = "Seoul",
    BUSAN = "Busan",
    DAEGU = "Daegu",
  }

  function getCityByZip(zip: string): string {
    if (zip === "100") return City.SEOUL;
    if (zip === "200") return City.BUSAN;
    if (zip === "300") return City.DAEGU;
    return "Unknown City";
  }
  getCityByZip("100");
}

{
  //4
  enum User {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
  }

  function getPermissionLevel(role: string): string {
    if (role === User.ADMIN) return "Full access";
    if (role === User.USER) return "Limited access";
    if (role === User.GUEST) return "Guest access";
    return "No access";
  }
  getPermissionLevel("Guest access");
}

{
  // 5
  enum State {
    PENDING = 1,
    SHIPPED,
    DELIVERED,
  }

  function getProductStatus(status: number): string {
    if (status === State.PENDING) return "Pending";
    if (status === State.SHIPPED) return "Shipped";
    if (status === State.DELIVERED) return "Delivered";
    return "Unknown Status";
  }
  getProductStatus(2);
}

{
  // 6
  enum orderState {
    ORDER_PLACED = "Order Placed",
    PAYMENT_PENDING = "Payment Pending",
    SHIPPED = "Shipped",
    DELIVERED = "Delivered",
  }

  function getOrderStatus(status: string): string {
    if (status === orderState.ORDER_PLACED)
      return "Your order has been placed.";
    if (status === orderState.PAYMENT_PENDING) return "Payment is pending.";
    if (status === orderState.SHIPPED) return "Your order has been shipped.";
    if (status === orderState.DELIVERED)
      return "Your order has been delivered.";
    return "Unknown Status";
  }
}

{
  // 7
  enum ChangeStatus {
    IS_ACTIVE = "true",
    IS_INACTIVE = "false",
  }

  function toggleStatus(status: boolean): boolean {
    return !status;
  }
  toggleStatus(Boolean(ChangeStatus.IS_ACTIVE));
}

{
  // 8
  enum Option {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2",
    OPTION_THREE = "Option 3",
  }

  function getOptionValue(option: string): string {
    if (option === Option.OPTION_ONE) return "You selected Option 1.";
    if (option === Option.OPTION_TWO) return "You selected Option 2.";
    if (option === Option.OPTION_THREE) return "You selected Option 3.";
    return "Invalid option";
  }
  getOptionValue("Option 1");
}

{
  // 9
  enum Meal {
    BREAKFAST = "Breakfast",
    LUNCH = "Lunch",
    DINNER = "Dinner",
  }

  function getMealTime(meal: string): string {
    if (meal === Meal.BREAKFAST) return "Good morning, it's breakfast time!";
    if (meal === Meal.LUNCH) return "Good afternoon, it's lunch time!";
    if (meal === Meal.DINNER) return "Good evening, it's dinner time!";
    return "Invalid meal time";
  }
  getMealTime(Meal.DINNER);
}

{
  // 10
  enum Valid {
    LOGGED_IN = "true",
    LOGGED_OUT = "false",
  }

  function checkLoginStatus(status: boolean): string {
    if (status === Boolean(Valid.LOGGED_IN)) return "You are logged in.";
    if (status === Boolean(Valid.LOGGED_OUT)) return "You are logged out.";
    return "Unknown status";
  }
  checkLoginStatus(Boolean(Valid.LOGGED_IN));
}
