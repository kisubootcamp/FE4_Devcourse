{
	// 범용적인 타입 지정 방법
	// 인덱스 시그니처
	// 한번 정해놓으면 객체에 같은 형식 속성 추가 가능
	// 작성할 땐 편하지만 쓸 때는 불편함
	// 타입 별칭, 인터페이스에서도 사용 가능

	// 객체라서 가능한 방법
	// * 옵셔널 프로퍼티 -> ?
	// * readonly 프로퍼티 -> readonly
	// * 인덱스 시그니처

	const obj: {
		name: string;
		age: number;
		// 확실한 건 적어주고 확실하지 않은 건 인덱스 시그니처를 활용하면 단점 최소화
		[key: string]: string | number;
	} = {
		name: "sucoding",
		age: 20,
	};

	const name = obj.name;
	name.toUpperCase();

	obj.gender = "male";
	console.log(obj);
}
