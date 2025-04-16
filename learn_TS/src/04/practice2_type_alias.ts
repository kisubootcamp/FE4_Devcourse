{
  // Action 타입을 이용한 이벤트 핸들러 정의
  type Action = {
    type: string;
    payload:
      | string
      | number
      | {
          id: number;
          name: string;
        };
  };

  // code
  function createAction(
    type: string,
    payload:
      | string
      | number
      | {
          id: number;
          name: string;
        }
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

{
  // 2. NumberOrString 타입을 사용한 객체 타입 생성
  type onlyStrNum = {
    id: number | string;
    name: string;
  };
  function createObject(id: number | string, name: string): onlyStrNum {
    return { id, name };
  }
  const object1 = createObject(1, "Alice");
  const object2 = createObject("123", "Bob");

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

{
  // point 타입 작성
  type Point = [number, number];

  function calculateDistance(x: Point, y: Point): number {
    return Math.sqrt((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2); // 루트를 표현 :Math.sqrt()
  }
  console.log(calculateDistance([3, 4], [5, 6]));
}

{
  // 4. 유니언 타입을 사용한 상태 관리 시스템
  type FetchRsult = {
    status: string;
    data?: string;
    message?: string;
  };

  function fetchData(
    status: string,
    data?: string,
    message?: string
  ): FetchRsult | undefined {
    if (status === "loading") {
      return { status };
    } else if (status === "success") {
      return { status, data };
    } else if (status === "error") {
      return { status, message };
    }
  }

  const result1 = fetchData("loading");
  const result2 = fetchData("success", "Data loaded successfully!");
  const result3 = fetchData("error", "Failed to load data.");

  console.log(result1); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result2); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
  console.log(result3); // { status: 'loading' } 또는 { status: 'success', data: 'Data loaded successfully!' } 또는 { status: 'error', message: 'Failed to load data.' }
}

{
  // 5. 조건부 타입을 사용한 NullOrUndefined 타입 처리///
  type NullOrUndefined = string | number | null | boolean | undefined;
  function getValue(input: NullOrUndefined): boolean {
    return input === null || input === undefined;
    // typeof 키워드는 문자열을 반환하지만 null은 안됨
    // input === null	오직 null만 체크
    // input === undefined	오직 undefined만 체크
    // input == null	둘 다 체크 (null 또는 undefined일 때 true)
  }
  const check1 = getValue(null);
  const check2 = getValue(undefined);
  const check3 = getValue("Hello");

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

{
  // Tuple을 이용한 setCoordinates 함수 작성
  function setCoordinates(a: number, b: number): number[] {
    return [a, b];
  }
  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

{
  // 7. 객체 정의
  type Person = {
    readonly name: string;
    age: number;
  };
  function createPerson(name: string, age: number): Person {
    return { name, age };
  }
  const person = createPerson("John", 30);

  // person 객체의 속성은 변경할 수 없도록 해야 합니다.
  //person.name = "Jane"; // 오류 발생: 읽기 전용 속성이므로 수정할 수 없음
  console.log(person); // { name: 'John', age: 30 }
}

{
  // 8. 유니언 타입을 사용하여 선택적 속성 처리

  type User = {
    id: string;
    name: string;
    email: string;
  };
  function updateUser(update: User, newThings: { name: string }): User {
    return { ...update, name: newThings.name };
  }
  const user1 = { id: "1", name: "Alice", email: "alice@example.com" };
  const updatedUser1 = updateUser(user1, { name: "Alicia" });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}

{
  // 9. 유니언 타입
  type User = {
    id: string;
    name: string;
    role: string;
  };
  function assignRole(update: User, newThings: string): User {
    return { ...update, role: newThings };
  }
  const user1 = { id: "1", name: "Alice", role: "user" };
  const updatedUser = assignRole(user1, "admin");

  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}

{
  // 10. 유니언 타입을 사용하여 값 필터링
  //code

  function filterString(input: string | number): string {
    if (typeof input === "string") {
      return input;
    }
    return "Error: Not a string";
  }
  const stringValue = filterString("Hello");
  console.log(stringValue); // 'Hello'

  const numberValue = filterString(123); // Error: Not a string
}
