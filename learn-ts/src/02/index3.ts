{
  const user: {
    name: string;
    age: number;
  } = {
    name: "sucoding",
    age: 20,
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
    name: "sucoding",
    address: {
      zipCode: 13111,
      street: "Gang-Nam",
    },
  };

  let jsonObject: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
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
}
