/* 함수 */
// 매개변수와 반환 값의 타입을 지정해주는 것

/* 함수 선언문 : 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법 */
{
    function greet(): void {
        console.timeLog("Greet!");
    }
    greet();


    function sum(n1: number, n2: number): number {
        return n1 + n2;
    }
    const result = sum(10, 20); // 이부분은 타입 추론이 되기 때문에, 타입지정을 해주는 경우는 거의 없다.
    console.log(result);


    function printValue(value: string): void {
        console.log(value);
    }
    printValue("A");


    function add(numbers: number[]): number {
        return numbers.reduce((result, num) => result + num, 0);
    }
    const res = add([1, 2, 3]);
    console.log(res);


    function printObj(user: { name: string; }): void {
        console.log(user.name);
    }
    const obj = { name: "Hayoung" };
    printObj(obj);
}

/* 함수 표현식 : 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법 */
// 가독성 떨어짐..
{
    const greet: () => void = function greet() {
        console.log("Greet!");
    }


    const sum: (n1: number, n2: number) => number = function sum(n1, n2) {
        return n1 + n2;
    }
}

/* 화살표 함수 */
{
    const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;

    const sum2 = (n1: number, n2: number): number => n1 + n2; // 강사님은 이 방법을 더 선호
}