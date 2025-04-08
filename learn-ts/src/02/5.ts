{
  // 1. readonly 프로퍼티
  let obj: {
    readonly name: string;
    age: number;
    gender?: string; // 옵셔널 속성
  } = {
    name: "eunji",
    age: 24,
  };

  // 2. 옵셔널 프로퍼티
  obj.gender = "female";
}
