// 코드 블럭 (중괄호) : typescript는 지정해놓은 범위 안의 모든 ts 파일을 한 개의 파일로 보기 때문에,
// 똑같은 변수명을 사용한다면 오류가 발생할 수 있다. -> 때문에 블록 스코프를 만들어줘 충돌이 일어나지 않도록 한다.

/* string */
{
    let name: string = "Alice";
    let greeting: string = `Hello, ${name}`;
    let single: string = 'Single Quote';
    let multiLine: string = `This is
    a multiline string`;
}

/* number */
{
    let age: number = 10; // 10진수
    let hex: number = 0xff; // 16진수
    let binary: number = 0b1010; // 2진수
    let float: number = 3.14; // 실수
}

/* bigint */
{
    let num: number = 99999999999999999999999;
    let big: bigint = 99999999999999999999999n;
    console.log(num, big);
}

/* boolean */
// falsy : false, 0, -0, "", null, undefined, NaN
// truthy : falsy를 제외한 모든 값
{
    let bool1: boolean = true;
    let bool2: boolean = false;
    let bool3: boolean = 1 > 2;
}

/* null */
{
    let nothing: null = null;
}

/* undefined */
{
    let notDefined: undefined;
    let notDefined1: undefined = undefined;
}

/* any */
// 타입 검사를 무력화하는 타입이기 때문에 남용을 피해야 한다.
{
    let anything: any = 10;
    anything = "A";
    anything = true;
}

/* unknown */
// any와 같이 타입 검사를 하지 않지만, 그 값을 사용하려고 할 때는 타입을 검증해야 한다.
{
    let input: unknown = 3.14;

    console.log(input);
    // console.log(input.toFixed(2)); : 'input'은(는) 'unknown' 형식입니다.
}

/* 배열 */
{
    let arr: [] = [];
    let numArr: number[] = [10, 20];
    let strArr: string[] = ["A", "B", "C"];
    let matrix: number[][] = [[1,2,3], [4,5,6]];
    let mixArr: (number | string)[] = [10, "A", 20];
}

/* 튜플 */
// 특정 형태를 갖는 배열을 의미한다.
// 고정된 형태의 값만 올 수 있다는 게 단점이고, 실무에서 자주 사용하지 않는다.
{
    let tuple: [number, string] = [10, "A"];
    let mixTuple: [number, string, object][] = [
        [1, "Hello", {key: "value1"}],
        [2, "World", {key: "value2"}]
    ]
}

/* 객체 */
{
    let obj0: {} = {}; // null과 undefined를 제외한 모든 값을 허용하겠다는 의미가 된다.
    let obj1: object = {}; // array와 function도 허용해버린다. 자동완성과 타입추론이 불가능하다.
    let obj2: Record<string, never> = {}; // `객체의 기 값은 문자열, 다른 타입의 값은 절대 올 수 없다`라는 뜻이다. 가장 권장하는 빈 객체 타입 지정 방법이다.
    
    let user: {
        name: string;
        age: number;
    } = {
        name: "Hayoung",
        age: 20
    }
    
    let person: {
        name: string;
        likesFood: string[];
        address: {
            street: string;
            city: string;
        };
    } = {
        name: "Jhon",
        likesFood: ["apple", "banana"],
        address: {
            street: "Gang-nam",
            city: "Seoul"
        }
    }
}

/* 타입 추론 */
// 변수에 할당 되는 값을 보고 타입스크립트 컴파일러가 타입을 자동으로 추론해준다.

/* readonly */
// 객체를 처음 생성할 때만 값을 할당하고 그 이후에는 변경할 수 없는 속성을 의미한다.
// readonly를 속성 앞에 붙이면 된다.
{
    let me: {
        readonly name: string;
        readonly age: number;
    }
}

/* 선택적 속성(Optional Properties) */
// 해당 속성이 있을수도 있고 없을수도 있을때 : 앞에 ?를 붙인다.
{
    let person: {
        name: string;
        age: number;
        major?: string;
    }
}