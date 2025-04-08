{
    // 1번
    let strHello: string = "Hello";
    console.log("1번 : " + strHello);

    // 2번
    let num42: number = 42;
    console.log("2번 : " + num42);

    // 3번
    let boolTrue: boolean = true;
    console.log("3번 : " + boolTrue);

    // 4번
    let numArr : number[] = [10, 20, 30];
    console.log("4번 : " + numArr);

    // 5번
    let strArr : string[] = ["a", "b", "c"];
    console.log("5번 : " + strArr);

    // 6번 
    let tupleNumStr : [string, number] = ['a', 10];
    console.log("6번 : " + tupleNumStr);

    // 7번
    let nullType : null = null;
    console.log("7번 : " + nullType);
    
    // 8번
    let undefinedType : undefined = undefined;
    console.log("8번 : " + undefinedType);

    // 9번
    let personObj: object = {
        name: "ChoJeongWoo",
        age: 28
    }; 
    let person: {
        name: string;
        age: number;
    } = {
        name: "ChoJeongWoo",
        age: 28
    }; 
    console.log("9번 obj : " + personObj);
    console.log("9번 : " + person);
}