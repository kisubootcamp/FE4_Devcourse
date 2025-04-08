{
  // 복잡한 객체의 타입을 지정할 때 간단하게 하는 방법
  // 1. 변수에 할당되어있는 객체를 그대로 복사해서, 콜론(:)을 넣고 타입 지정하는 자리에 붙여넣기
  // 2. 값들을 각각의 타입으로 변경하기
  const user: {
    name: string;
    age: number;
  } = {
    name: "yubin",
    age: 26,
  };

  let userObj: {
    id: number;
    name: string;
    address: {
      zipCode: number;
      street: string;
    };
  } = {
    id: 1,
    name: "yubin",
    address: {
      zipCode: 13111,
      street: "Gang-nam",
    },
  };

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

  // object 타입으로 퉁쳐도 되지만, 권장하지 않음.
  // -> 타입이 불분명해짐.
  // -> 자동완성이 되지 않음.
  let jsonObject2: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: object;
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

  //jsonObject.address.street // address의 타입 지정을 다 해줬기 때문에 끝까지 자동완성을 해줌.
  //jsonObject2.address. // address의 타입 지정을 object로 퉁쳤기 때문에 address 다음부터는 자동완성을 안 해줌.
}
