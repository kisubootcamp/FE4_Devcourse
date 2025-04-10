{
  //1.인터페이스  NOTE
  // 1.1 객체타입 지정할 때 사용 (나만의 *객체* 타입), 객체만 / 타입별칭 - 나만의 타입
  // -> 타입별칭으로 지정할 수 있는건 객체라면 인터페이스로도 정의할 수 있다.
  // 인터페이스는 마우스 오버 했을 때 타입 구조가 보이지 않음(타입별칭은 보임)
  // 타입별칭은 똑같은 타입을 2개 지정할 수 없음, 식별자가 중복될 수 없음
  // 인터페이스는 중복되도 괜찮다 \왜?\ 같은 이름의 인터페이스를 자동으로 하나로 합쳐줌 -> 선언병합
  // CHECK-> 그러면 추가만 되나? , 같은 속성이름에서 내용을 변경하는 건 안됨
  // CHECK-> 마우스 오버했을 때 구조가 뜨지 않는데 복잡한 구조에서는 추가된 부분을 어떻게 식별하지? 못함, 하려면 cmd를 누르고 클릭
  // 상속

  //NOTE
  // 단순한 객체의 구조를 정의할 때는 인터페이스 (실무에서는 일반적인 흐름)
  // 유니언, 튜플, 기본타입, 함수 -> 타입별칭
  // API 응답값 -> 타입 별칭

  type User = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
  }
  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: "sss",
    age: 22,
  };
}

{
  interface User {
    name: string;
    age: number;
    // greet: () => void;
    greet(): void;
  }
  const user: User = {
    name: "sucoding",
    age: 20,
    greet() {
      console.log(`${this.name}, ${this.age}`);
    },
  };
  user.greet();
}

{
  //인터페이스로 함수 타입 지정 ..
  type SumFunc = (n1: number, n2: number) => number;
  interface SumFuncInterface {
    (n1: number, n2: number): number;
  }
  const sum1: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const sum2: SumFunc = (n1, n2) => n1 + n2;
  const sum3: SumFuncInterface = (n1, n2) => n1 + n2;
}

{
  //인터페이스 - 상속 NOTE
  // 여러번 상속도 가능함
  interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    //NOTE 공통된 name 부분을 상속 extends 부모인터페이스
    bark(): void; // 왈왈
  }
  const dog: Dog = {
    name: "happy",
    bark() {
      console.log("왈왈");
    },
  };

  interface Cat extends Animal {
    bark(): void;
  }

  const cat: Cat = {
    name: "ginger",
    bark() {
      console.log("meoeuw");
    },
  };
}
{
  interface A {
    a: string;
  }
  interface B {
    b: number;
  }
  interface C extends A, B {
    c: boolean;
  }

  const cValue: C = {
    a: "a",
    b: 10,
    c: true,
  };
}

{
  type A = {
    a: string;
  };
  type B = {
    b: number;
  };
  type C = A &
    B & {
      c: boolean;
    };
  const cValue: C = {
    a: "a",
    b: 10,
    c: true,
  };
}
