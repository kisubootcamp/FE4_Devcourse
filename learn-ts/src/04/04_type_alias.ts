// 타입 별칭 연습문제 +
{
  // 1. Action 타입을 이용한 이벤트 핸들러 정의
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

console.log("-------------------------------------");

{
  // 2. NumberOrString 타입을 사용한 객체 타입 생성
  type NumberOrString = number | string;

  function createObject(id: NumberOrString, name: string) {
    return { id, name };
  }

  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

console.log("-------------------------------------");

{
  // 3. Point 타입 작성
  type Point = {
    x: number;
    y: number;
  };

  function calculateDistance(point1: Point, point2: Point): number {
    return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
  }

  console.log(calculateDistance({ x: 1, y: 2 }, { x: 4, y: 6 })); // 5
}

console.log("-------------------------------------");

{
  // 4. 유니언 타입을 사용한 상태 관리 시스템
  //code

  type FetchResult = "Loading" | "Success" | "Error";
  type FetchMessage = {
    status: FetchResult;
    message?: string;
    data?: string;
  };

  function fetchData(): FetchMessage {
    const randomMath = Math.floor(Math.random() * 3) + 1;
    if (randomMath === 1) return { status: "Loading" };
    else if (randomMath === 2)
      return { status: "Success", data: "Data loaded successfully!" };
    else return { status: "Error", message: "Failed to load data." };
  }

  const result1 = fetchData();
  const result2 = fetchData();
  const result3 = fetchData();

  console.log(result1); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result2); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result3); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
}

console.log("-------------------------------------");

{
  // 5. 조건부 타입을 사용한 NullOrUndefined 타입 처리
  type NullOrUndefined = unknown;

  const getValue = (data: NullOrUndefined): boolean => {
    if (Object.is(data, null) || typeof data === "undefined") return true;
    else return false;
  };

  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

console.log("-------------------------------------");

{
  // 6. Tuple 을 이용한 setCoordintes 함수 작성

  type Point = [number, number];

  function setCoordinates(n1: number, n2: number): Point {
    return [n1, n2];
  }

  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

console.log("-------------------------------------");

{
  // 7. 객체 정의
  type Person = {
    readonly name: string;
    age: number;
  };

  function createPerson(name: string, age: number): Person {
    return { name, age };
  }

  const person = createPerson("Sam", 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}

console.log("-------------------------------------");

{
  // 8. 유니언 타입을 사용하여 선택적 속성 처리
  //code

  type User =
    | { name: string }
    | { email: string }
    | { name: string; email: string };

  function updateUser(user: User, updateData: User): User {
    return { ...user, ...updateData };
  }

  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  const updatedUser1 = updateUser(user1, { name: "Alicia" });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}

console.log("-------------------------------------");

{
  // 9. 유니언 타입

  type Role = "admin" | "user";
  type User = {
    id: string;
    name: string;
    role: Role;
  };

  function assignRole(user: User, role: Role) {
    const newUserData = { ...user };
    newUserData.role = role;
    return newUserData;
  }

  const user1: User = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user1, "admin");

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}

console.log("-------------------------------------");

{
  // 10. 유니언 타입을 사용하여 값 필터링
  //code

  type Primitive = string | number;

  function filterString(data: Primitive): string {
    if (typeof data === "string") return data;

    return "Error: Not a string";
    // throw new Error("Error: Not a string")
  }

  const stringValue = filterString("Hello");
  console.log(stringValue); // 'Hello'

  const numberValue = filterString(123); // Error: Not a string
  console.log(numberValue);
}
