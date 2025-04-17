{
  // string
  let name: string = "김덕배";
  let greeting: string = `hello ${name}`;

  // number
  let age: number = 10; //10진수
  let hex: number = 0xff; //16진수
  let binary: number = 0b1010; //2진수
  let float: number = 3.14; //실수

  // boolean
  let bol1: boolean = true;
  let bol2: boolean = false;

  //null
  let n11: null = null;

  //undefined
  let notdefined: undefined = undefined;

  //any - 아무거나 허용
  //타입을 검사하지 않는다, 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야한다.
  let anything: any = 10;
  anything = "string";
  anything = null;
  anything = true;
  anything = 100n;
  anything = undefined;

  //unknown
  //타입 검사를 하지 않는다, 단 그 값을 사용하려고 할 때는 타입을 검증 해야한다.
  let unk: unknown = "100";
  unk = true;
  unk = null;
  unk = 1000n;
  unk = 3.14;

  //unknown과 any는 타입이 지정 되있지 않기 때문에 각 타입별 내장 메소드를 사용 하려할 때 에러가 난다.

  //ex) anything.split(); err
  //ex) unk.toFixed(); err

  //그렇기 때문에 아래와 같이 타입 검증이 필요하다
  if (typeof unk === "number") console.log(unk.toFixed(1));

  //배열, 타입[]
  let arr: [] = [];

  let numArr: number[] = [10, 20];
  let numArr2: Array<number> = [10, 20];

  let strArr: string[] = ["A", "B", "C"];
  let strArr2: Array<string> = ["A", "B", "C"];

  let boolArr: boolean[] = [true, false];
  let boolArr2: Array<boolean> = [true, false];

  let undefinedArr: undefined[] = [undefined, undefined];
  let undefinedArr2: Array<undefined> = [undefined, undefined];

  let nullArr: null[] = [null, null];
  let nullArr2: Array<null> = [null, null];

  let objArr: {}[] = [{}, {}];

  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let matrix2: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let cube: number[][][] = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ];

  // 튜플(tuple)
  // 특정 형태를 갖는 배열을 의미
  let mixArr: [number, string] = [10, "A"];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, "hello", { key: "value" }],
    [2, "world", { key: "example" }],
  ];

  //bigint
  //숫자 뒤에 n을 붙이면 bigint가 된다.
  //ex) 1 과 1n은 같은 크기의 숫자이다. 하지만 1은 숫자형이고 1n은 bigint 자료형이다.
  //bigint는 bigint끼리만 연산 할 수 있다.
  {
    // 객체
    // Record<string, never> -> 객체의 키 값은 문자열, 값은 절대 올 수 없다
    let obj: Record<string, never> = {}; // null과 undefined를 제외한 모든 값을 허용하겠다는 됨

    let user: {
      name: string;
      age: number;
    } = {
      name: "sucoding",
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
      name: "John",
      likesFood: ["apple", "banana"],
      address: {
        street: "Gang-nam",
        city: "seoul",
      },
      isLoggedIn: false,
    };

    let peopleArr: { id: number; name: string }[] = [
      { id: 1, name: "sucoding" },
      { id: 1, name: "sucoding" },
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
}

//readonly 읽기 전용

// TypeScript의 타입 시스템은 인터페이스 속성을 readonly (읽기 전용)으로 지정할 수 있게 해줍니다. 이를 통해 함수형 방식이 가능해진다
// 처음 선언한 이후 변경이 불가능
// 타입 상에서만 막는 것이므로, 런타임이 아닌 컴파일 타임에 오류를 발생 시킴
// 클래스에서도 readonly를 붙이면 생성자에서만 초기화 가능하고 이후에는 변경할 수 없음
// 객체 지향 설계에서 불변성을 유지하는 프로퍼티를 표현할 때 매우 유용
{
  // 배열에 readonly를 사용하는 방법
  // 함수에서 인자를 받을 때, 절대 수정하면 안 되는 배열이 있다면 ReadonlyArray로 지정
  const numbers: ReadonlyArray<number> = [1, 2, 3];
}

//Optional Properties

// Optional Properties는 객체의 속성 중 있을 수도 있고, 없을 수도 있는 속성을 말함
// ?를 이용해 정의
{
  const exObj: {
    name: string;
    age?: number; // age라는 속성이 있을 수 도 없을 수 도 있으며 추후에 추가 가능
  } = {
    name: "이준호",
  };

  exObj.age = 28;
}

//타입 추론
//TypeScript은 명시적인 타입 없이도 변수나 함수의 타입을 자동으로 추론
