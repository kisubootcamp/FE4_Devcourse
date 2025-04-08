/* 1. 문자열 변수 선언 */
// `string` 타입을 사용하여 `"Hello"` 값을 갖는 문자열 변수를 선언하고, 이 값을 출력하세요.
{
    const str: string = "Hello";

    console.log(str);
}

/* 2. 숫자 변수 선언 */
// `number` 타입을 사용하여 `42` 값을 갖는 변수를 선언하고, 출력하세요.
{
    const num: number = 42;

    console.log(num);
}

/* 3. 불리언 변수 선언 */
// `boolean` 타입을 사용하여 `true` 값을 갖는 변수를 선언하고, 출력하세요.
{
    const bol: boolean = true;

    console.log(bol);
}

/* 4. 숫자 배열 선언 */
// `Array<number>` 또는 `number[]` 타입을 사용하여 숫자 배열을 선언하고, 배열의 요소들을 출력하세요.
{
    const numArr: number[] = [1, 2, 3, 4, 5];

    console.log(numArr);
}

/* 5. 문자열 배열 선언 */
// `Array<string>` 또는 `string[]` 타입을 사용하여 문자열 배열을 선언하고, 배열의 요소들을 출력하세요.
{
    const strArr: string[] = ["a", "b", "c"];

    console.log(strArr);
}

/* 6. 튜플 변수 선언 */
// `tuple` 타입을 사용하여 숫자와 문자열이 섞인 튜플을 선언하고, 이 값을 출력하세요.
{
    const tup: [number, string] = [10, "A"];

    console.log(tup);
}

/* 7. `null`값 할당 */
// `null` 타입을 사용하여 `null` 값을 갖는 변수를 선언하고, 이를 출력하세요.
{
    const nul: null = null;

    console.log(nul);
}

/* 8. `undefined`값 할당 */
// `undefined` 타입을 사용하여 `undefined` 값을 갖는 변수를 선언하고, 이를 출력하세요.
{
    const und: undefined = undefined;

    console.log(und);
}

/* 9. 객체 선언 */
// `object` 타입을 사용하여 이름과 나이를 포함하는 객체를 선언하고, 이를 출력하세요.
{
    const obj: {
        name: {
            first: string;
            last: string;
        };
        age: number;
    } = {
        name: {
            first: "Hayoung",
            last: "Kang"
        },
        age: 25
    }

    console.log(obj);
}