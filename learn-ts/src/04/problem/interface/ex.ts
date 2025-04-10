{
    // 문제1. 간단한 객체 타입 정의
    interface Person {
        name: string;
        age: number;
    }

    const person: Person = {
        name: 'ty',
        age: 26,
    };
}

{
    // 문제2. 메소드가 포함된 인터페이스
    interface Car {
        brand: string;
        model: string;
        start(): void;
    }

    const car: Car = {
        brand: 'hende',
        model: 'avend',
        start() {
            console.log(`${this.brand}, ${this.model} 시작`);
        },
    };
}

{
    // 문제3. 선택적 속성 사용
    interface Employee {
        name: string;
        position: string;
        department?: string;
    }

    const employee: Employee = {
        name: 'ty',
        position: 'position',
    };
}

{
    // 문제4.배열을 포함한 인터페이스
    interface Team {
        name: string;
        members: string[];
    }

    const team: Team = {
        name: 'tyteam',
        members: ['hi', 'hello', 'world'],
    };
}

{
    // 문제5. 상속을 이용한 인터페이스 확장
    interface Animal {
        name: string;
        age: number;
    }

    interface Dog extends Animal {
        breed: string;
    }
}

{
    // 문제6. 인터페이스에서도 메소드 정의
    interface Person {
        name: string;
        age: number;
        greet(): string;
    }

    const person: Person = {
        name: 'ty',
        age: 26,
        greet() {
            return `Hello, my name is ${this.name}`;
        },
    };
}

{
    // 문제7. 다형성을 가진 인터페이스
    interface Shape {
        area(): void;
    }
    interface Circle extends Shape {
        radius: number;
    }
    interface Rectangle extends Shape {
        width: number;
        height: number;
    }
}

{
    // 문제8. 다중 인터페이스를 사용하는 객체
    interface Person {
        name: string;
        age: number;
    }
    interface Address {
        street: string;
        city: string;
        zipcode: number;
    }

    interface Contact extends Person, Address {}

    const contact: Contact = {
        name: 'Ty',
        age: 26,
        street: 'korea',
        city: 'hanum',
        zipcode: 1,
    };
}

{
    // 문제9. 인터페이스에 인덱스 시그니처 사용
    interface Dictionary {
        [key: string]: string;
    }
}

{
    // 문제10. 인터페이스를 사용한 함수 타입정의
    interface Operation {
        (a: number, b: number): number;
    }

    const add: Operation = (a, b) => {
        return a + b;
    };

    const subtract: Operation = (a, b) => {
        return a - b;
    };

    console.log(add(1, 2));
    console.log(subtract(2, 1));
}
