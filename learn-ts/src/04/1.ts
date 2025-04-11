{
  // 타입별칭 쓰면
  // 1. 가독성이 좋아지고
  // 2. 유지보수성 증가 -> 타입을 재사용할 수 있기 때문
  // 리터럴, 함수, 튜플에도 가능
  // 인터섹션과 조합도 가능
  // 키 선택 타입 별칭
  // 객체 선택 타입 별칭
  // 자스랑 다르게 런타임이 아니라 컴파일되서 타입 별칭 선언 순서 상관 X
  //
  type Category = {
    name: string;
    subCategory: { name: string; subCategory?: { name: string }[] }[];
  };

  // 재귀 타입 별칭 - 이해 X
  type Category2 = {
    name: string;
    subCategory?: Category2[];
  };

  // type Category2 = {
  //   name: string;
  //   subCategory?: { name: string; subCategory? }[];
  // };

  const category: Category = {
    name: "Electronics",
    subCategory: [
      {
        name: "Phones",
      },
      {
        name: "Laptops",
        subCategory: [
          {
            name: "Gaming Laptops",
          },
        ],
      },
    ],
  };
}
