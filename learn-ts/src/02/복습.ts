{
  let documents: {
    id: number;
    title: string;
    documents: {}[];
    createdAt: string;
    updatedAt: string;
  }[] = [
    {
      id: 153370,
      title: "프로그래밍",
      documents: [],
      createdAt: "2025-04-05T13:08:51.197Z",
      updatedAt: "2025-04-05T13:09:04.485Z",
    },
    {
      id: 153371,
      title: "프로그래머스 데브코스 짱",
      documents: [],
      createdAt: "2025-04-05T13:09:11.261Z",
      updatedAt: "2025-04-05T13:09:18.249Z",
    },
    {
      id: 153374,
      title: "수코딩",
      documents: [
        {
          id: 153375,
          title: "좋아요",
          documents: [
            {
              id: 153376,
              title: "구독",
              documents: [],
              createdAt: "2025-04-05T13:09:58.870Z",
              updatedAt: "2025-04-05T13:10:03.288Z",
            },
          ],
          createdAt: "2025-04-05T13:09:51.276Z",
          updatedAt: "2025-04-05T13:09:55.811Z",
        },
      ],
      createdAt: "2025-04-05T13:09:29.217Z",
      updatedAt: "2025-04-05T13:09:50.053Z",
    },
    {
      id: 153378,
      title: "공주의 규칙",
      documents: [
        {
          id: 153379,
          title: "무조건 들으셔야 합니다",
          documents: [],
          createdAt: "2025-04-05T13:10:38.569Z",
          updatedAt: "2025-04-05T13:10:45.266Z",
        },
      ],
      createdAt: "2025-04-05T13:10:27.375Z",
      updatedAt: "2025-04-05T13:10:37.052Z",
    },
    {
      id: 153381,
      title: "좋아요",
      documents: [],
      createdAt: "2025-04-05T13:10:51.388Z",
      updatedAt: "2025-04-05T13:10:57.978Z",
    },
    {
      id: 153385,
      title: "다들",
      documents: [
        {
          id: 153399,
          title: "정수님도",
          documents: [
            {
              id: 153400,
              title: "고생하셨서용",
              documents: [],
              createdAt: "2025-04-05T14:50:35.152Z",
              updatedAt: "2025-04-05T14:50:42.971Z",
            },
          ],
          createdAt: "2025-04-05T14:50:03.046Z",
          updatedAt: "2025-04-05T14:50:15.563Z",
        },
      ],
      createdAt: "2025-04-05T13:11:12.785Z",
      updatedAt: "2025-04-05T13:11:18.645Z",
    },
  ];
  //유니온 타입
  let arr: (
    | number[]
    | string
    | { readonly name: string; age: number; gender?: string }
    | string[]
  )[] = [
    [1, 2, 3],
    "hi",
    { name: "sucoding", age: 20, gender: "male" },
    "bye",
    ["a", "b", "c"],
    [10, 11, 12],
    { name: "peter", age: 8 },
  ];
  console.log(arr);

  //   let num1: any = 1;
  let num2: unknown;

  num2 = 1;
  //   console.log(num1.toUpperCase());
  if (typeof num2 === "number") {
    console.log(num2 * 2);
  }
}
