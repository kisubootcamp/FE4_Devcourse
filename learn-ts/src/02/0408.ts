// 코드 블럭 {}
// 전역 스코프 오염시키지 않으려고 함
// 파일 이름이 달라도 같은 변수명이면 에러로 인식
// -> 작은 컨테이너 에서만 유효하게

// any - 아무거나 허용하겠다.
// -> 타입을 검사하지 않겠다.
// -> 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야 함.
// -> 전부 개발자 탓..

// unknown(any 순한맛)
// -> 타입 검사하지 않겠다.
// -> 단, 그 값을 사용하려고 할 때는 타입을 검증해야 함.

//타입 지정
{
  let dataset: [
    [{ id: number; value: string }, { id: number; value: string }],
    [{ id: number; value: string }, { id: number; value: string }],
    [{ id: number; value: string }, { id: number; value: string }]
  ] = [
    [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
    ],
    [
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ],
    [
      { id: 5, value: "e" },
      { id: 6, value: "f" },
    ],
  ];

  let dataset2: [
    { id: number; value: string }[],
    { id: number; value: string }[],
    { id: number; value: string }[]
  ] = [
    [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
    ],
    [
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ],
    [
      { id: 5, value: "e" },
      { id: 6, value: "f" },
    ],
  ];

  let dataset3: { id: number; value: string }[][] = [
    [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
    ],
    [
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ],
    [
      { id: 5, value: "e" },
      { id: 6, value: "f" },
    ],
  ];
}

{
  let obj: {
    readonly name: string; // readonly 변경 불가능
    age: number;
    gender?: string; // '?:' optional 속성 : 변수에 할당될 값이 있어도 없어도 가능
  } = {
    name: "sucoding",
    age: 20,
  };

  //obj.name = "jane"; //readonly 있으면 변경 x
  obj.gender = "Female"; //name과 age만 올 수 있음
}

// + 타입을 동적으로 추가할 수 없음.
// + js는 동적 , ts 정적을 지향
