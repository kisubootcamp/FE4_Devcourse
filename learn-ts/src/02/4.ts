{
    let userLists;

    // 타입 추론
    // 변수에 할당되는 값을 보고 타입스크립트 컴파일러가 타입을 추론해주는 현상
    let num = 10;
    let name = 'Hello';

    let bool = true;
    bool = false;
    // bool = 10; // boolean으로 추론된형태이기때문에 숫자는 못들어감

    let unde = undefined;
    let nul = null;
    // undefined,null는 나중에 다른값으로 할당될거라 생각하여 ts가 타입을 any를 붙여줌

    let symbol = Symbol('a');
    let numArr = [1, 2, 3];
    let obj = { name: 'sucoding', age: 20 };
    let big = 100n;
}
