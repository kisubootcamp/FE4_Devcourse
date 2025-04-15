{
  //1
  interface Person {
    name: string;
    age: number;
  }
}

{
  //2
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
}

{
  //3
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
}

{
  //4
  interface Team {
    name: string;
    members: string[];
  }
}

{
  //5
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed: string;
  }
  const myDog: Dog = {
    name: "뿌뿌",
    age: 3,
    breed: "푸들",
  };

  console.log(myDog);
}

{
  //6
  interface Person {
    name: string;
    age: number;
    greet(): void;
  }

  const hello: Person = {
    name: "홍길동",
    age: 12,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  hello.greet();
}

{
  //7
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

  const circle: Circle = {
    radius: 5,
    area() {
      return this.radius ** this.radius * 3.14;
    },
  };
  console.log(circle.area());

  const rectangle: Rectangle = {
    width: 3,
    height: 4,
    area() {
      return this.width * this.height;
    },
  };
  console.log(rectangle.area());
}

{
  //8
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  interface Contact extends Person, Address {
    phone: number;
  }

  const myContact: Contact = {
    name: "홍길동",
    age: 28,
    street: "서울특별시 마포구 월드컵북로",
    city: "서울",
    zipcode: 4001,
    phone: 8201012345678,
  };

  console.log(myContact);
}

{
  //9
  interface Dictionary {
    [key: string]: string;
  }
}

{
  //10
  interface Operation {
    (a: number, b: number): number;
  }

  function operation(a: number, b: number): void {
    console.log(add(a, b));
    console.log(subtract(a, b));
  }

  const add: Operation = (a, b) => {
    return a + b;
  };
  const subtract: Operation = (a, b) => {
    return a - b;
  };

  operation(34, 22);
}
