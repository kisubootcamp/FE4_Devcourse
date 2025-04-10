{
	const obj: {
		name: string;
		age?: number;
	} = {
		name: "uys",
		age: 25,
	};

	const name2 = obj.name;
	name2.toUpperCase(); // 사용할 때는 쉽지만 추가 삭제는 어렵다.

	// delete  // 동적으로 추가, 삭제 안됨.
	// 범용적인 타입 지정 방법
	// 인덱스 시그니처 : 키 문자열, 값이 문자열이나 숫자면 어떤것도 추가 가능
	const obj2: {
		[key: string]: string | number;
	} = {
		name: "uys",
		age: 25,
	};

	const name = obj2.name;
	name.toUpperCase(); // 사용할 때 어렵다. 추가 삭제는 쉽지만.

	obj2.gender = "male";
	delete obj2.name;

	// 두개를 합쳐서 확실한거 다 적어주고, 화실하지 않은건 인덱스 시그니처를 사용한다,
	const obj3: {
		name: string;
		age: number;
		[key: string]: string | number;
	} = {
		name: "uys",
		age: 25,
	};

	// 객체라서 가능한 방법
	// 옵셔널 프로퍼티 -> ?
	// readonly 프로퍼티 -> readonly
	// 인덱스 시그니처 -> 타입별칭, interface다 사용 가능

	type ObjType = {
		[key: string]: string | number;
	};

	const obj4: ObjType = {
		name: "ys",
		age: 25,
	};

  interface ObjTypeInterface {
		[key: string]: string | number;
	};
}
