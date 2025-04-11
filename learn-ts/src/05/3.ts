{
	// 제네릭 -> 타입으 변수로 받을 수 있기 때문에 코드의 재사용성이 증가
	// 1. <T, U> -> 실무적 관점에서 제네릭 타입변수를 2개쓰는건 일반적, 3개까지 쓰는건 본적이 거의 없다.
	// 따라서 T, U로 퉁치는 분위기. 세개 쓸 때는 그냥 <T, U, K>하는 편
	// T : Type -> 일반적인 타입(가장 흔하게 사용)
	function returnValue<T>(value: T): T {
		return value;
	}

	const r1 = returnValue(1);
	const r2 = returnValue([1, 2]);

	// U : Another Type -> 두 번째 타입
	function returnTuple<T, U>(a: T, b: U): [T, U] {
		return [a, b];
	}
	const r3 = returnTuple(1, 2);
	const r4 = returnTuple([1, 2, 3], { name: "ys" });

	// 제네릭 안쓰면
	function returnTuple2(a: number | number[], b: number | object): [number | number[], number | object] {
		return [a, b];
	}
	// K : Key -> 객체 타입의 키
	// V : Value -> 객체 타입의 값
  // 제네릭 타입 제약 : extends 키워드
  // K extends keyof V : V에 오는 키값만 K로 올 수 있음. 이렇게 extends로 제약을 걸어 준다.
	// function getValue(obj: {name: string, age: number} | {gender: string}, key: string):any { // 에러 발생
	function getValue<K extends keyof V, V>(obj: V, key: K):V[K] { // 그래도 에러가 나는데, 그 이유는 넘어온 객체에 해당 키가 없을 수도 있지 않냐는 걱정을 하기 때문에
		return obj[key]; // 객체 값 출력
	}

  // <K, V>가 매개변수의 실제 순서라고 생각하면 안됨. ()안의 순서가 진짜 매개변수 순서다.
  // 관례 때문에 <K, V>로 순서 적는 것.
  // 순서 너무 헷갈린다 하면 매개변수 순서로 써도 된다. -> 익숙해지면 K를 앞에 적자.
	const name = getValue({ name: "kin", age: 20 }, "name");
	const age = getValue({ gender: "male" }, "gender");
	// E : Element -> 주로 배열 요소의 타입
  function firstElement<E>(element: E[]):E {
    return element[0];
  }

  firstElement([1, 2, 3]);
  firstElement(["a", "a"]);
	// R : Return Type -> 반환 값의 타입 (함수에서 사용)

	// L, O, V, E : 마음대로 해도 된다.

  function firstElement1<E>(element: E):E {
    return element;
  }
  console.log(firstElement1([["1"], ["2"], [0]]))
}
