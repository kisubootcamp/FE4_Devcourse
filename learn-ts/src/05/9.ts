{
  // 조건부
  // T extends U ? X : Y

  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // "YES";
  type B = IsString<number>; // "No";

  const a: A = "Yes";
  const b: B = "No";
}

{
  // 조건부 + infer
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type A = ElementType<10>;
  type B = ElementType<[1, 2, 3]>;
  type C = ElementType<["a", "a"]>;
}

{
  //
  type ReturnedType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;
  type Age = ReturnedType<typeof getAge>;
  function getAge() {
    return {
      name: "hi",
    };
  }
}

{
  type PostList = {
    title: string;
    content: string;
    author: {
      id: number;
      name: string;
      age: number;
    };
  }[];

  const post: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
      id: 1,
      name: "이정환",
      age: 27,
    },
  };

  console.log(post);
}
