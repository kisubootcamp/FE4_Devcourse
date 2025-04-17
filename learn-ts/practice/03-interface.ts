{
  // 1. 간단한 객체 타입 정의
  interface Person {
    name: string;
    age: number;
  }

  const personInfo: Person = {
    name: 'sy',
    age: 25,
  };

  console.log(personInfo); // { name: 'sy', age: 25 }
}

{
  // 2. 메소드가 포함된 인터페이스
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  const carInfo: Car = {
    brand: 'Mercedes-Benz',
    model: 'GLE Coupe',
    start() {
      console.log(`${this.brand}, ${this.model}`); // Mercedes-Benz, GLE Coupe
    },
  };

  carInfo.start();
}

{
  // 3. 선택적 속성 사용
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const employeeInfo: Employee = {
    name: 'na',
    position: 'po',
  };

  const employeeInfo2: Employee = {
    name: 'na',
    position: 'po',
    department: 'de',
  };

  console.log(employeeInfo); // { name: 'na', position: 'po' }
  console.log(employeeInfo2); // { name: 'na', position: 'po', department: 'de' }
}

{
  // 4.
  interface Team {
    name: string;
    members: string[];
  }

  const teamInfo: Team = {
    name: 'sy',
    members: ['홍홍홍', '길길길', '동동동'],
  };

  console.log(teamInfo); // { name: 'sy', members: [ '홍홍홍', '길길길', '동동동' ] }
}

{
  // 5. 상속을 이용한 인터페이스 확장
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    bread: string;
  }

  const dogInfo: Dog = {
    name: 'dog',
    age: 5,
    bread: 'bread',
  };

  console.log(dogInfo); // { name: 'dog', age: 5, bread: 'bread' }
}

{
  // 6. 인터페이스에서 메소드 정의
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }

  const personInfo: Person = {
    name: 'sy',
    age: 25,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };

  console.log(personInfo.greet()); // Hello, my name is sy
}

{
  // 7. 다형성을 가진 인터페이스
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

  const circleInfo: Circle = {
    radius: 3,
    area() {
      console.log(this.radius * this.radius * Math.PI);
    },
  };

  const rectangleInfo: Rectangle = {
    width: 5,
    height: 5,
    area() {
      console.log(this.width * this.height);
    },
  };

  circleInfo.area(); // 28.274333882308138
  rectangleInfo.area(); // 25
}

{
  // 8. 다중 인터페이스를 사용하는 객체
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  const pa: Person & Address = {
    name: 'sy',
    age: 25,
    street: 'seoul',
    city: 'seoul',
    zipcode: 123,
  };

  console.log(pa); // { name: 'sy', age: 25, street: 'seoul', city: 'seoul', zipcode: 123 }
}

{
  // 9. 인터페이스에 인덱스 시그니처 사용
  interface Dictionary {
    [key: string]: string;
  }

  const dictionaryInfo: Dictionary = {
    Alice: 'student1',
    Kevin: 'student2',
    Anna: 'student3',
  };

  console.log(dictionaryInfo); // { Alice: 'student1', Kevin: 'student2', Anna: 'student3' }
}

{
  // 10. 인터페이스를 사용한 함수 타입 정의
  interface Operation {
    (a: number, b: number): number;
  }

  const add: Operation = (a, b) => {
    return a + b;
  };

  const subtract: Operation = (a, b) => {
    return a - b;
  };

  console.log(add(10, 5)); // 15
  console.log(subtract(10, 5)); // 5
}
