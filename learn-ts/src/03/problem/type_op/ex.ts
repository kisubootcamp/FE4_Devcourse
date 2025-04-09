{
    //문제1.유니언 타입 사용하기: 값 출력하기
    const printValue = (a: string | number): void => console.log(`${a}`);

    printValue('Hello'); // "Hello" 출력
    printValue(42); // 42 출력
}

{
    //문제2.유니언 타입을 사용한 조건 처리
    function doubleOrLength(a: string | number): string | number {
        if (typeof a === 'string') {
            return a.length;
        } else {
            return a * 2;
        }
    }

    console.log(doubleOrLength('hello')); // 5 (문자열 "hello"의 길이)
    console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

{
    //문제3.인터섹션 타입 사용하기: 객체 합치기(아직 못품)
    const mergeObjects = (
        a: { name: string; age: number },
        b: { jobTitle: string; salary: number }
    ): { name: string; age: number } & { jobTitle: string; salary: number } => {
        return { ...a, ...b };
    };
    const person = { name: 'Alice', age: 30 };
    const employee = { jobTitle: 'Engineer', salary: 5000 };
    const mergedObject = mergeObjects(person, employee);
    console.log(mergedObject);
    // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

{
    //문제4.유니언 타입을 사용한 배열 처리
    function getFirstElement(a: number[] | string[]): number | string | undefined {
        return a.length > 0 ? a[0] : undefined;
    }

    console.log(getFirstElement([1, 2, 3])); // 1
    console.log(getFirstElement(['a', 'b', 'c'])); // "a"
    console.log(getFirstElement([])); // undefined
}

{
    //문제5.유니언 타입을 사용한 값 비교
    const isEqual = (a: number | string, b: number | string): boolean => {
        return a === b;
    };

    console.log(isEqual(10, 10)); // true
    console.log(isEqual('hello', 'world')); // false
    console.log(isEqual(5, '5')); // false
}

{
    //문제6.인터섹션 타입을 활용한 필드 업데이트
    type UpdatePerson = {
        name: string;
        age: number;
    };
    function updateAddress(
        a: UpdatePerson,
        address?: string | undefined
    ): UpdatePerson | (UpdatePerson & { address: string | undefined }) {
        return address != null ? { ...a, address } : { ...a };
    }

    const updatedPerson = updateAddress({ name: 'Jane', age: 28 }, '123 Maple St');
    console.log(updatedPerson);
    // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

    const updatedPersonWithoutAddress = updateAddress({ name: 'John', age: 22 });
    console.log(updatedPersonWithoutAddress);
    // 예상 출력: { name: "John", age: 22 }
}

{
    //문제7.유니언 타입을 사용한 함수 반환 타입
    type MaxValue = number | string;
    const maxValue = (a: MaxValue, b: MaxValue): MaxValue => {
        return typeof a === 'number' && typeof b === 'number' ? Math.max(a, b) : a > b ? a : b;
    };

    console.log(maxValue(10, 20)); // 20
    console.log(maxValue('apple', 'banana')); // "banana"
    console.log(maxValue(30, 30)); // 30
    console.log(maxValue('cat', 'dog')); // "dog"
}

{
    //문제8.유니언 타입으로 함수 오버로딩하기
    function getValue(a: number): string;
    function getValue(a: string): string;
    function getValue(a: string | number): string {
        return typeof a === 'number' ? `${a}` : a;
    }

    console.log(getValue(123)); // "123"
    console.log(getValue('abc')); // "abc"
}

{
    //문제9.인터섹션 타입을 활용한 객체 합치기 (다양한 속성 포함)
    type Person = {
        name: string;
        age: number;
    };
    type Contact = {
        email: string;
    };
    const createContact = (a: Person, b: Contact): Person & Contact => {
        return { ...a, ...b };
    };

    const person = { name: 'Alice', age: 28 };
    const contact = { email: 'alice@example.com' };

    const personWithContact = createContact(person, contact);
    console.log(personWithContact);
    // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

{
    //문제10.유니언 타입을 사용한 나이 체크
    function getAge(a: string | number): number {
        return typeof a === 'string' ? Number(a) : a;
    }

    console.log(getAge('25')); // 25
    console.log(getAge(30)); // 30
    console.log(getAge('abc')); // NaN
}
