{
  // 객체
  // 빈 객체는 이렇게 지정해야한다.
  let obj: Record<string, never> = {}; //-> 객체의 키 값은 문자열인데, 객체의 속성값에는 아무것도 올 수 없다.
  obj = {};
  obj = null;
  obj = undefined;
  obj = 10;
  obj = [];
  obj = function () {};

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
    isLoggedIn: bollean;
  } = {
    name: 'John',
    likesFood: ['apple', 'banana'],
    address: {
      street: 'Gang-nam',
      city: 'seoul',
    },
    isLoggedIn: false,
  };
}
