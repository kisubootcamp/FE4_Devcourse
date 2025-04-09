{
    // 1문제 이 변수의 타입을 지정하세요.
    let employee: {
        id: number;
        name: string;
        contact: {
            email: string;
            phone: string;
        };
        department: string;
    } = {
        id: 123,
        name: 'John Doe',
        contact: {
            email: 'john.doe@example.com',
            phone: '123-456-7890',
        },
        department: 'Engineering',
    };

    // 2문제 이 변수의 타입을 지정하세요.
    let students: { name: string; age: number; grade: string }[] = [
        { name: 'Alice', age: 22, grade: 'A' },
        { name: 'Bob', age: 24, grade: 'B' },
        { name: 'Charlie', age: 21, grade: 'C' },
    ];

    // 3문제 이 변수의 타입을 지정하세요.
    let numbers: number[] = [10, 20, 30, 40, 50];

    // 4문제 이 변수의 타입을 지정하세요.
    let users: { name: string; age: number; active: boolean }[] = [
        { name: 'Alice', age: 30, active: true },
        { name: 'Bob', age: 25, active: false },
        { name: 'Charlie', age: 35, active: true },
    ];

    // 5문제 이 변수의 타입을 지정하세요.
    let nestedArray: [string[], number[], string[]] = [['apple', 'banana'], [1, 2, 3], ['cherry']];
    let nestedArray2: (string | number)[][] = [['apple', 'banana'], [1, 2, 3], ['cherry']];
    let nestedArray3: (string[] | number[])[] = [['apple', 'banana'], [1, 2, 3], ['cherry']];

    // 6문제 이 변수의 타입을 지정하세요.
    let words: string[] = ['apple', 'banana', 'cherry', 'kiwi'];

    // 7문제 이 변수의 타입을 지정하세요.
    let items: [
        { id: number; name: string; price: number },
        { id: number; name: string; price: number },
        [string, number]
    ] = [{ id: 1, name: 'Item1', price: 100 }, { id: 2, name: 'Item2', price: 200 }, ['discount', 10]];

    let items2: ({ id: number; name: string; price: number } | (string | number)[])[] = [
        { id: 1, name: 'Item1', price: 100 },
        { id: 2, name: 'Item2', price: 200 },
        ['discount', 10],
    ];

    if ('name' in items2[0]) {
        console.log(items2[0].name);
    }

    // 8문제 이 변수의 타입을 지정하세요.
    let profile: {
        user: { name: string; age: number };
        preferences: string[];
        isActive: boolean;
    } = {
        user: { name: 'John', age: 30 },
        preferences: ['coding', 'reading', 'travelling'],
        isActive: true,
    };

    // 9문제 이 변수의 타입을 지정하세요.
    let mixedData: [string, number, boolean, string, number] = ['apple', 10, true, 'banana', 20];

    // 10문제 이 변수의 타입을 지정하세요.
    let company: {
        name: string;
        address: {
            street: string;
            city: string;
            country: string;
        };
    } = {
        name: 'Tech Corp',
        address: {
            street: '123 Main St',
            city: 'Tech City',
            country: 'Techland',
        },
    };
}
