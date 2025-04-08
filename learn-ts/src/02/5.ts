{
  // 1.
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
