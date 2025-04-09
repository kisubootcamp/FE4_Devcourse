{
    // 내 정리
    // 함수
    // 매개변수와 반환 값의 타입을 지정해주는 것
    //return
    // void -> 아무것도 반환하지 않는다.
    // 함수 선언문
    // 함수 표현식
    // -> 함수 자체에 매개변수와 반환 값을 타입을 지정하는 방법
    // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법
    let num: number = 10;

    const greet: () => void = function greet(): void {
        console.log('Greet');
    };

    // const greet = function greet(): void{
    //     console.log("Greet");
    // };//함수 표현식

    // function greet(): void {
    //     console.log('Greet');
    // }// 함수 선언문
    greet();

    const sum: (n1: number, n2: number) => number = function sum(n1, n2) {
        return n1 + n2;
    };
    // function sum(n1: number, n2: number): number {
    //     return n1 + n2;
    // }
    const result = sum(10, 20);
    console.log(result);

    function printValue(value: string): void {
        console.log(value);
    }

    printValue('A');

    // function add(nubmers: number[]): number {
    //     return nubmers.reduce((result, num) => result + num, 0);
    // }
    // const res = add([1, 2, 3]);

    // function add(...nubmers: number[]): number {
    //     return nubmers.reduce((result, num) => result + num, 0);
    // } // 함수의 매개변수는 타입추론이 되지않는다.

    const add: (...numebrs: number[]) => number = (...numbers) => numbers.reduce((result, num) => result + num, 0);

    const res = add(1, 2, 3);
    console.log(res);

    function printObj(userObj: { name: string }): void {
        console.log(userObj.name);
        // return userObj.name;
        // return 10; // 값이 명확하면 타입추론이된다.
    }
    printObj({ name: 'sucoding' });
}

{
    {
        // 함수
        // 매개 변수와 반환 값의 타입을 지정해주는 것
        // return
        // void -> 아무것도 반환하지 않는다
        // 함수 선언문
        // 함수 표현식
        // 화살표 함수
        // -> 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법
        // -> 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법
        let num: number = 10;

        const greet: () => void = () => {
            console.log('Greet!');
        };

        const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
        const sun = (n1: number, n2: number): number => n1 + n2;

        const printValue: (value: string) => void = (value) => {
            console.log(value);
        };

        const add: (...numbers: number[]) => number = (...numbers) => numbers.reduce((result, num) => result + num, 0);

        const printObj: (userObj: { name: string }) => void = (userObj) => {
            console.log(userObj.name);
        };
    }
}
