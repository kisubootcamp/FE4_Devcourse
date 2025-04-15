{
  //1 타입 별칭  - 연습문제+ -
  type Action = {
    type: string;
    payload: any;
  };

  // code
  function createAction(type: string, payload: any) {
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

{
  //2 타입 별칭  - 연습문제+ -
  type NumberOrstring = number | string;
  const createObject = (id: NumberOrstring, name: string) => {
    return { id, name };
  };
  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

{
  //3 타입 별칭  - 연습문제+ -
  type Point = {
    x: number;
    y: number;
  };
  const calculateDistance = (a: Point, b: Point) => {
    const { x: ax, y: ay } = a;
    const { x: bx, y: by } = b;
    return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
  };
  const distance = calculateDistance({ x: 1, y: 2 }, { x: 4, y: 6 });
  console.log(distance);
}

{
  //4  타입 별칭  - 연습문제+ -

  type FetchResult =
    | { status: "loading" }
    | { status: "success"; data: string }
    | { status: "error"; message: string };

  const fetchData = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 2) {
      return { status: "loading" };
    } else if (random === 1) {
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

{
  //5 타입 별칭  - 연습문제+ -
  //잘 모르겠음
  type NullOrUndefined = null | undefined;
  function getValue(value: unknown) {
    if (value === undefined || value === null) {
      return true;
    }
    return false;
  }
  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

{
  //6 타입 별칭  - 연습문제+ -
  type Coordinate = [number, number];
  function setCoordinates(x: number, y: number): Coordinate {
    return [x, y];
  }
  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

{
  //7  타입 별칭  - 연습문제+ -
  type Person = {
    readonly name: string;
    readonly age: number;
  };
  const createPerson: (name: string, age: number) => Person = (name, age) => {
    return { name, age };
  };

  const person = createPerson("John", 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}

{
  //8 타입 별칭  - 연습문제+ -

  type User = {
    id: string;
    name: string;
    email: string;
  };

  function updateUser(user: User, data: Partial<User>): User {
    return { ...user, ...data };
  }

  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  const updatedUser1 = updateUser(user1, { name: "Alicia" });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}

{
  //9

  type UserWithRole = {
    id: string;
    name: string;
    role: string;
  };

  type Role = "admin" | "user";
  function assignRole(user: UserWithRole, role: Role): UserWithRole {
    return { ...user, role };
  }
  const user1 = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user1, "admin");

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}

{
  //10
  type Primitive = string | number;

  const filterString = (value: Primitive): string => {
    if (typeof value === "string") {
      return value;
    }

    throw Error("Not a string");
  };

  const stringValue = filterString("Hello");
  console.log(stringValue); // 'Hello'

  const numberValue = filterString(123); // Error: Not a string
}
