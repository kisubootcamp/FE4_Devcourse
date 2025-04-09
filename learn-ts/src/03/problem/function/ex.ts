{
    //문제1. 두 수의 합을 구하는 함수
    // 함수 정의
    const add = (a: number, b: number): number => a + b;
    // 함수 호출
    const result = add(10, 5);
    console.log(result); // 15
}

{
    //문제2. 이름을 받아 인사하는 함수
    // 함수 정의
    // const greet = (name: string): void =>console.log(`Hello, ${name}`);

    function greet(name: string): string {
        return `Hello, ${name}`;
    }
    // 함수 호출
    const greeting = greet('Alice');
    console.log(greeting); // "Hello, Alice!"
}

{
    //문제3. 숫자 배열을 받아 합을 구하는 함수
    // 함수 정의
    const sumAll = (...a: number[]): number => a.reduce((sum, num) => sum + num, 0);
    // 함수 호출
    const total = sumAll(1, 2, 3, 4);
    console.log(total); // 10
}

{
    //문제4. 기본값을 설정한 덧셈 함수
    // 함수 정의
    function sum(a: number, b: number = 0): number {
        return a + b;
    }
    // 함수 호출
    const result = sum(5);
    console.log(result); // 5
}

{
    //문제5. 두 수를 곱하는 함수
    // 함수 정의
    const multiply = (a: number, b: number): number => a * b;
    // 함수 호출
    const product = multiply(4, 5);
    console.log(product); // 20
}

{
    //문제6. 문자열과 숫자를 결합하는 함수
    // 함수 정의
    function concatStringAndNumber(a: string, b: number): string {
        return `${a} + ${b}`;
    }
    // 함수 호출
    const result = concatStringAndNumber('Hello', 10);
    console.log(result); // "Hello10"
}

{
    //문제7. 옵셔널 파라미터를 사용한 인사 함수
    // 함수 정의
    const greet = (name: string, message: string = 'Welcome'): string => `${message}, ${name}!`;
    // 함수 호출
    const greeting1 = greet('Alice', 'Hello');
    const greeting2 = greet('Bob');
    console.log(greeting1); // "Hello, Alice!"
    console.log(greeting2); // "Welcome, Bob!"
}

{
    //문제8. 숫자 배열의 최대값을 구하는 함수
    // 함수 정의
    function findMax(a: number[]): number {
        return Math.max(...a);
    }
    // 함수 호출
    const max = findMax([10, 20, 30, 40]);
    console.log(max); // 40
}

{
    //문제9. 단일 숫자를 두 배로 만드는 함수
    // 함수 정의
    const double: (a: number) => number = (a) => a * 2;

    // 함수 호출
    const doubled = double(10);
    console.log(doubled); // 20
}
