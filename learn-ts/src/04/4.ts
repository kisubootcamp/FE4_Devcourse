{
    // 1.
    // 마이크로 소프트 -> 헝가리 출신 개발자
    // 헝가리안 표기법
    // number -> nNumber
    // num -> fNumber
    // name -> strName
    type TUser = {};
    interface IUser {}

    const user: TUser = {};
    const user2: IUser = {};

    // 사용하지 않도록 권장하는 추세

    // 오늘날의 추세 -> 식별자의 이름을 의미있게 잘 지어주는 게 추세
    type User = {};
    type Car = {};
    type Color = {};
}

{
    //
    interface User {
        name: string;
    }

    interface Car {
        speed: number;
    }

    const user: User = { name: 'sucoding' };
    const car: Car = { speed: 100 };

    function printValue(value: User) {
        console.log(value.name);
    }
    printValue(user);
}

{
    // 구별된 유니온 타입
    interface User {
        name: string;
    }

    interface Car {
        name: string;
        speed: number;
    }

    const user: User = { name: 'sucoding' };
    const car: Car = { name: 'bmw', speed: 100 };

    function printValue(obj: User | Car) {
        // if ('name' in obj) console.log(obj.name);
        // else console.log(`${obj.speed}`);
        // 타입가드가 작동하지않음 -> name 유저,타입 둘다 존재하여 구분을못함
        if ('speed' in obj) console.log(obj.name);
        else console.log(`${obj.name}`);
    }
    printValue(user);
    printValue(car);
}

{
    type Car = {
        name: string;
        speed: number;
    };

    type Vehicle = {
        name: string;
        // speed: number;
    };

    let car: Car = { name: 'bmw', speed: 100 };
    let vehicle: Vehicle = { name: 'honda' };

    // 구조적 타이핑
    // vehicle = car;
    // console.log(vehicle); // name만 접근가능, speed는 접근못함

    // car = vehicle;
    // vehicle = car;

    // 큰속성에서 작은속성은 가능하지만 작은속성에서 큰것은 안됨
    function printValue(obj: Vehicle) {
        // console.log(`${obj.name}, ${obj.speed}`);
        console.log(`${obj.name}`);
    }

    printValue(vehicle);
}
