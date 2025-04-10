{
    // 1.
    let num: number = 10;
    let str: string = 'A';
    let bool: boolean = true;

    const sum = (a: number, b: number): number => a + b;
    sum(10, 20);
}

{
    // 2. 타입 별칭
    // 2.1 가독성이 좋아지고,
    // 2.2 유보성이 증가함. -> 타입을 재사용할 수 있기 때문에
    let userId: string | number | null = 'hulk';
    let productId: string | number | null = 1;

    // 아래가 가독성이 좋다
    type ID = string | number | null;
    let userId2: ID = 'hulk';
    let productId2: ID = 1;

    type Status = 'error' | 'sucess';
    const status: Status = 'sucess';
}

{
    type User = {
        name: string;
        readonly age?: number; // 속성에다가 붙여야됨
    };

    const user1: Readonly<User> = {
        name: 'ty',
        age: 20,
    };

    const user2: User = {
        name: 'ty',
        age: 20,
    };

    const user3: User = {
        name: 'ty',
        age: 20,
    };
}

{
    // 3. 함수
    type SumFunc = (n1: number, n2: number) => number;
    const sum: SumFunc = function sum(n1, n2) {
        return n1 + n2;
    };

    // function sum(n1: number, n2: number): number {
    //     return n1 + n2;
    // }
}

{
    // 4. 튜플
    type Point = [number, number];
    const point: Point = [10, 15];
}

{
    // 5. 인터셋션
    type Nameable = {
        name: string;
    };

    type Ageable = {
        age: number;
    };

    type Person = Nameable & Ageable;
    type PersonOther = {
        name: string;
    } & {
        age: number;
    };
}

{
    // 6. 키 선택 타입 별칭
    type Person = {
        name: string;
        age: number;
        gender: string;
    };

    // 키 추출 keyof
    type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
    const key: PersonOfKeys = 'gender';
}

{
    // 7. 객체 선택 타입 별칭
    const user = {
        name: 'ty',
        age: 26,
    };

    // 타입 추출 typeof
    type User = typeof user; // 타입 스크립트는 컴파일을하여 위치상관이없다

    const user2: User = {
        name: 'a',
        age: 30,
    };
}

{
    // 7.
    type Category = {
        name: string;
        subCategory: (
            | {
                  name: string;
                  subCategory?: undefined;
              }
            | {
                  name: string;
                  subCategory: {
                      name: string;
                  }[];
              }
        )[];
    };

    type Category2 = {
        name: string;
        subCategory: { name: string; subCategory?: { name: string }[] }[];
    };

    // 재귀 타입 별칭
    type Category3 = {
        name: string;
        subCategory: Category3[];
    };

    const category: Category = {
        name: 'Electronics',
        subCategory: [
            {
                name: 'Phones',
            },
            {
                name: 'Laptops',
                subCategory: [
                    {
                        name: 'Gaming Laptops',
                    },
                ],
            },
        ],
    };
}

{
    //
    type Tree = {
        value: string;
        children: {
            value: string;
            children: {
                value: string;
            }[];
        }[];
    };

    // type Tree2 = {
    //     value: string;
    //     children: [{ value: string; children: [] }];
    // };

    type Tree2 = {
        value: string;
        children?: Tree2[];
    };

    const tree: Tree = {
        value: 'root',
        children: [
            {
                value: 'child1',
                children: [
                    {
                        value: 'child2',
                    },
                ],
            },
        ],
    };
}
