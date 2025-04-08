{
  // 객체

  let obj: Record<string, never> = {}; // null과 undefined 제외한 모든 값 허용

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
