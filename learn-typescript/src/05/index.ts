/* 제네릭 */
// 타입을 변수처럼 사용하는 문법
{
    function getFirstElement(
        element: number[] | string[] | boolean[]
    ): number | string | boolean {
        return element[0];
    }

    const r1 = getFirstElement([1, 2, 3]);
    const r2 = getFirstElement(["A", "B", "C"]);
    const r3 = getFirstElement([true, false, false]);
}
{
    function getFirstElement<T>(element: T[]) {
        // <T>는 Type이라는 뜻이며, 어떤 이름이 들어가도 상관은 없으나 일반적으로 T를 쓴다. 제네릭을 사용하면 출력값의 타입이 자동적으로 추론한다.
        return element[0];
    }

    const r1 = getFirstElement<number>([1, 2, 3]);
    const r2 = getFirstElement<string>(["A", "B", "C"]);
    const r3 = getFirstElement([true, false, false]); // 타입추론을 해주기 때문에 타입을 적어주지 않아도 에러가 발생하지 않는다. 일반적으로 제네릭 함수를 호출할 때는 타입명시를 하지 않는다.
    const r4 = getFirstElement([1, "A"]); // 심지어 이것도 된다
}

{
    // 함수 표현식
    const getFirstElement: <T>(element: T[]) => T = (element) => {
        return element[0];
    };
}
{
    // 타입 별칭
    type MyFunc = <T>(element: T[]) => T; // -> 제네릭은 아님! 제네릭이려면 type MyFunc<T> = (element: T[]) => T;
    const getFirstElement: MyFunc = (element) => {
        return element[0];
    };
}
{
    // 인터페이스
    interface MyFunc {
        // -> 제네릭은 아님. 제네릭이려면 interface MyFunc<T> { (element: T[]): T; }
        <T>(element: T[]): T;
    }
    const getFirstElement: MyFunc = (element) => {
        return element[0];
    };
}

// <T, U, K ...>
// T : Type => 일반적인 타입 (가장 흔하게 사용)
// U : Another Type => 두 번째 타입
// K : Key => 객체 타입의 키
// V : Value => 객체 타입의 값
// E : Element => 주로 배열 요소의 타입
// R : Return Type => 반환 값의 타입 (함수에서 사용)

{
    // 제네릭 타입 제약 조건
    // extends
    function getLength<T extends { length: number }>(value: T): number {
        return value.length;
    }

    getLength<number[]>([1, 2]); // ok
    getLength("abc"); // ok
    // getLength(10); // not ok
}

{
    // 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 재사용성이 증가
    // 1. <T, U> -> 2개(), 3개<T, U, K>
    // T: Type -> 일반적인 타입(가장 흔하게 사용)
    function returnValue<T>(value: T): T {
        return value;
    }
    const r1 = returnValue(1);
    const r2 = returnValue([1, 2]);

    // U: Another Type -> 두 번째 타입
    function returnTuple<T, U>(a: T, b: U): [T, U] {
        return [a, b];
    }
    function returnTuple2(
        a: number | number[] | boolean,
        b: number | object
    ): [number | number[] | boolean, number | object] {
        return [a, b];
    }
    const r3 = returnTuple2(1, 2);
    const r4 = returnTuple2([1, 2, 3], { name: "sucoding" });
    const r5 = returnTuple2(true, { name: "sucoding" });

    // K: Key -> 객체 타입의 키
    // V: Value -> 객체 타입의 값
    // 제네릭에 타입 제약 조건
    function getValue<V, K extends keyof V>(obj: V, key: K): V[K] {
        return obj[key];
    }
    const name = getValue({ name: "kim", age: 20 }, "name");
    const gender = getValue({ gender: "male" }, "gender");

    // E: Element -> 주로 배열 요소의 타입
    function firstElement<E>(element: E[]): E {
        return element[0];
    }
    firstElement([1, 2, 3]);
    firstElement(["a", "a"]);
    // R: Return Type -> 반환 값의 타입 (함수에서 사용)

    // L, O, V, E
}
{
    // 제네릭 타입 제약 조건
    // extends
    function getLength<T extends { length: number }>(value: T): number {
        return value.length;
    }

    getLength([1, 2]); // ok
    getLength("abc"); // ok , 래퍼 객체
    // getLength(10); // not ok
}

{
    // 6. 키 선택 타입 별칭
    type Person = {
        name: string;
        age: number;
        gender: string;
    };

    type PersonOfKeys = keyof Person; // "name" | "age" | "gender"
    const key: PersonOfKeys = "gender";

    const car = {
        speed: 100,
    };

    type CarOfKeys = typeof car;
}

{
    function returnTuple<T, U>(a: U, b: T): [U, T] {
        return [a, b];
    }
    const r1 = returnTuple(1, 2); // [1, 2] -> [number, number]
    const r2 = returnTuple(1, "a"); // [1, 'a'] -> [number, string]
}

/* 클래스 */
// 1. 타입 선언 - 변수에 타입을 지정해야 한다
// 2. 접근 제어자 - 속성이나, 메소드에 대한 접근을 제한하는 것, public, protected, private, #
// public(default) : 언제 어디서든 이 속성값에 접근할 수 있다.
// readonly : 외부에서 속성값의 읽기만 가능하다.
// private : 속성값을 숨긴다?
// #(ES2022) : 객체를 생성했을 때 멤버의 속성으로 표현되지 않는다.?
{
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        // 메소드는 원래 밖으로 드러나지 않는다.
        greet() {
            console.log(`Hello, ${this.name}`);
        }
    }

    const person = new Person("hayoung", 25);
    person.greet();
}

/* 유틸리티 타입 */
// -> 어떤 목적을 달성하기 위한 기능을 구현한 커스텀 타입
{
    // Partial<T> : 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
    interface User {
        name: string;
        age?: number;
        gender: "male" | "female";
    }

    const user1: User = {
        name: "Hayoung",
        gender: "female",
    };

    // Partial<T> : 주어진 타입 T의 모든 속성을 선택적으로 만드는 유틸리티 타입
    const guest1: Partial<User> = {
        name: "guest1",
    };

    // Required<T> : 주어진 타입 T의 모든 속성을 필수로 만드는 유틸리티 타입
    const adultUser: Required<User> = {
        name: "JaeGyoung",
        age: 27,
        gender: "male",
    };

    // Readonly<T> : 주어진 타입 T의 모든 속성을 읽기 전용으로 만드는 유틸리티 타입
    const premiumUser: Readonly<User> = {
        name: "sucoading",
        age: 20,
        gender: "male",
    };

    // Pick<T, K> : 주어진 타입 T에서 선택한 속성 K만 추출하여 새로운 타입으로 만드는 유틸리티 타입
    const pick: Pick<User, "name" | "gender"> = {
        name: "JungWu",
        gender: "male",
    };

    // Omit<T, K> : 주어진 타입 T에서 선택한 속성 K를 제외한 나머지 속성만 추출하여 새로운 타입으로 만드는 유틸리티 타입
    const omit: Omit<User, "gender"> = {
        name: "Goda",
    };

    // Record<K, T> : 주어진 키 K와 값 T의 타입을 가지는 객체 타입을 생성하는 유틸리티 타입
    const score: { math: number; englich: number; science: number } = {
        math: 90,
        englich: 90,
        science: 70,
    };

    const score2: Record<string, number> = {
        math: 90,
        englich: 90,
        science: 70,
    };

    // Exclude
}
