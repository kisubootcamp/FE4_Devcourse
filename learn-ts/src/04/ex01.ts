{
  // 인터페이스 연습문제
  // 1
  interface Person {
    name: string;
    age: number;
  }
  const person: Person = {
    name: "yubin",
    age: 26,
  };

  // 2
  interface Car {
    brand: string;
    model: string;
    start: () => void;
  }
  const car: Car = {
    brand: "브랜드명",
    model: "모델명",
    start() {
      console.log("부릉~!");
    },
  };

  // 3
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
}
