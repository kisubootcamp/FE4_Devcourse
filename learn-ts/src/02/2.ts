{
  // 객체

  let obj: Record<string, never> = {};
  // 객체의 키 값은 문자열, 이 외의 값은 절대 올 수 없다.
  // 빈 객체만 허용 -> 빈 객체 만들기

  // const obj: {} = {}
  // null과 undefined 제외한 모든 값 허용

  // const obj: object = {}
  // 원시 타입 제외한 객체만 허용

  let user: {
    name: string;
    age: number;
  } = {
    name: 'sucoding',
    age: 20,
  };

  let person: {
    name: string;
    likesFood: string[];
    address: {
      street: string;
      city: string;
    };
    isLoggedIn: boolean;
  } = {
    name: 'Bob',
    likesFood: ['apple', 'banana'],
    address: {
      street: 'Gang-nam',
      city: 'seoul',
    },
    isLoggedIn: false,
  };
}
