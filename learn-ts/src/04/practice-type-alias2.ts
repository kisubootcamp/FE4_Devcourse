// Q1
{
  type Action = {
    type: string;
    payload: unknown;
  };

  // code
  function createAction(type: string, payload: unknown): Action {
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

// Q2
{
  type NumberOrString = number | string;

  const createObject = (id: NumberOrString, name: string): {} => {
    return { id, name };
  };

  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

// Q3
{
  type Point = {
    x: number;
    y: number;
  };

  const calculateDistance = (pointA: Point, pointB: Point): number => {
    const a = (pointA.x - pointB.x) ** 2;
    const b = (pointA.y - pointB.y) ** 2;
    const result = Math.sqrt(a + b);
    return result;
  };

  const pointA: Point = { x: 0, y: 0 };
  const pointB: Point = { x: 3, y: 4 };

  console.log(calculateDistance(pointA, pointB)); // 5
}

// Q4
{
  type FetchResult =
    | { status: "loading" }
    | { status: "success"; data: string }
    | { status: "error"; message: string };

  const fetchData = (status: string): FetchResult => {
    if (status === "loading") return { status };
    else if (status === "success")
      return { status, data: "Data loaded successfully!" };
    else if (status === "error")
      return { status, message: "Failed to load data." };
    else throw new Error("error");
  };

  const result1 = fetchData("loading");
  const result2 = fetchData("success");
  const result3 = fetchData("error");

  console.log(result1); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result2); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result3); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
}

// Q5
{
  type NullOrUndefined<T> = T extends null | undefined ? true : false;

  function getValue<T>(check: T): NullOrUndefined<T> {
    return (check === null || check === undefined) as NullOrUndefined<T>;
  }
  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

// Q6
{
  const setCoordinates = (x: number, y: number): [number, number] => {
    return [x, y];
  };

  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

// Q7
{
  type Person = {
    readonly name: string;
    readonly age: number;
  };

  const createPerson = (name: string, age: number): Person => {
    return { name, age };
  };

  const person = createPerson("John", 30);

  //   person.name = "Jane";
  console.log(person);
}

// Q8
{
  type User = {
    id: string;
    name: string;
    email: string;
  };

  const updateUser = (user: User, update: Partial<User>): User => {
    return { ...user, ...update };
  };

  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  const updatedUser1 = updateUser(user1, { name: "Alicia" });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}

// Q9
{
  type Role = "user" | "admin";
  type User = {
    id: string;
    name: string;
    role: Role;
  };

  const assignRole = (user: User, update: Role): User => {
    return { ...user, role: update };
  };

  const user1: User = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user1, "admin");

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}

// Q10
{
  type Primitive = string | number;

  const filterString = (value: Primitive): string => {
    if (typeof value === "string") {
      return value;
    } else return "Error: Not a string";
  };

  const stringValue = filterString("Hello");
  console.log(stringValue); // 'Hello'

  const numberValue = filterString(123); // Error: Not a string
  console.log(numberValue);
}
