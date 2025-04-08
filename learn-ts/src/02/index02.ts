{
  // // 객체
  // // Record<string, never> -> 객체의 키 값은 문자열. 이 외의 값은 절대 올 수 없다.
  // let obj: object = {};
  // let obj1: {} = {}; // null과 undefined를 제외한 모든 값을 허용하겠다는 뜻이 됨
  // // 위 방법들로는 객체의 타입을 완벽히 지정할 수 없다.
  // let obj2: Record<string, never> = {}; // 유틸리티 함수

  // //레퍼 객체
  // // 원시 타입(primitive type)
  // obj = null;
  // obj = undefined;
  // obj = 10;
  // obj = "A";

  // obj = [];
  // obj = function () {};
  // // 자바스크립트의 모든 값은 객체에서 비롯되었다.
  let obj: Record<string, never> = {};

  let user: {
    // 타입 지정은 코마, 세미콜론 둘 다 사용해서 끝맺을 수 있다. 권장되는 방식은 세미콜론이다.
    name: string;
    age: number;
  } = {
    name: "yoon",
    age: 29,
  };
  // 타입스크립트에서 권장하지 않는 모양.
  // 객체의 모양과 똑같이 지정하는 것을 권장

  let person: {
    name: string;
    likesFood: string[];
    address: {
      street: string;
      city: string;
    };
    isLoggedIn: boolean; // 가독성을 위해 줄바꿈
  } = {
    name: "John",
    likesFood: ["apple", "banana"],
    address: {
      street: "Gang-Nam",
      city: "Seoul",
    },
    isLoggedIn: false,
  };

  let peopleArr: { id: number; name: string }[] = [
    { id: 1, name: "yoon" },
    { id: 2, name: "ji" },
  ];
  let foodArr: { id: number; foods: string[] }[] = [
    { id: 1, foods: ["apple"] },
    { id: 1, foods: ["banana"] },
  ];

  let jsonObject: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  } = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  // 오브젝트는 obj: object 지정할 수 있지만 권장하지 않음.
  // 오브젝트 안의 객체까지 타입을 지정하면 코드를 짤 때 내부의 속성에 대한 자동완성에서도 차이가 있다.
}
