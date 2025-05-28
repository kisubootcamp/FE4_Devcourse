{
	// 1.
	// 헝가리안 표기법 -> 앞에 무슨 타입인지 대략적으로 써놓기
	// ex) strName, nNumber ...
	// 요즘은 비권장
	type TUser = {};
	interface IUser {}
	// 오늘날의 추세: 식별자의 이름을 의미있게 잘 지어주는 게 추세
}

{
	// 구별된 유니온 타입
	// 인터페이스, 타입 별칭 둘다 쓸 수 있음

	interface User {
		name: string;
	}
	interface Car {
		name: string;
		speed: number;
	}

	const user: User = { name: "kisu" };
	const car: Car = { name: "bmw", speed: 100 };

	function printValue1(obj: User | Car) {
		if ("speed" in obj) console.log(obj.speed);
		else console.log(obj.name);
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
		// speed: number;
	};

	let car: Car = { name: "bmw", speed: 100 };
	let vehicle: Vehicle = { name: "honda" };

	// 구조적 타이핑
	vehicle = car;
	console.log(vehicle.name);

	function printValue2(obj: Car) {
		console.log(`${obj.name}, ${obj.speed}`);
	}

	// printValue(vehicle);
	// 타입 이름이 아니라 구조에 따라 판단함
}
