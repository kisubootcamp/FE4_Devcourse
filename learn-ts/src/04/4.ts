{
	// 1.
	// 타입인지 인터페이스인지 알기 어려움.
	// 헝가리안 방법 T나 I prefix를 사용했는데
	type TUser = {};
	interface IUser {}

	const user: TUser = {};
	const urer2: IUser = {};

	// 헝가리안사용하지 않도록 권장하는 추세 ()
	//  오늘날의 추세 -> 식별자의 이름을 의미있게 잘 지어주는게 추세
	type Usre = {};
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

	const user: User = { name: "ys" };
	const car: Car = { speed: 10 };

	function printValue(obj: User) {
		console.log(obj.name);
	}
	printValue(user); // User 타입인것만 전달 가능
	printValue(car); // 타입 에러

	// -> 해결
	function printValue1(obj: User | Car) {
		if ("name" in obj) console.log(obj.name); // 타입 가드 없이는 obj.name을 사용할 수가 없음
		else console.log(`${obj.speed}`);
	}
	printValue1(user);
	printValue1(car);
}
{
	// 구별된 유니온 타입.
	// 타입 별칭이어도 중복되지 않은 속성으로 타입 가드 적어야 한다.
	interface User {
		name: string;
	}

	interface Car {
		name: string;
		speed: number;
	}

	const user: User = { name: "ys" };
	const car: Car = { name: "bmw", speed: 10 };

	// -> 해결
	function printValue1(obj: User | Car) {
		if ("speed" in obj) console.log(obj.speed); // 타입 가드는 중복되지 않는 속성으로 해줘야 된다.
		else console.log(`${obj.name}`);
	}
	printValue1(user);
	printValue1(car);
}

{
	type Car = {
		name: string;
		speed: number;
	};

	type Vehicle = {
		name: string;
		speed: number;
	};

	let car: Car = { name: "bmw", speed: 10 };
	let vehicle: Vehicle = { name: "honda", speed: 200 };

	car = vehicle; // 할당 가능. 심지어 타입도 여전히 Car
	vehicle = car; // 할당 가능. 심지어 타입도 여전히 Vehicle
	// 타입이 달라도 할당이 되네?
	// -> 구조적 타이핑 때문에 가능
	//    : 타입을 비교할 때 정의된 이름으로 비교하는게 아니라 구조를 보고 비교한다.

	function printValue(obj: Car) {
		console.log(`${obj.name}, ${obj.speed}`);
	}

	printValue(vehicle); // <- 다른 타입인데 넣어도 에러 안생긴다.
	// 구조적 타이핑은 이름이나 선언방식이 아니라 구조만 보고 비교하기 때문에 하나는 type, 하나는 interface였어도 호환 가능하다.
	// 작은 속성이 큰 속성으로 들어가는건 가능하다
	type Car1 = {
		name: string;
		speed: number;
	};

	type Vehicle1 = {
		name: string;
	};

	let car1: Car = { name: "bmw", speed: 10 };
	let vehicle1: Vehicle1 = { name: "honda" };

	vehicle1 = car1;
  console.log(vehicle1) //{ name: 'bmw', speed: 10 }
	console.log(vehicle1.name); // 접근 가능
	// console.log(vehicle1.speed); // 값이 존재는 하지만 접근 불가
}
