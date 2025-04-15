{
	// 제네릭 -> 타입을 변수로 받을 수 있기 때문에 코드의 재사용성이 증가
	// 1. <T, U>
	// T: Type -> 일반적인 타입(가장 흔하게 사용)
	function returnValue<T>(value: T): T {
		return value;
	}
	const r1 = console.log(returnValue(1));
	const r2 = console.log(returnValue([2, 5, 8]));

	// U: Another Type -> 두번째 타입
	function returnTuple<T, U>(a: T, b: U): [T, U] {
		return [a, b];
	}
	const r3 = console.log(returnTuple(20, "kisu"));
	const r4 = console.log(returnTuple([1, 2, 3], { name: "kisu" }));

	// K: Key -> 객체 타입의 키
	// V: Value -> 객체 타입의 값
	// 제네릭 타입 제약
	function getValue<K extends keyof V, V>(obj: V, key: K): V[K] {
		return obj[key];
	}
	const getName = console.log(getValue({ name: "kisu", age: 20 }, "name"));
	const getGender = console.log(getValue({ gender: "male" }, "gender"));

	// E: Element -> 주로 배열 요소의 타입
	function firstElement<E>(element: E[]): E {
		return element[0];
	}
	console.log(firstElement([1, 2, 3]));
	console.log(firstElement(["a", "b", "c"]));
	console.log(firstElement([false, "d", true, 9]));

	// R: Return Type -> 반환 값의 타입 (함수에서 사용)

	// 사실 3개 이상일 때는 저거 뜻에 맞추지 않고 순서대로 씀
}
