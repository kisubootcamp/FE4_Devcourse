// 처음에 중괄호 써줄 것
{
  // any 라는 타입!
  // 타입을 검사하지 않고 아무거나 허용하겠다는뜻
  // ** 타입 검사를 무력화하기 때문에 남용을 피해야한다.
  let anything: any = 10;
  anything: 20;
  anything: 'a';
  anything: true;
  anything: undefined;

  // unknown (any보다 순한 버전. '안전한 any')
  // 타입 검사를 하지 않는다.
  // 단, 그 값을 사용하려고 할 때는 타입을 검증해야한다.
  let anything2: unknown = 'Hello';
  anything2: 10;
  anything2: true;
  anything2: undefined;
  anything2: 3.14;

  let matrix: number[][] = [
    //타입은 거꾸로 쓴다고 생각하면 될듯...!
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // 튜플 : 특정 형태를 갖는 배열을 말한다.
  // ** 고정된 형태의 배열값만 올 수 있다.
  // 그래서 실무에서 자주 사용하진 않음
  let mixArr: [number, string] = [10, 'A'];

  // 유니온 타입
  // let mixArr: (number | string)[] = [10,"A"], [10,"A",30] 이렇게 쓰면 다 상관없다.

  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, object][] = [
    [1, 'hello', { key: 'value' }],
    [2, 'hello', { key: 'value' }],
  ];

  // 객체

  // 빈 객체 지정하는 방법
  let obj: Record<string, never> = {};
  // 이렇게 하면 키 값은 문자열로 줄 수 있지만, 속성값에는 아무것도 올 수 없다.
  // 빈객체를 만들고 싶을땐 이렇게 쓰기

  // readonly 와 ? (optional 속성)
  let obj: {
    readonly name: string; // 이렇게 쓰면 아래 줄을 써도 변경이 불가능하다
    age: number;
    gender?: string; // ?: optional 속성  , 이 값이 있어도 되고 없어도 된다.
  } = {
    name: 'sucoding',
    age: 20,
  };

  obj.name = 'jane'; // 값 바꾸기 (readonly 있으면 값 변경 불가능)
}
