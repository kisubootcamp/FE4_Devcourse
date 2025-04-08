{
    //1.
    const str1 : string = "Hello";
    console.log("1 : ",str1);


    //2.
    const num1 : number = 42;
    console.log("2 : ",num1);

    //3.
    const bool1 : boolean = true;
    console.log("2 : ",bool1)

    //4.
    const numArr1 : number[] = [1,2,3,4,5]
    const numArr2 : Array<number> = [1,2,3,4,5]
    console.log("4 : ",numArr1)
    console.log("4 : ",numArr2)

    //5.
    const strArr1 : string[] = ["A","B","C","D"];
    const strArr2 : Array<string> = ["A","B","C","D"];
    console.log("5 : ",strArr1)
    console.log("5 : ",strArr2)

    //6.
    const mixArr1 : [string, number] = ["dog", 3];
    console.log("6 : ",mixArr1)

    //7.
    const nul : null = null;
    console.log("7 : ",nul);

    //8.
    const undefine : undefined = undefined;
    console.log("8 : ",undefine);

    //9.
    const person : { name: string; age:number } = {
        name : "mimi",
        age : 20,
    }
    console.log("9 : ",person);

}