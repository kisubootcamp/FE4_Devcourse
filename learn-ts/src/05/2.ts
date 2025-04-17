{
    // 제네릭
    // 타입을 변수처럼 사용하는 문법
    // function getFirstElement<T>(element: T[]): T
    // 반환타입을 지정해주지 않아도 추론해줌 
    // 제네릭 방식
    function getFirstElement<T>(element: T[]) {
        return element[0];
    }

    // any -> number[], number
    const arr1 = getFirstElement<number>([1, 2, 3]); // 1
    
    // -> number[] | string[], number | string
    //const arr2 = getFirstElement<string>(["A", "B", "C"]);
    // 타입을 적어주지 않아도 추론해줌
    const arr2 = getFirstElement(["A", "B", "C"]);
    
    // -> number[] | string[] | boolean[], number | string | boolean
    const arr3 = getFirstElement([true, false, true]);
    const arr4 = getFirstElement(["A", 1]);
}

{
    // 함수 표현식(화살표 함수)
    // const getFirstElement = <T>(element: T[]): T => {
    const getFirstElement = <T>(element: T[]) => {
        return element[0];
    }

    const getFirstElement1: <T>(element: T[]) => T = (element) => {
        return element[0];
    }
}
{
    // 타입별칭
    // 타입을 변수에 저장한 것에 불과함
    type MyFunc = <T>(element: T[]) => T;
    const getFirstElement1: MyFunc = (element) => {
        return element[0];
    }
    const arrA1 = getFirstElement1([1, 2, 3]);
    const arrA2 = getFirstElement1(["A", "B", "C"])
    const arrA3 = getFirstElement1([true, false, true]);
    const arrA4 = getFirstElement1(["A", 1]);

    // 제네릭(타입별칭)
    type MyFunc1<T> = (element: T[]) => T;
    const getFirstElement: MyFunc1<unknown> = (element) => {
        return element[0];
    }
    const arr1 = getFirstElement([1, 2, 3]);
    const arr2 = getFirstElement(["A", "B", "C"])
    const arr3 = getFirstElement([true, false, true]);
    const arr4 = getFirstElement(["A", 1]);
}

{
    // 인터페이스
    interface MyFunc1 {
        <T>(element: T[]): T;
    } 
    const getFirstElement: MyFunc1 = (element) => {
        return element[0];
    }
    const arr1 = getFirstElement([1, 2, 3]);
    const arr2 = getFirstElement(["A", "B", "C"])
    const arr3 = getFirstElement([true, false, true]);
    const arr4 = getFirstElement(["A", 1]);
    

}