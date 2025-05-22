{
  // 1.
  type Action = {
    type: string;
    payload?: string | number | object | null;
  };

  function createAction(
    type: string,
    payload?: string | number | object | null
  ): Action {
    return { type, payload };
  }

  const action1 = createAction('ADD_ITEM', { id: 1, name: 'item' });
  const action2 = createAction('UPDATE_ITEM', 42);
  const action3 = createAction('SET_STATUS', 'success');

  console.log(action1); // { type: 'ADD_ITEM', payload: { id: 1, name: 'item' } }
  console.log(action2); // { type: 'UPDATE_ITEM', payload: 42 }
  console.log(action3); // { type: 'SET_STATUS', payload: 'success' }
}

{
  // 2.
  type NumberOrString = {
    id: number | string;
    name: string;
  };

  function createObject(id: number | string, name: string): NumberOrString {
    return { id, name };
  }

  const object1 = createObject(1, 'Alice');
  const object2 = createObject('123', 'Bob');

  console.log(object1); // { id: 1, name: 'Alice' }
  console.log(object2); // { id: '123', name: 'Bob' }
}

{
  // 3.
  type Point = {
    x: number;
    y: number;
  };

  function calculateDistance(p1: Point, p2: Point): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

{
  // 4.
}

{
  // 5.
  type NullOrUndefined = null | undefined;

  function getValuee(value: unknown): value is NullOrUndefined {
    return value === null || value === undefined;
  }

  const check1 = getValuee(null);
  const check2 = getValuee(undefined);
  const check3 = getValuee('Hello');

  console.log(check1); // true
  console.log(check2); // true
  console.log(check3); // false
}

{
  // 6.
  type Coordinates = [number, number];
  function setCoordinates(x: number, y: number): Coordinates {
    return [x, y];
  }

  const coordinates = setCoordinates(10, 20);
  console.log(coordinates); // [10, 20]
}

{
  // 7.
  type Person = {
    readonly name: string;
    readonly age: number;
  };

  function createPerson(name: string, age: number): Person {
    return { name, age };
  }

  const person = createPerson('John', 30);
  // person.name = 'Jane';
  console.log(person); // { name: 'John', age: 30 }
}

{
  // 8.
  type User = {
    id?: string;
    name?: string;
    email?: string;
  };

  function updateUser(user: User, update: User): User {
    return {
      ...user,
      ...update,
    };
  }
  const user1 = { id: '1', name: 'Alice', email: 'alice@example.com' };
  const updatedUser1 = updateUser(user1, { name: 'Alicia' });

  console.log(updatedUser1); // { id: '1', name: 'Alicia', email: 'alice@example.com' }
}

{
  // 9.
  type Role = 'admin' | 'user';

  type User = {
    id: string;
    name: string;
    role: string;
  };

  function assignRole(user: User, update: Role): User {
    return { ...user, role: update };
  }

  const user1 = { id: '1', name: 'Alice', role: 'user' };
  const updatedUser = assignRole(user1, 'admin');
  console.log(updatedUser); // { id: '1', name: 'Alice', role: 'admin' }
}

{
  // 10.
  type Primitive = string | number;

  function filterString(str: Primitive): string {
    if (typeof str === 'string') {
      return str;
    }
    throw new Error('Not a string');
  }

  const stringValue = filterString('Hello');
  console.log(stringValue); // Hello

  const numberValue = filterString(123); // Error: Not a string
}
