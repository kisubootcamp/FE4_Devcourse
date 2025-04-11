{
  //타입별칭 -> 나만의 타입
  //인터페이스 -> 나만의 객체 타입
  // 객체 타입을 지정할 때 사용한다. (나만의 객체 타입)

  // interface는 정의를 내리는 느낌
  // interface는 여러번 정의내려도 괜찮다.
  // 똑같은 식별자를 자동으로 하나로 합쳐주기 때문이다.
  interface User {
    name: string;
    age: number;
  }
  interface User {
    gender: string;
  }
  // User 안에는 name,age,gender 가 자동으로 들어가게 된다.
  // 하지만, 합칠때 한쪽엔 name:string, 한쪽엔 name:number 이면 오류가 생긴다.

  // 인터페이스는 마우스를 올리면 상세 스펙이 보이지 않는다
  const user1: User = {
    name: 'alice',
    age: 20,
    gender: 'male',
  };
}

{
  interface User {
    name: string;
    age: number;
    greet: () => void;
    //또는
    //greet(): void;
  }
  const user = {
    name: 'sucoding',
    age: 20,
    greet() {
      console.log(`${this.name},${this.age}`);
    },
  };
}

{
  type SumFunc = (n1: number, n2: number) => number;

  // 인터페이스로 함수를 정의할때

  interface SumFunInterface {
    (n1: number, n2: number): number;
  }
  const sum: SumFunInterface = (n1, n2) => n1 + n2;
}

{
  //상속
  interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    // extends : 상속
    name: string;
    bark(): void;
  }

  const dog: Dog = {
    name: '퍼피',
    bark() {
      console.log('왈왈');
    },
  };

  interface Cat extends Animal {
    name: string;
    bark(): void;
  }
  const cat: Cat = {
    name: '냥이',
    bark() {
      console.log('냐옹');
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
    a: 'a',
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
}
