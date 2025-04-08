{
  // 객체
  let obj: object = {}; // 완벽하게 빈 객체를 지정해주는 타입은 아님 !

  // 래퍼 객체
  // 원시 타입 (primitive type)
  // obj = null;
  // obj = undefined;
  // obj = 10;
  // obj = "A";

  // 결국 모든 건 자바스크립트의 최상위 오브젝트에서 파생된 것이기 때문.
  obj = [];
  obj = function () {};

  // null과 undefined를 제외한 모든 값을 허용하겠다는 의미가 되어버림.
  // -> 빈 객체는 우리의 의도대로 타입을 지어주기 어려움.
  let obj2: {} = {}; // 완벽하게 빈 객체를 지정해주는 타입은 아님 !

  // obj2 = null;
  // obj2 = undefined;
  obj2 = 10;
  obj2 = "A";

  obj2 = [];
  obj2 = function () {};

  // Record<string, never>
  // -> 객체의 키 값은 문자열, 값은 절대 올 수 없다는 의미
  // -> 즉 이게 곧 빈 객체를 의미함 !!
  let obj3: Record<string, never> = {}; // 이게 진정한 빈 객체 타입 !
  obj3 = {}; // 빈 객체만 오류가 나지 않음.

  // obj3 = null;
  // obj3 = undefined;
  // obj3 = 10;
  // obj3 = "A";

  // obj3 = [];
  // obj3 = function () {};

  // 모든 객체를 그냥 object라고 정의해도 되지만, 타입스크립트에서 권장하는 방식이 아님.
  let user: object = {
    name: "yubin",
    age: 26,
  };
  //user.gender = "female"; // 그냥 object라고 지정하면 오류가 남

  // 이게 권장하는 방식. 마치 튜플처럼 정확하게 타입을 나타내주는 것.
  // 객체에 대한 타입을 지정할 때 콤마(,)로 끝나도 문제 없고, 세미콜론(;)으로 끝나도 문제 없음.
  // BUT, 원칙적으로 허용되는 방식은 세미콜론(;)이므로 이 방식으로 하는 게 좋음.
  let user2: {
    name: string;
    age: number;
  } = {
    name: "yubin",
    age: 26,
  };

  // 한 줄로 타입을 지정해도 되지만, 가독성이 떨어지기 때문에 객체의 모양과 똑같이 여러 줄로 지정하는 게 좋음.
  let person: {
    name: string;
    likesFood: string[];
    address: {
      street: string;
      city: string;
    };
    isLoggedIn: boolean;
  } = {
    name: "John",
    likesFood: ["apple", "banana"],
    address: {
      street: "Gang-nam",
      city: "Seoul",
    },
    isLoggedIn: false,
  };

  let peopleArr: { id: number; name: string }[] = [
    { id: 1, name: "yubin" },
    { id: 2, name: "yuri" },
  ];

  let foodArr: { id: number; foods: string[] }[] = [
    { id: 1, foods: ["apple"] },
    { id: 2, foods: ["banana"] },
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
  }[] = [
    {
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
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Yost and Sons",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];
}
