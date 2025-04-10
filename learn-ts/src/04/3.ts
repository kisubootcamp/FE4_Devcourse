{
    const obj: {
        name: string;
        age?: number; // ?를추가하여 삭제할수있다
    } = {
        name: 'ty',
        age: 26,
    };

    delete obj.age; // 필수속성이므로 삭제할수없음
}
{
    // 범용적인 타입 지정 방법
    // 인덱스 시그니처
    // 객체라서 가능한 방법
    // 옵셔널 프로퍼티 -> ?:
    // readonly 프로퍼티 -> readonly
    // 인덱스 시그니처

    type ObjType = {
        [key: string]: string | number;
    };

    const obj: ObjType = {
        name: 'ty',
        age: 26,
    };

    obj.gender = 'male';
    delete obj.name;
    // name.toUpperCase(); // 안됨

    const obj2: {
        name: string;
        age: number;
    } = {
        name: 'ty',
        age: 26,
    };

    const name2 = obj2.name;
    name2.toUpperCase();
}
