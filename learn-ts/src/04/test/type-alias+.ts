//1
{
  type Action<T = any> = {
    type: string;
    payload: T;

    // code
  };

  // code
  function createAction<T>(type: string, payload: T): Action<T> {
    return { type, payload };
  }

  // 함수 호출 예시
  const action1 = createAction("ADD_ITEM", { id: 1, name: "item" });
  const action2 = createAction("UPDATE_ITEM", 42);
  const action3 = createAction("SET_STATUS", "success");

  console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
  console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
  console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}

//2
{
  type NumberOrString = {
    id: number | string;
    name: string;
  };

  const createObject = (id: number | string, name: string): NumberOrString => {
    return { id, name };
  };

  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

//3
{
  type Point = {
    x: number;
    y: number;
  };

  const calculateDistance = (p1: Point, p2: Point): number => {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  };

  const pointA = { x: 0, y: 0 };
  const pointB = { x: 3, y: 4 };
  console.log(calculateDistance(pointA, pointB)); // 5
}

//4
{
  type FetchResult =
    | { status: "loading" }
    | { status: "success"; data: string }
    | { status: "error"; message: string };
  const fetchData = (): FetchResult => {
    const ran = Math.random();

    if (ran < 0.33) {
      return { status: "loading" };
    } else if (ran < 0.66) {
      return { status: "success", data: "Data loaded successfully!" };
    } else {
      return { status: "error", message: "Failed to load data." };
    }
  };
  const result1 = fetchData();
  const result2 = fetchData();
  const result3 = fetchData();

  console.log(result1); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result2); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result3); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
}

//5
{
  type NullOrUndifined<T> = T extends null | undefined ? true : false;

  function getValue<T>(value: T): NullOrUndifined<T> {
    return (value === null || value === undefined) as NullOrUndifined<T>;
  }

  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

//6
{
  const setCoordinates = (x: number, y: number): [number, number] => {
    return [x, y];
  };
  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

//7
{
  type Person = {
    readonly name: string;
    readonly age: number;
  };

  const createPerson = (s: string, n: number): Person => {
    return { name: s, age: n };
  };

  const person = createPerson("John", 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  //person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}

//8
{
  type User = {
    id: string;
    name: string;
    email: string;
  };

  const updateUser = (u: User, updates: Partial<Omit<User, "id">>): User => {
    return { ...u, ...updates };
  };
  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  console.log(user1);
  const updatedUser1 = updateUser(user1, { name: "Alicia" });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}

//9
{
  type Role = "admin" | "user";

  type User = {
    id: string;
    name: string;
    role: Role;
  };

  type UserWithRole = User;

  const assignRole = (u: User, r: Role): UserWithRole => {
    return { ...u, role: r };
  };

  //code
  const user1: User = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user1, "admin");

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}

{
  type Primitive = string | number;

  const filterString = (value: Primitive): string => {
    if (typeof value === "string") {
      return value;
    } else throw new Error("Not a string");
  };

  const stringValue = filterString("Hello");
  console.log(stringValue); // 'Hello'

  const numberValue = filterString(123); // Error: Not a string
}
