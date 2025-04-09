{
    // 타입 별칭
    // number,string,boolean...
    type Level = number; // 첫글자는 항상 대문자로 만들어야됨
    let level: Level = 10;
    let level2: number = 10;

    // 타입 별칭
    // type-> 나만의 타입을 지정하는 방법
    type ComplexType = {
        id: number;
        value: string;
        attributes: { weight: number; color: string };
    };

    // let complexStructure: {
    //     id: number;
    //     value: string;
    //     attributes: { weight: number; color: string };
    // }[] = [
    //     { id: 1, value: 'apple', attributes: { weight: 1.2, color: 'green' } },
    //     { id: 2, value: 'banana', attributes: { weight: 0.5, color: 'yellow' } },
    //     { id: 3, value: 'cherry', attributes: { weight: 0.2, color: 'red' } },
    // ];

    let complexStructure: ComplexType[] = [
        { id: 1, value: 'apple', attributes: { weight: 1.2, color: 'green' } },
        { id: 2, value: 'banana', attributes: { weight: 0.5, color: 'yellow' } },
        { id: 3, value: 'cherry', attributes: { weight: 0.2, color: 'red' } },
    ];
}
