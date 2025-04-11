{
	// 1. enum, const enum
	// enum, interface처럼 선언 병합이 된다.
	enum Status {
		Pending, // 0
	}

	enum Status {
		InProgress = "InProgress", // 병합가능. 단, 값을 할당해야 됨. 숫자여도.
	}

	const current: Status = Status.InProgress;
	console.log(current);
	console.log(Status.Pending);
}
{
	// 2.
	// 타입 가드는 정적인 상태에서 검사하는 게 아니라,
	// 동적인 상태에서 검사를 하게 하는 원리다
	let value: unknown = "Hello";
	if (typeof value === "string") {
		console.log(value.toUpperCase()); // 그냥 쓰면 value is of type "unknown" 경고 메시지. 타입 가드 필요.
	}

	// 정적 타입일 때 정의
	console.log((<string>value).toUpperCase());
	console.log((value as string).toUpperCase());
}
{
	// 정(고요할 정)적 타입, 정적 상태 : 코드를 실행해보지 않고 그냥 작성만 한 상태. -> 컴파일 시점에 데이터 타입이 결정된다. (타입스크립트)
	// 동(움직일 동)적 타입, 동적 상태 : 자바스크립트 코드가 움직일 때. 일반적으로 자바스크립트는 동적 타입. 동적 상태다. 모든 타입에 대한 결정을 코드 실행할 때 한다. -> 코드를 실행할 때(런타임에서), 데이터의 타입이 결정된다. (자바스크립트)
}
