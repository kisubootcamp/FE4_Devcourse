{
	function getFirstElement(element: number[] | string[] | boolean[]): number | string | boolean {
		return element[0];
	}

	// 호출할 때 <number>를 적는다.
	const r1 = getFirstElement([1, 2, 3]);
	console.log(r1); // 1

	const r2 = getFirstElement(["A", "B", "C"]);
	console.log(r2); // "A"

	const r3 = getFirstElement([true, false, true]);
	console.log(r3); // true

	// 1. 제네릭
	// 타입을 변수처럼 사용하는 문법
	// 원래는 <Type>이라고 적는다. <T>라고 적어도 됨.
	// <Type>(element: Type[]) : number를 전달 받았으면 number배열이다.
	// <Type>(element: [Type, Type, Type]) : number를 전달 받았으면 [number, number, number]인 튜플이다.
	// 이렇게 타입을 변수에 담아 사용하게 하는게 제네릭 문법이다.

	// function getFirstElement1<T>(element: T[]): T {
	function getFirstElement1<Type>(element: Type[]): Type {
		return element[0];
	}

	// 호출할 때 <number>를 적는다.
	// 호출 시 생략해도 근데 타입추론을 해주기 때문에 에러가 나지 않는다.
	// 요즘 추세는 호출시에는 타입 적지 않는게 현업의 추세다.
	const r4 = getFirstElement1<number>([1, 2, 3]);
	console.log(r4); // 1

	const r5 = getFirstElement1<string>(["A", "B", "C"]);
	console.log(r5); // "A"

	const r6 = getFirstElement1([true, false, true]); // 호출 시 생략해도 근데 타입추론을 해주기 때문에 에러가 나지 않는다.
	console.log(r6); // true

	const r7 = getFirstElement1([1, "A"]);
	console.log(r7); // 1
}
{
  // 함수 표현식(화살표 함수)
  const getFirstElement = <T>(element: T[]): T => {
		return element[0];
	}

  const getFirstElement1: <T>(element: T[]) => T = (element) => {
		return element[0];
	}
}
{
  // 타입 별칭
  // 제네릭(타입별칭): 타입에 꺽쇠가 있어야 됨. - <unknown>
  type MyFunc<T> = (element: T[]) => T;
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0]
  }

  const r1 = getFirstElement([1, 2, 3]);
	console.log(r1); // 1

	const r2 = getFirstElement(["A", "B", "C"]);
	console.log(r2); // "A"

	const r3 = getFirstElement([true, false, true]);
	console.log(r3); // true
}
{
  // 타입 별칭
  // 타입을 변수에 저장한 것에 불과함 -> 현업에서 더 많이 사용
  type MyFunc = <T>(element: T[]) => T;
  const getFirstElement: MyFunc = (element) => {
    return element[0]
  }

  const r1 = getFirstElement([1, 2, 3]);
	console.log(r1); // 1

	const r2 = getFirstElement(["A", "B", "C"]);
	console.log(r2); // "A"

	const r3 = getFirstElement([true, false, true]);
	console.log(r3); // true
}
{
  // 인터페이스로
  // 인터페이스는 객체 타입을 지정하는 방식이고, 타입 별칭은 변수에 저장하는 방식.
  // 제네릭 인터페이스 - 인터페이스명에 꺽쇠가 있어야 됨.
  interface MyFunc<T> {
    (element: T[]): T;
  }
  const getFirstElement: MyFunc<unknown> = (element) => {
    return element[0];
  }
}
{
  // 타입을 변수에 저장해서 인터페이스 사용
  interface MyFunc {
    <T>(element: T[]): T;
  }
  const getFirstElement: MyFunc = (element) => {
    return element[0];
  }
}
// 함수 관점에서는 소괄호 앞에 꺽쇠를 붙여야 제네릭, 타입과 인터페이스와 클래스 관점에서는 식별자 뒤에 꺽쇠를 붙여야 제네릭
// <T>로 꼭 안적고 <I>로 적어도 되기 때문에 꺽쇠라고 하는 것.
// 실무에서는 T나 U를 타입변수라고 부른다.
// 매개변수 두개면 타입변수 두개 쓸 수 있다.