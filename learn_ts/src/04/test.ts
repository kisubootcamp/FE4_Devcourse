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

// 연습문제+
{
  //1
  interface Animal {
    name: string;
    speak(): string;
  }
  interface Dog extends Animal {
    speak(): "woof!";
  }
  interface Cat extends Animal {
    speak(): "Meow!";
  }
}

{
  //2
  interface Employee {
    name: string;
    age: number;
    position?: string;
  }
  interface Company {
    name: string;
    location: string;
    employee: Employee;
  }
}

{
  //3
  interface Logger {
    log: (message: string) => void;
    history: string[];
  }

  const logger: Logger = {
    log: function (message: string) {
      this.history.push(message);
    },
    history: [],
  };

  logger.log("App started");
  logger.log("User logged in");
  console.log(logger.history); // ["App started", "User logged in"]
}

{
  //4
  type Response = {
    status: string;
    data: string;
  };
  function handleResponse(response: Response): string {
    if (response.status === "success") return `Success: ${response.data}`;
    else return `Error: ${response.status}`;
  }
}

{
  //5
  interface Author {
    name: string;
    birthYear: number;
  }
  interface Book {
    title: string;
    publishedYear: number;
    author: Author;
  }
}

{
  //6
  interface Employee {
    name: string;
    age: number;
  }

  interface Manager extends Employee {
    team: string[];
  }

  interface Developer extends Employee {
    language: string;
  }

  const manager: Manager = {
    name: "Alice",
    age: 35,
    team: ["Bob", "Charlie", "David"],
  };

  const developer: Developer = {
    name: "John",
    age: 28,
    language: "JavaScript",
  };
}

{
  //7
  interface Database {
    [key: string]: string[];
  }

  const db: Database = {
    users: ["Alice", "Bob", "Charlie"],
    orders: ["order1", "order2"],
  };

  console.log(db.users); // ["Alice", "Bob", "Charlie"]
  console.log(db.orders); // ["order1", "order2"]
}

{
  //8
  interface User {
    // 코드를 작성하세요.
    name: string;
    isAdmin: boolean;
    adminCode?: string;
  }

  function createUser(name: string, isAdmin: boolean): User {
    // 코드를 작성하세요
    if (isAdmin === true) {
      return {
        name: `${name}`,
        isAdmin,
        adminCode: `admin123`,
      };
    } else return { name: `${name}`, isAdmin };
  }

  const admin = createUser("Alice", true);
  const user = createUser("Bob", false);

  console.log(admin); // { name: "Alice", isAdmin: true, adminCode: "admin123" }
  console.log(user); // { name: "Bob", isAdmin: false }
}

{
  //9
  // 인터페이스를 작성하세요

  interface Shape {
    area: () => number;
  }
  interface Circle extends Shape {
    radius: number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const circle: Circle = {
    // 코드를 작성하세요
    radius: 20,
    area: function () {
      return this.radius * this.radius * 3.14;
    },
  };

  const rectangle: Rectangle = {
    // 코드를 작성하세요
    width: 10,
    height: 20,
    area: function () {
      return this.width * this.height;
    },
  };

  console.log(circle.area());
  console.log(rectangle.area());
}

{
  //10
  interface Vehicle {
    brand: string;
    model: string;
  }
  interface Electric {
    batteryLife: number;
  }
  interface ElectricCar extends Vehicle, Electric {
    charge: () => string;
  }

  const tesla: ElectricCar = {
    // 코드를 작성하세요
    brand: "BMW",
    model: "G80",
    batteryLife: 2080,
    charge: function () {
      return `${this.brand} ${this.model} ${this.batteryLife}`;
    },
  };

  tesla.charge();
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

//연습문제+
{
  //1
  type Obj = {
    [key: string]: unknown;
  };
  type Action = {
    type: string;
    payload: string | number | Obj;
  };

  // code
  function createAction(type: string, payload: Action["payload"]): Action {
    return {
      type,
      payload,
    };
  }

  // 함수 호출 예시
  const action1 = createAction("ADD_ITEM", { id: 1, name: "item" });
  const action2 = createAction("UPDATE_ITEM", 42);
  const action3 = createAction("SET_STATUS", "success");

  console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
  console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
  console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}

{
  //2
  //code
  type NumberOrString = number | string;

  function createObject(id: NumberOrString, name: string) {
    return {
      id,
      name,
    };
  }

  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

{
  //3
  type Point = {
    x: number;
    y: number;
  };
  function calculateDistance(a: Point, b: Point): number {
    return (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
  }
  calculateDistance({ x: 2, y: 3 }, { x: 4, y: 1 });
}

{
  //4
  type FetchRsult = {
    status: "loading" | "success" | "error";
    data?: string;
    message?: string;
  };

  function fetchData(data: FetchRsult): FetchRsult {
    if (data.status === "loading") return { status: data.status };
    if (data.status === "success")
      return { status: data.status, data: "Data loaded successfully!" };
    else return { status: data.status, message: "Failed to load data." };
  }
}

{
  //5
  type NullOrUndefined = null | undefined;
  //is는 타입스크립트에게 "이 조건이 true면, 이 값은 이 타입이다!" 라고 선언하는 역할입니다.
  function getValue(value: any): value is NullOrUndefined {
    return value === null || value === undefined;
  }

  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

{
  //6
  //code
  type Num = number;
  function setCoordinates(x: Num, y: Num): Num[] {
    return [x, y];
  }

  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

{
  //7
  type Person = {
    readonly name: string;
    readonly age: number;
  };
  function createPerson<T>(name: T, age: T): Person {}
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
