{
  // 1. 인터페이스 상속과 메소드 오버라이딩
  interface Animal {
    name: string;
    speak(): string;
  }

  interface Dog extends Animal {
    speak(): 'Woof!';
  }

  interface Cat extends Animal {
    speak(): 'Meow!';
  }

  const dogInfo: Dog = {
    name: 'dog',
    speak() {
      return 'Woof!';
    },
  };

  const catInfo: Cat = {
    name: 'cat',
    speak() {
      return 'Meow!';
    },
  };

  console.log(dogInfo.speak()); // Woof!
  console.log(catInfo.speak()); // Meow!
}

{
  // 2. 중첩된 인터페이스와 선택적 속성
  interface Company {
    name: string;
    location: string;

    Employee: {
      name: string;
      age: number;
      position?: string;
    };
  }

  const info: Company = {
    name: '아무 회사',
    location: 'seoul',
    Employee: {
      name: '아무 이름',
      age: 25,
      position: '신입',
    },
  };
  console.log(info.Employee); // { name: '아무 이름', age: 25, position: '신입' }
}

{
  // 3. 인터페이스에서 메소드 시그니처와 인덱스 시그니처 함께 사용하기
  interface Logger {
    [history: string]: any;
    log(message: string): void;
  }

  const log: Logger = {
    history: [],
    log(message: string) {
      console.log(message); // App started, User logged in
      this.history.push(message);
    },
  };

  log.log('App started');
  log.log('User logged in');
  console.log(log.history); // [ 'App started', 'User logged in' ]
}

{
  // 4. 조건부 로직을 포함한 인터페이스
  type Responses =
    | { status: 'success'; data: string }
    | { status: 'error'; error: string };

  const handleResponse = (res: Responses): string => {
    if (res.status === 'success') {
      return `Success: ${res.data}`;
    } else {
      return `Error: ${res.error}`;
    }
  };

  const resSuccess: Responses = {
    status: 'success',
    data: 'Success!!',
  };

  const resError: Responses = {
    status: 'error',
    error: 'Error!!',
  };

  console.log(handleResponse(resSuccess)); // Success: Success!!
  console.log(handleResponse(resError)); // Error: Error!!
}

{
  // 5. 중첩된 인터페이스와 제네릭을 혼합하기 (제네릭 사용하지 않음)
  interface Book {
    title: string;
    author: string;
    publishedYear: number;

    Author: {
      name: string;
      birthYear: number;
    };
  }

  const bookInfo: Book = {
    title: '소년이 온다',
    author: '한강',
    publishedYear: 2014,

    Author: {
      name: '한강',
      birthYear: 1970,
    },
  };

  console.log(bookInfo.Author); // { name: '한강', birthYear: 1970 }
}

{
  // 6. 다형성을 활용한 인터페이스 정의
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
    name: 'Alice',
    age: 35,
    team: ['Bob', 'Charlie', 'David'],
  };

  const developer: Developer = {
    name: 'John',
    age: 28,
    language: 'Javascript',
  };
}

{
  // 7. 인덱스 시그니처와 배열을 포함한 복합 인터페이스
  interface Database {
    [key: string]: string[];
  }

  const db: Database = {
    users: ['Alice', 'Bob', 'Charlie'],
    orders: ['order1', 'order2'],
  };

  console.log(db.users); // [ 'Alice', 'Bob', 'Charlie' ]
  console.log(db.orders); // [ 'order1', 'order2' ]
}

{
  // 8. 조건부 타입에 따른 인터페이스 필드 추가
  interface User {
    name: string;
    isAdmin: boolean;
    adminCode?: string;
  }

  function createUser(name: string, isAdmin: boolean): User {
    if (isAdmin) {
      return {
        name,
        isAdmin: true,
        adminCode: '123',
      };
    } else {
      return {
        name,
        isAdmin: false,
      };
    }
  }

  const admin = createUser('Alice', true);
  const user = createUser('Bob', false);

  console.log(admin); // { name: "Alice", isAdmin: true, adminCode: "admin123" }
  console.log(user); // { name: "Bob", isAdmin: false }
}

{
  // 9. 인터페이스 상속을 이용한 다형성 적용
  interface Shape {
    area(): number;
  }

  interface Circle extends Shape {
    radius: number;
  }

  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const circle: Circle = {
    radius: 3,
    area() {
      return this.radius * this.radius * 3.14;
    },
  };

  const rectangle: Rectangle = {
    width: 10,
    height: 4,
    area() {
      return this.width * this.height;
    },
  };

  console.log(circle.area()); // 28.26
  console.log(rectangle.area()); // 40
}

{
  // 10. 다중 인터페이스 상속
  interface Vehicle {
    brand: string;
    model: string;
  }

  interface Eletric {
    batteryLife: number;
  }

  interface ElectricCar extends Vehicle, Eletric {
    brand: 'brand';
    model: 'model';
    charge(): string;
  }

  const tesla: ElectricCar = {
    brand: 'brand',
    model: 'model',
    batteryLife: 90,
    charge() {
      return 'Charging the car...';
    },
  };

  console.log(tesla.charge()); // Charging the car...
}
