{
    // 1.
    let obj: { readonly name: string; age: number; gender?: string } = {
        name: 'sucoding',
        age: 20,
    };

    // obj.name = "jane"; // readonly를 선언하면 그 속성은 변경할수없다.

    // 나중에 속성 추가
    obj.gender = 'Female'; // 속성에 ?를 붙이면 옵셔널 속성이된다. -> 있어도되고없어도되는 속성을 지정
}
