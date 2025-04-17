// TS 타입별칭 연습문제+

/**
 * ### 1. **`Action` 타입을 이용한 이벤트 핸들러 정의**

**문제**: `Action` 타입을 정의하여 `type` (문자열), `payload` (문자열, 숫자, 객체 등 다양한 값이 될 수 있음) 속성을 가질 수 있도록 하세요. 그리고 `createAction` 함수는 `Action` 객체를 반환하도록 하세요.
 */
{
  type Action = {
    type: string;
    payload: string | number | object;
  };

  // code
  function createAction(
    type: string,
    payload: string | number | object
  ): Action {
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

/**
 * ### 2. **`NumberOrString` 타입을 사용한 객체 타입 생성**

**문제**: `NumberOrString` 타입을 정의하여 숫자 또는 문자열만 허용하는 타입을 만들고, 이를 사용하는 `createObject` 함수를 작성하세요. 이 함수는 `id` (숫자 또는 문자열)와 `name` (문자열)을 가지는 객체를 반환해야 합니다.
 */
{
  type NumberOrString = number | string;

  type obj = {
    id: NumberOrString;
    name: string;
  };

  function createObject(id: number | string, name: string): obj {
    return { id, name };
  }

  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

/**
 * ### 3. `Point` 타입 작성

**문제**: `Point` 타입을 작성하여 `x`와 `y` 값을 각각 나타내는 속성을 가지게 하세요. 이 타입을 사용해 두 점의 거리(`distance`)를 계산하는 `calculateDistance` 함수를 작성하세요.

(유클리드 거리 계산을 사용합니다.)
 */
{
  type Point = {
    x: number;
    y: number;
  };

  const calculateDistance = (point1: Point, point2: Point): number => {
    return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
  };

  const p1: Point = { x: 3, y: 4 };
  const p2: Point = { x: 0, y: 0 };

  console.log(calculateDistance(p1, p2));
}

/**
 * ### 4. **유니언 타입을 사용한 상태 관리 시스템**

**문제**: `Loading`, `Success`, `Error` 상태를 나타내는 `FetchRsult`유니언 타입을 정의하고, `fetchData` 함수가 반환하는 타입을 작성하세요. `fetchData` 함수는 `loading`, `success`, `error` 중 하나의 상태를 반환합니다.

- `status: 'loading'`일 때는 별다른 데이터 없이 상태만 반환합니다.
- `status: 'success'`일 때는 `data`(string) 속성에 데이터를 포함해야 하며,
- `status: 'error'`일 때는 `message`(string) 속성에 에러 메시지를 포함해야 합니다.
 */
{
  type FetchResult =
    | { status: "loading" }
    | { status: "success"; data: string }
    | { status: "error"; message: string };

  const fetchData = (): FetchResult => {
    const random = Math.random();

    if (random < 0.33) {
      return { status: "loading" };
    } else if (random < 0.66) {
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

/**
 * ### 5. **조건부 타입을 사용한 `NullOrUndefined` 타입 처리**

**문제**: `NullOrUndefined` 타입을 정의하고, `getValue` 함수에서 이 타입을 활용하여 값이 `null` 또는 `undefined`인지 여부를 체크하는 로직을 작성하세요.
 */
{
  type NullOrUndefined = null | undefined;

  function getValue(value: any): boolean {
    return value === null || value === undefined;
  }

  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

/**
 * 6.
 * 문제: setCoordinates 함수는 두 개의 숫자값(x, y)을 가지는 튜플을 입력받고, 이를 반환하는 타입을 정의하세요.
 */
{
  function setCoordinates(x: number, y: number): [number, number] {
    return [x, y];
  }

  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

/**
 * 7.
 * 문제: Person 객체는 name과 age 속성을 갖는 객체입니다. createPerson 함수는 Person 객체를 반환하는데, 이 객체는 불변이어야 합니다. 즉, Person 객체의 속성을 한 번 설정한 후에는 변경할 수 없어야 합니다.
 */
{
  type Person = {
    readonly name: string;
    readonly age: number;
  };

  function createPerson(name: string, age: number): Person {
    return { name, age };
  }

  const person = createPerson("John", 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  // person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}

/**
 * 8.
 * 문제: User 타입을 정의하여 id, name, email을 속성으로 가지게 하세요. 그런 후, updateUser 함수를 작성하여 선택적 속성만 업데이트하도록 하세요. updateUser는 일부 속성만 업데이트할 수 있도록 해야 합니다.
 */
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

/**
 * 9.
 * 문제: Role 타입을 정의하여 ‘admin'과 ‘user’를 유니언 타입으로 처리하고, assignRole 함수가 역할을 동적으로 할당하도록 하세요. 이때 assignRole 함수의 반환 값은 UserWithRole 타입이 될 수 있게 타입을 지정해줍니다.
 */
{
  type Role = "admin" | "user";

  type UserWithRole = {
    id: string;
    name: string;
    role: Role;
  };

  function assignRole(user: UserWithRole, role: Role): UserWithRole {
    return { ...user, role };
  }

  const user1: UserWithRole = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user1, "admin");

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}

/**
 * 10.
 * 문제: string과 number 타입을 구분하기 위한 Primitive 타입을 정의하고, string만 반환하는 함수를 작성하세요. 반환 값이 string만 포함되도록 타입을 작성하세요.
 */
{
  type Primitive = string | number;

  function filterString(value: Primitive): string {
    if (typeof value === "string") {
      return value;
    }

    throw new Error("Not a string");
  }

  const stringValue = filterString("Hello");
  console.log(stringValue); // 'Hello'

  const numberValue = filterString(123); // Error: Not a string
}
